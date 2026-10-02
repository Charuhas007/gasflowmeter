"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Lock,
  LogOut,
  RefreshCw,
  Download,
  Search,
  CheckCircle2,
  Clock,
  Briefcase,
  Mail,
  Phone,
  Building2,
  Eye,
  Trash2,
  Database,
  ExternalLink,
  X,
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react';

interface Lead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  product: string | null;
  message: string;
  ip_address: string | null;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  notes: string | null;
  created_at: string;
  updated_at: string;
}

interface Stats {
  total: number;
  new: number;
  contacted: number;
  qualified: number;
  closed: number;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, new: 0, contacted: 0, qualified: 0, closed: 0 });
  const [dbConnected, setDbConnected] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [notesInput, setNotesInput] = useState('');
  const [isSavingNotes, setIsSavingNotes] = useState(false);

  // Check auth on load
  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/auth');
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
      if (data.authenticated) {
        fetchLeads();
      }
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Fetch leads
  const fetchLeads = async (customFilter?: string, customSearch?: string) => {
    setIsLoading(true);
    setErrorMsg('');
    try {
      const f = customFilter !== undefined ? customFilter : statusFilter;
      const s = customSearch !== undefined ? customSearch : search;
      const query = new URLSearchParams({
        status: f,
        search: s,
        limit: '150',
      });

      const res = await fetch(`/api/admin/leads?${query.toString()}`);
      const data = await res.json();

      if (data.success) {
        setLeads(data.leads || []);
        if (data.stats) setStats(data.stats);
        setDbConnected(data.dbConnected ?? true);
      } else {
        setErrorMsg(data.error || 'Failed to load inquiries');
        setDbConnected(data.dbConnected ?? false);
      }
    } catch (err) {
      setErrorMsg('Failed to connect to backend service.');
    } finally {
      setIsLoading(false);
    }
  };

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setAuthError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
        setPassword('');
        fetchLeads();
      } else {
        setAuthError(data.error || 'Invalid credentials');
      }
    } catch {
      setAuthError('Connection error. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
    } finally {
      setIsAuthenticated(false);
      setLeads([]);
    }
  };

  // Status updater
  const handleStatusChange = async (leadId: number, newStatus: Lead['status']) => {
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setLeads(prev =>
          prev.map(l => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
        // Refresh stats
        fetchLeads();
      }
    } catch {
      alert('Failed to update status');
    }
  };

  // Save notes
  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    setIsSavingNotes(true);
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedLead.id, notes: notesInput }),
      });
      const data = await res.json();
      if (data.success) {
        setSelectedLead({ ...selectedLead, notes: notesInput });
        setLeads(prev =>
          prev.map(l => (l.id === selectedLead.id ? { ...l, notes: notesInput } : l))
        );
      }
    } finally {
      setIsSavingNotes(false);
    }
  };

  // Delete lead
  const handleDeleteLead = async (leadId: number) => {
    if (!window.confirm('Are you sure you want to permanently delete this lead?')) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${leadId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setLeads(prev => prev.filter(l => l.id !== leadId));
        if (selectedLead?.id === leadId) setSelectedLead(null);
        fetchLeads();
      }
    } catch {
      alert('Failed to delete lead');
    }
  };

  // CSV Export
  const exportToCsv = () => {
    if (leads.length === 0) {
      alert('No leads to export.');
      return;
    }

    const headers = ['ID', 'Date (UTC)', 'First Name', 'Last Name', 'Email', 'Phone', 'Company', 'Product', 'Status', 'Message', 'Notes'];
    const rows = leads.map(l => [
      l.id,
      `"${l.created_at}"`,
      `"${(l.first_name || '').replace(/"/g, '""')}"`,
      `"${(l.last_name || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.phone || '').replace(/"/g, '""')}"`,
      `"${(l.company || '').replace(/"/g, '""')}"`,
      `"${(l.product || '').replace(/"/g, '""')}"`,
      `"${l.status}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `GasFlowmeter_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = useMemo(() => {
    return leads.filter(l => {
      const matchesStatus = statusFilter === 'all' || l.status === statusFilter;
      const s = search.toLowerCase();
      const matchesSearch =
        !s ||
        l.first_name?.toLowerCase().includes(s) ||
        l.last_name?.toLowerCase().includes(s) ||
        l.email?.toLowerCase().includes(s) ||
        l.company?.toLowerCase().includes(s) ||
        l.phone?.toLowerCase().includes(s) ||
        l.product?.toLowerCase().includes(s);
      return matchesStatus && matchesSearch;
    });
  }, [leads, statusFilter, search]);

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoStr;
    }
  };

  // Loading initial state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-6 h-6 animate-spin text-blue-500" />
          <span className="text-slate-300 font-medium">Verifying authorization...</span>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // LOGIN SCREEN
  // ─────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-4 shadow-sm">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              GasFlowmeter Admin
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Authorized access to customer inquiries & MariaDB leads
            </p>
          </div>

          {authError && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Administrator Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoggingIn ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Access Dashboard</span>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
            Manas Microsystems Pvt. Ltd. · Secure Lead Engine
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // MAIN DASHBOARD
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20">
                M
              </div>
              <div>
                <div className="font-extrabold text-slate-900 tracking-tight text-base leading-tight">
                  Manas Microsystems
                </div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Lead Management Engine
                </div>
              </div>
            </div>

            {/* DB Status Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border bg-slate-50">
              <Database className="w-3.5 h-3.5 text-slate-500" />
              <span>MariaDB:</span>
              {dbConnected ? (
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Connected (u502731315_FlowGas_Meter)
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-amber-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Offline / Awaiting Local Server
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchLeads()}
              disabled={isLoading}
              title="Refresh leads"
              className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-all"
            >
              <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin text-blue-600' : ''}`} />
            </button>

            <button
              onClick={exportToCsv}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-all"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-slate-600 hover:text-red-600 hover:bg-red-50 text-xs font-semibold rounded-xl border border-slate-200 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Error Notification */}
        {errorMsg && (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold">Database Notice:</p>
              <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Total Leads</span>
              <Briefcase className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900">{stats.total}</div>
            <p className="text-xs text-slate-400 mt-1">All time inquiries</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">New Leads</span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            </div>
            <div className="text-3xl font-extrabold text-blue-600">{stats.new}</div>
            <p className="text-xs text-slate-400 mt-1">Needs attention</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Contacted</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-3xl font-extrabold text-amber-600">{stats.contacted}</div>
            <p className="text-xs text-slate-400 mt-1">In communication</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Qualified</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-extrabold text-emerald-600">{stats.qualified}</div>
            <p className="text-xs text-slate-400 mt-1">Ready for quotation</p>
          </div>
        </div>

        {/* Toolbar: Search & Filter */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, email, company, product..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {[
              { id: 'all', label: 'All' },
              { id: 'new', label: 'New' },
              { id: 'contacted', label: 'Contacted' },
              { id: 'qualified', label: 'Qualified' },
              { id: 'closed', label: 'Closed' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  statusFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">ID & Date</th>
                  <th className="py-4 px-6">Customer</th>
                  <th className="py-4 px-6">Company</th>
                  <th className="py-4 px-6">Product Interest</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400">
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />
                          <span>Fetching inquiries...</span>
                        </div>
                      ) : (
                        'No inquiries found matching criteria.'
                      )}
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map(lead => (
                    <tr key={lead.id} className="hover:bg-slate-50/75 transition-colors">
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="font-bold text-slate-900">#{lead.id}</div>
                        <div className="text-xs text-slate-400">{formatDate(lead.created_at)}</div>
                      </td>

                      <td className="py-4 px-6">
                        <div className="font-semibold text-slate-900">
                          {lead.first_name} {lead.last_name}
                        </div>
                        <div className="text-xs text-blue-600 hover:underline">
                          <a href={`mailto:${lead.email}`}>{lead.email}</a>
                        </div>
                        {lead.phone && (
                          <div className="text-xs text-slate-500">
                            <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                          </div>
                        )}
                      </td>

                      <td className="py-4 px-6">
                        <div className="text-slate-800 font-medium">{lead.company || '—'}</div>
                      </td>

                      <td className="py-4 px-6">
                        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                          {lead.product || 'General Inquiry'}
                        </span>
                      </td>

                      <td className="py-4 px-6">
                        <select
                          value={lead.status}
                          onChange={e => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                          className={`text-xs font-semibold rounded-lg px-2.5 py-1.5 border focus:outline-none cursor-pointer ${
                            lead.status === 'new'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : lead.status === 'contacted'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : lead.status === 'qualified'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-slate-100 text-slate-600 border-slate-300'
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>

                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setSelectedLead(lead);
                              setNotesInput(lead.notes || '');
                            }}
                            className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* ─────────────────────────────────────────────────────────────
          LEAD DETAILS MODAL
      ───────────────────────────────────────────────────────────── */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                    Lead #{selectedLead.id}
                  </span>
                  <span className="text-xs text-slate-400">
                    {formatDate(selectedLead.created_at)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mt-1 text-white">
                  {selectedLead.first_name} {selectedLead.last_name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 text-slate-400 hover:text-white rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Email Address</span>
                  </div>
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="text-sm font-semibold text-blue-600 hover:underline break-all"
                  >
                    {selectedLead.email}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Phone Number</span>
                  </div>
                  {selectedLead.phone ? (
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="text-sm font-semibold text-slate-800 hover:underline"
                    >
                      {selectedLead.phone}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400 font-medium">Not provided</span>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Company Name</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    {selectedLead.company || 'Not provided'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                    <span>Product Requested</span>
                  </div>
                  <span className="text-sm font-semibold text-blue-600">
                    {selectedLead.product || 'General inquiry'}
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Customer Message / Specifications
                </label>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {selectedLead.message}
                </div>
              </div>

              {/* Internal Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Internal Sales Notes
                </label>
                <textarea
                  value={notesInput}
                  onChange={e => setNotesInput(e.target.value)}
                  placeholder="Record quote sent, meeting notes, customer specifications..."
                  rows={3}
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleSaveNotes}
                    disabled={isSavingNotes}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors disabled:opacity-50"
                  >
                    {isSavingNotes ? 'Saving...' : 'Save Notes'}
                  </button>
                </div>
              </div>

              {/* IP / Meta */}
              {selectedLead.ip_address && (
                <div className="text-xs text-slate-400">
                  <span>Source IP: {selectedLead.ip_address}</span>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <a
                href={`mailto:${selectedLead.email}?subject=Regarding your enquiry on GasFlowmeter.net (${selectedLead.product || 'Flow Meter'})`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email to Lead</span>
              </a>

              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-xl transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
