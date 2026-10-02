import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { getLeads, updateLead, deleteLead, testDbConnection } from '@/lib/db';

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'all';
    const search = searchParams.get('search') || '';
    const limit = parseInt(searchParams.get('limit') || '100', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    // Test DB connection
    const dbStatus = await testDbConnection();

    if (!dbStatus.connected) {
      return NextResponse.json({
        success: false,
        error: `Database connection error: ${dbStatus.error}`,
        dbConnected: false,
        leads: [],
        total: 0,
      });
    }

    const { leads, total } = await getLeads({ status, search, limit, offset });

    // Calculate quick stats across all leads
    const allResult = await getLeads({ status: 'all', limit: 1000 });
    const stats = {
      total: allResult.total,
      new: allResult.leads.filter(l => l.status === 'new').length,
      contacted: allResult.leads.filter(l => l.status === 'contacted').length,
      qualified: allResult.leads.filter(l => l.status === 'qualified').length,
      closed: allResult.leads.filter(l => l.status === 'closed').length,
    };

    return NextResponse.json({
      success: true,
      dbConnected: true,
      leads,
      total,
      stats,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { success: false, error: message, leads: [], total: 0 },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: 'Lead ID is required' }, { status: 400 });
    }

    const updated = await updateLead(Number(id), { status, notes });
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Lead not found or no changes made' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Lead updated successfully' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Lead ID is required' }, { status: 400 });
    }

    const deleted = await deleteLead(Number(id));
    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Lead deleted' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
