'use client'

import { useEffect, useState } from 'react'
import { PageHeader } from '@/components/admin/PageHeader'
import { Save, Globe, Phone, Share2, Search, CreditCard, Plus, Trash2, AlertCircle, CheckCircle } from 'lucide-react'
import {
  getAllSettings,
  updateSettings,
  type GeneralSettings,
  type ContactSettings,
  type SocialSettings,
  type SeoSettings,
  type BankingSettings,
  type BankAccount,
} from '@/services/settings.service'

type SaveStatus = 'idle' | 'saving' | 'success' | 'error'

export default function SettingsPage() {
  const [general, setGeneral] = useState<GeneralSettings>({
    siteName: '', tagline: '', logo: '', favicon: '',
    timezone: 'Asia/Jakarta', language: 'id', dateFormat: 'DD MMMM YYYY',
  })
  const [contact, setContact] = useState<ContactSettings>({
    address: '', phone: '', whatsapp: '', email: '',
  })
  const [social, setSocial] = useState<SocialSettings>({
    facebook: '', instagram: '', youtube: '', linkedin: '',
  })
  const [seo, setSeo] = useState<SeoSettings>({
    defaultTitle: '', defaultDescription: '', keywords: [], ogImage: '',
  })
  const [banking, setBanking] = useState<BankingSettings>({ accounts: [] })
  const [saveStatus, setSaveStatus] = useState<Record<string, SaveStatus>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllSettings()
        if (data.general) setGeneral(data.general)
        if (data.contact) setContact(data.contact)
        if (data.social) setSocial(data.social)
        if (data.seo) setSeo(data.seo)
        if (data.banking) setBanking(data.banking)
      } catch (err) {
        console.error('Gagal memuat settings:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const handleSave = async (category: 'general' | 'contact' | 'social' | 'seo' | 'banking', data: any) => {
    setSaveStatus(prev => ({ ...prev, [category]: 'saving' }))
    try {
      await updateSettings(category, data)
      setSaveStatus(prev => ({ ...prev, [category]: 'success' }))
      setTimeout(() => setSaveStatus(prev => ({ ...prev, [category]: 'idle' })), 2500)
    } catch {
      setSaveStatus(prev => ({ ...prev, [category]: 'error' }))
      setTimeout(() => setSaveStatus(prev => ({ ...prev, [category]: 'idle' })), 2500)
    }
  }

  const SaveButton = ({ category, data }: { category: string; data: any }) => {
    const status = saveStatus[category] || 'idle'
    return (
      <button
        onClick={() => handleSave(category as any, data)}
        disabled={status === 'saving'}
        className="flex items-center gap-2 px-4 py-2 bg-[#C1121F] hover:bg-[#9A0E19] disabled:opacity-60 text-white text-sm rounded-lg transition-colors"
      >
        {status === 'saving' ? (
          <><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg> Menyimpan...</>
        ) : status === 'success' ? (
          <><CheckCircle size={16} /> Tersimpan</>
        ) : status === 'error' ? (
          <><AlertCircle size={16} /> Gagal</>
        ) : (
          <><Save size={16} /> Simpan</>
        )}
      </button>
    )
  }

  const addBankAccount = () => {
    setBanking(prev => ({
      accounts: [...prev.accounts, { bank: '', accountNumber: '', accountName: '', branch: '' }]
    }))
  }

  const updateBankAccount = (index: number, field: keyof BankAccount, value: string) => {
    setBanking(prev => {
      const updated = [...prev.accounts]
      updated[index] = { ...updated[index], [field]: value }
      return { accounts: updated }
    })
  }

  const removeBankAccount = (index: number) => {
    setBanking(prev => ({ accounts: prev.accounts.filter((_, i) => i !== index) }))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 text-sm">Memuat pengaturan...</p>
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title="Pengaturan Sistem"
        description="Kelola konfigurasi website STTB"
        breadcrumbs={[{ label: 'Pengaturan' }]}
      />

      <div className="p-8">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* General Settings */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="text-gray-600" size={20} />
                <h2 className="text-lg font-semibold text-gray-900">Umum</h2>
              </div>
              <SaveButton category="general" data={general} />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Website</label>
                <input
                  type="text"
                  value={general.siteName}
                  onChange={e => setGeneral({ ...general, siteName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                <input
                  type="text"
                  value={general.tagline}
                  onChange={e => setGeneral({ ...general, tagline: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
              </div>
            </div>
          </div>

          {/* Contact Settings */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="text-gray-600" size={20} />
                <h2 className="text-lg font-semibold text-gray-900">Kontak</h2>
              </div>
              <SaveButton category="contact" data={contact} />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
                <textarea
                  value={contact.address}
                  onChange={e => setContact({ ...contact, address: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telepon</label>
                  <input
                    type="text"
                    value={contact.phone}
                    onChange={e => setContact({ ...contact, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                  <input
                    type="text"
                    value={contact.whatsapp}
                    onChange={e => setContact({ ...contact, whatsapp: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={e => setContact({ ...contact, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Share2 className="text-gray-600" size={20} />
                <h2 className="text-lg font-semibold text-gray-900">Media Sosial</h2>
              </div>
              <SaveButton category="social" data={social} />
            </div>
            <div className="p-6 space-y-4">
              {(['facebook', 'instagram', 'youtube', 'linkedin'] as const).map(platform => (
                <div key={platform}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">{platform}</label>
                  <input
                    type="url"
                    value={social[platform] || ''}
                    onChange={e => setSocial({ ...social, [platform]: e.target.value })}
                    placeholder={`https://${platform}.com/...`}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Search className="text-gray-600" size={20} />
                <h2 className="text-lg font-semibold text-gray-900">SEO</h2>
              </div>
              <SaveButton category="seo" data={seo} />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Judul Default</label>
                <input
                  type="text"
                  value={seo.defaultTitle}
                  onChange={e => setSeo({ ...seo, defaultTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Default</label>
                <textarea
                  value={seo.defaultDescription}
                  onChange={e => setSeo({ ...seo, defaultDescription: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Google Analytics ID</label>
                <input
                  type="text"
                  value={seo.googleAnalyticsId || ''}
                  onChange={e => setSeo({ ...seo, googleAnalyticsId: e.target.value })}
                  placeholder="G-XXXXXXXXXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
              </div>
            </div>
          </div>

          {/* Banking */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="text-gray-600" size={20} />
                <h2 className="text-lg font-semibold text-gray-900">Rekening Bank</h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={addBankAccount}
                  className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Plus size={16} /> Tambah
                </button>
                <SaveButton category="banking" data={banking} />
              </div>
            </div>
            <div className="p-6 space-y-4">
              {banking.accounts.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-4">Belum ada rekening. Klik Tambah untuk menambahkan.</p>
              ) : (
                banking.accounts.map((account, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-700">Rekening {index + 1}</p>
                      <button
                        onClick={() => removeBankAccount(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Nama Bank</label>
                        <input
                          type="text"
                          value={account.bank}
                          onChange={e => updateBankAccount(index, 'bank', e.target.value)}
                          placeholder="Bank BCA"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Nomor Rekening</label>
                        <input
                          type="text"
                          value={account.accountNumber}
                          onChange={e => updateBankAccount(index, 'accountNumber', e.target.value)}
                          placeholder="1234567890"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Atas Nama</label>
                        <input
                          type="text"
                          value={account.accountName}
                          onChange={e => updateBankAccount(index, 'accountName', e.target.value)}
                          placeholder="Yayasan STTB"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Cabang</label>
                        <input
                          type="text"
                          value={account.branch}
                          onChange={e => updateBankAccount(index, 'branch', e.target.value)}
                          placeholder="Bandung Dago"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}