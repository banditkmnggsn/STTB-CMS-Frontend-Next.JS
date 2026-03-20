import { PageHeader } from '@/components/admin/PageHeader';
import { Save, Globe, Bell, Shield, Database } from 'lucide-react';

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="System Settings"
        description="Configure your CMS settings and preferences"
        breadcrumbs={[{ label: 'Settings' }]}
        actions={
          <button className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-colors flex items-center gap-2">
            <Save size={18} />
            Save Changes
          </button>
        }
      />

      <div className="p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
              <Globe className="text-gray-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">General Settings</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                <input
                  type="text"
                  defaultValue="STTB Bandung - Sekolah Tinggi Teologi Bandung"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                <textarea
                  defaultValue="Pendidikan Teologi Berkualitas dengan Komitmen pada Keunggulan Akademik dan Spiritualitas"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Site URL</label>
                  <input
                    type="url"
                    defaultValue="https://sttb.ac.id"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                  <input
                    type="email"
                    defaultValue="admin@sttb.ac.id"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
              <Bell className="text-gray-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
            </div>
            <div className="p-6 space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#C1121F] border-gray-300 rounded focus:ring-[#C1121F]"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email notifications for new content</p>
                  <p className="text-xs text-gray-500">Receive email when new content is submitted for review</p>
                </div>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#C1121F] border-gray-300 rounded focus:ring-[#C1121F]"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Publishing notifications</p>
                  <p className="text-xs text-gray-500">Get notified when content is published or scheduled</p>
                </div>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#C1121F] border-gray-300 rounded focus:ring-[#C1121F]"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">User activity alerts</p>
                  <p className="text-xs text-gray-500">Monitor user logins and activities</p>
                </div>
              </label>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
              <Shield className="text-gray-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Security</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                <input
                  type="number"
                  defaultValue="60"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
              </div>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#C1121F] border-gray-300 rounded focus:ring-[#C1121F]"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Require two-factor authentication</p>
                  <p className="text-xs text-gray-500">Add an extra layer of security for admin accounts</p>
                </div>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#C1121F] border-gray-300 rounded focus:ring-[#C1121F]"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Enable audit logging</p>
                  <p className="text-xs text-gray-500">Track all system activities and changes</p>
                </div>
              </label>
            </div>
          </div>

          {/* Backup & Maintenance */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
              <Database className="text-gray-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Backup & Maintenance</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Automatic Backup Frequency</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#2E90FF] text-white rounded-lg hover:bg-[#1e7ff5] transition-colors">
                  Create Backup Now
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  View Backup History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}