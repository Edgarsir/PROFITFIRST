import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface UserData {
  timestamp: string;
  name: string;
  email: string;
  uniqueId: string;
  password: string;
  ip: string;
  status: string;
}

export const AdminPage = (): JSX.Element => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    setIsLoading(true);
    setError('');
    try {
      const apiUrl = `${(import.meta as any).env.VITE_API_URL}/admin/signups`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.success) {
        setUsers(data.data);
      } else {
        setError(data.message || 'Failed to fetch users');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadExcel = () => {
    const apiUrl = `${(import.meta as any).env.VITE_API_URL}/admin/download-excel`;
    window.open(apiUrl, '_blank');
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage user signups and data</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={downloadExcel}
              className="bg-[#13ef96] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#0fd982] transition-all"
            >
              📥 Download Excel
            </button>
            <button
              onClick={fetchUsers}
              className="bg-[#1e1e1e] text-white font-bold px-6 py-3 rounded-lg border border-[#13ef96]/20 hover:border-[#13ef96] transition-all"
            >
              🔄 Refresh
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1e1e1e] rounded-xl p-6 border border-[#13ef96]/20">
            <h3 className="text-gray-400 text-sm mb-2">Total Signups</h3>
            <p className="text-3xl font-bold text-white">{users.length}</p>
          </div>
          <div className="bg-[#1e1e1e] rounded-xl p-6 border border-[#13ef96]/20">
            <h3 className="text-gray-400 text-sm mb-2">Active Users</h3>
            <p className="text-3xl font-bold text-[#13ef96]">{users.length}</p>
          </div>
          <div className="bg-[#1e1e1e] rounded-xl p-6 border border-[#13ef96]/20">
            <h3 className="text-gray-400 text-sm mb-2">Data Location</h3>
            <p className="text-sm text-white">server/data/signups.xlsx</p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Users Table */}
        <div className="bg-[#1e1e1e] rounded-xl border border-[#13ef96]/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-[#13ef96]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-black whitespace-nowrap">#</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-black whitespace-nowrap">Timestamp</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-black whitespace-nowrap">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-black whitespace-nowrap">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-black whitespace-nowrap">Unique ID</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-black whitespace-nowrap">Password</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-black whitespace-nowrap">Status</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-6 h-6 border-2 border-[#13ef96] border-t-transparent rounded-full animate-spin" />
                        <span className="text-gray-400">Loading users...</span>
                      </div>
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                      No users found. Start by creating some signups!
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr
                      key={index}
                      className="border-t border-[#ffffff1a] hover:bg-[#2a2a2a] transition-colors"
                    >
                      <td className="px-4 py-3 text-gray-300 text-sm">{index + 1}</td>
                      <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
                        {new Date(user.timestamp).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="px-4 py-3 text-white font-medium text-sm">{user.name}</td>
                      <td className="px-4 py-3 text-gray-300 text-sm">{user.email}</td>
                      <td className="px-4 py-3 text-[#13ef96] font-mono text-sm">{user.uniqueId}</td>
                      <td className="px-4 py-3 text-gray-400 font-mono text-xs">{user.password}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 bg-[#13ef96]/20 text-[#13ef96] rounded-full text-xs font-medium whitespace-nowrap">
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* Scroll hint for small screens */}
          <div className="lg:hidden px-4 py-2 bg-[#2a2a2a] border-t border-[#ffffff1a] text-center">
            <p className="text-gray-400 text-xs">← Scroll horizontally to see all columns →</p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};
