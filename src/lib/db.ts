import mysql from 'mysql2/promise';

/**
 * MariaDB / MySQL Database Client for GasFlowmeter Leads
 *
 * Configured with connection pooling and automated table initialization.
 * Reads environment variables with fallback to Hostinger database credentials.
 */

const DB_CONFIG: mysql.PoolOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'u502731315_FlowGas0243',
  password: process.env.DB_PASSWORD || 'FlowGas@#0243Meter',
  database: process.env.DB_NAME || 'u502731315_FlowGas_Meter',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

let pool: mysql.Pool | null = null;
let isInitialized = false;

export function getDbPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool(DB_CONFIG);
  }
  return pool;
}

/**
 * Ensures the `contact_leads` table exists in the database.
 */
export async function initDb(): Promise<void> {
  if (isInitialized) return;
  const db = getDbPool();

  const createTableSql = `
    CREATE TABLE IF NOT EXISTS contact_leads (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL,
      phone VARCHAR(50) DEFAULT NULL,
      company VARCHAR(150) DEFAULT NULL,
      product VARCHAR(100) DEFAULT NULL,
      message TEXT NOT NULL,
      ip_address VARCHAR(50) DEFAULT NULL,
      user_agent TEXT DEFAULT NULL,
      status ENUM('new', 'contacted', 'qualified', 'closed') DEFAULT 'new',
      notes TEXT DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_created_at (created_at),
      INDEX idx_status (status),
      INDEX idx_email (email)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `;

  try {
    await db.query(createTableSql);
    isInitialized = true;
  } catch (error) {
    console.error('Failed to initialize database table:', error);
    throw error;
  }
}

export interface LeadRecord {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  product: string | null;
  message: string;
  ip_address: string | null;
  user_agent: string | null;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface NewLeadInput {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  product?: string | null;
  message: string;
  ipAddress?: string | null;
  userAgent?: string | null;
}

/**
 * Inserts a new lead into the database.
 */
export async function saveLead(lead: NewLeadInput): Promise<number> {
  await initDb();
  const db = getDbPool();

  const insertSql = `
    INSERT INTO contact_leads 
      (first_name, last_name, email, phone, company, product, message, ip_address, user_agent, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')
  `;

  const values = [
    lead.firstName,
    lead.lastName,
    lead.email,
    lead.phone || null,
    lead.company || null,
    lead.product || null,
    lead.message,
    lead.ipAddress || null,
    lead.userAgent || null,
  ];

  const [result] = await db.execute<mysql.ResultSetHeader>(insertSql, values);
  return result.insertId;
}

/**
 * Fetches leads with optional filtering and pagination.
 */
export async function getLeads(options?: {
  status?: string;
  search?: string;
  limit?: number;
  offset?: number;
}): Promise<{ leads: LeadRecord[]; total: number }> {
  await initDb();
  const db = getDbPool();

  const limit = options?.limit ?? 50;
  const offset = options?.offset ?? 0;
  const whereClauses: string[] = [];
  const params: (string | number)[] = [];

  if (options?.status && options.status !== 'all') {
    whereClauses.push('status = ?');
    params.push(options.status);
  }

  if (options?.search && options.search.trim()) {
    const s = `%${options.search.trim()}%`;
    whereClauses.push('(first_name LIKE ? OR last_name LIKE ? OR email LIKE ? OR company LIKE ? OR phone LIKE ?)');
    params.push(s, s, s, s, s);
  }

  const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';

  // Get total count
  const countSql = `SELECT COUNT(*) as count FROM contact_leads ${whereSql}`;
  const [countRows] = await db.query<mysql.RowDataPacket[]>(countSql, params);
  const total = Number(countRows[0]?.count || 0);

  // Get leads
  const querySql = `
    SELECT * FROM contact_leads 
    ${whereSql} 
    ORDER BY created_at DESC 
    LIMIT ? OFFSET ?
  `;
  const [rows] = await db.query<mysql.RowDataPacket[]>(querySql, [...params, limit, offset]);

  return {
    leads: rows as LeadRecord[],
    total,
  };
}

/**
 * Updates lead status or notes.
 */
export async function updateLead(
  id: number,
  updates: { status?: 'new' | 'contacted' | 'qualified' | 'closed'; notes?: string }
): Promise<boolean> {
  await initDb();
  const db = getDbPool();

  const setClauses: string[] = [];
  const values: (string | number)[] = [];

  if (updates.status) {
    setClauses.push('status = ?');
    values.push(updates.status);
  }
  if (updates.notes !== undefined) {
    setClauses.push('notes = ?');
    values.push(updates.notes);
  }

  if (setClauses.length === 0) return false;

  values.push(id);
  const sql = `UPDATE contact_leads SET ${setClauses.join(', ')} WHERE id = ?`;
  const [result] = await db.execute<mysql.ResultSetHeader>(sql, values);

  return result.affectedRows > 0;
}

/**
 * Deletes a lead by ID.
 */
export async function deleteLead(id: number): Promise<boolean> {
  await initDb();
  const db = getDbPool();

  const sql = 'DELETE FROM contact_leads WHERE id = ?';
  const [result] = await db.execute<mysql.ResultSetHeader>(sql, [id]);
  return result.affectedRows > 0;
}

/**
 * Tests database connectivity.
 */
export async function testDbConnection(): Promise<{ connected: boolean; error?: string }> {
  try {
    const db = getDbPool();
    await db.query('SELECT 1');
    return { connected: true };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return { connected: false, error: message };
  }
}
