'use client'
import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/admin/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Save, Plus, Trash2, MoveUp, MoveDown, Eye, Loader2 } from 'lucide-react';

// Import Service & Types
import { leadService } from '@/services/lead-content.service';
// Update LeadHeroContent type inline for clarity
export interface LeadHeroContent {
  id?: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
}
import type { LeadPillar, LeadProgram, LeadEvent } from '@/lib/mock-data/contentModels';

export default function LeadContentPage() {
  const [heroData, setHeroData] = useState<LeadHeroContent>({
    badge: '',
    title: '',
    subtitle: '',
    description: '',
    primaryButtonText: '',
    primaryButtonLink: '',
    secondaryButtonText: '',
    secondaryButtonLink: '',
    backgroundImage: ''
  });
  const [pillarsData, setPillarsData] = useState<LeadPillar[]>([]);
  const [programsData, setProgramsData] = useState<LeadProgram[]>([]);
  const [eventsData, setEventsData] = useState<LeadEvent[]>([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState({ text: '', type: 'success' });

useEffect(() => {
  const loadAllData = async () => {
    try {
      setIsLoading(true);
      const [hero, pillars, programs, events] = await Promise.all([
        leadService.getHero(),
        leadService.getPillars(),
        leadService.getPrograms(),
        leadService.getEvents()
      ]);

      // Pastikan state tidak null
      setHeroData(hero || {
        badge: '',
        title: '',
        subtitle: '',
        description: '',
        primaryButtonText: '',
        primaryButtonLink: '',
        secondaryButtonText: '',
        secondaryButtonLink: '',
        backgroundImage: ''
      });
      setPillarsData(pillars || []);
      setProgramsData(programs || []);
      setEventsData(events || []);
    } catch (error) {
      console.error("Gagal load data LEAD:", error);
    } finally {
      setIsLoading(false);
    }
  };
  loadAllData();
}, []);

  // Generic Save Handler yang diperbaiki
  const onSave = async (sectionName: string, saveFn: () => Promise<any>) => {
    setIsSaving(true);
    try {
      const result = await saveFn();
      if (result) {
        setSaveMessage({ text: `${sectionName} berhasil disimpan!`, type: 'success' });
      } else {
        throw new Error("Gagal menyimpan");
      }
    } catch (error) {
      setSaveMessage({ text: `Gagal menyimpan ${sectionName}.`, type: 'error' });
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveMessage({ text: '', type: 'success' }), 3000);
    }
  };
  // 3. Update Handlers (Local State Only)
  const updateHeroField = (field: keyof LeadHeroContent, value: any) => {
    setHeroData(prev => ({ ...prev, [field]: value }));
  }

  const updatePillarItem = (index: number, field: keyof LeadPillar, value: any) => {
    const newData = [...pillarsData];
    newData[index] = { ...newData[index], [field]: value };
    setPillarsData(newData);
  };

  const updateProgramItem = (index: number, field: keyof LeadProgram, value: any) => {
    const newData = [...programsData];
    newData[index] = { ...newData[index], [field]: value };
    setProgramsData(newData);
  };

  // Re-order logic
  const moveItem = (data: any[], setData: any, index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === data.length - 1)) return;
    const newData = [...data];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    [newData[index], newData[swapIndex]] = [newData[swapIndex], newData[index]];
    setData(newData);
  };

  if (isLoading) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#C1121F]" />
        <p className="text-muted-foreground animate-pulse">Sinkronisasi data LEAD Center...</p>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Konten LEAD Center"
        description="Kelola konten halaman Learning, Equipping, & Development Center"
        breadcrumbs={[{ label: 'Dashboard', path: '/dashboard' }, { label: 'Konten LEAD' }]}
      />

      <div className="p-8">
        {saveMessage.text && (
          <Alert className={`mb-6 ${saveMessage.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <AlertDescription className={saveMessage.type === 'success' ? 'text-green-800' : 'text-red-800'}>
              {saveMessage.text}
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 max-w-4xl">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="pillars">3 Pilar</TabsTrigger>
            <TabsTrigger value="programs">Program</TabsTrigger>
            <TabsTrigger value="events">Agenda</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
          </TabsList>

          {/* HERO SECTION */}
          <TabsContent value="hero" className="space-y-6">
            {/* Hero Section Form */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Badge Text</label>
                  <input 
                    className="w-full p-2 border rounded bg-blue-50/30"
                    value={heroData.badge}
                    onChange={(e) => setHeroData(prev => ({ ...prev, badge: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Judul Utama</label>
                  <textarea 
                    className="w-full p-2 border rounded bg-blue-50/30"
                    rows={2}
                    value={heroData.title}
                    onChange={(e) => setHeroData(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Subtitle</label>
                  <input 
                    className="w-full p-2 border rounded bg-blue-50/30"
                    value={heroData.subtitle}
                    onChange={(e) => setHeroData(prev => ({ ...prev, subtitle: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Deskripsi</label>
                  <textarea 
                    className="w-full p-2 border rounded bg-blue-50/30"
                    rows={3}
                    value={heroData.description}
                    onChange={(e) => setHeroData(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>
              </div>

              {/* Button Section */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Tombol Utama - Teks</label>
                  <input 
                    className="w-full p-2 border rounded bg-blue-50/30"
                    value={heroData.primaryButtonText}
                    onChange={(e) => setHeroData(prev => ({ ...prev, primaryButtonText: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tombol Utama - Link</label>
                  <input 
                    className="w-full p-2 border rounded bg-blue-50/30"
                    value={heroData.primaryButtonLink}
                    onChange={(e) => setHeroData(prev => ({ ...prev, primaryButtonLink: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Tombol Sekunder - Teks</label>
                  <input 
                    className="w-full p-2 border rounded bg-blue-50/30"
                    value={heroData.secondaryButtonText}
                    onChange={(e) => setHeroData(prev => ({ ...prev, secondaryButtonText: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tombol Sekunder - Link</label>
                  <input 
                    className="w-full p-2 border rounded bg-blue-50/30"
                    value={heroData.secondaryButtonLink}
                    onChange={(e) => setHeroData(prev => ({ ...prev, secondaryButtonLink: e.target.value }))}
                  />
                </div>
              </div>

              {/* Background Image Section */}
                <div>
                  <label className="block text-sm font-medium mb-1">Background Image URL</label>
                  <input 
                    className="w-full p-2 border rounded bg-blue-50/30"
                    value={heroData.backgroundImage}
                    onChange={(e) => setHeroData(prev => ({ ...prev, backgroundImage: e.target.value }))}
                  />
                  {heroData.backgroundImage && (
                    <img 
                      src={heroData.backgroundImage} 
                      alt="Preview" 
                      className="mt-4 h-40 w-full object-cover rounded shadow-sm"
                    />
                  )}
                </div>
            </div>
          </TabsContent>

          {/* 3 PILLARS SECTION */}
          <TabsContent value="pillars" className="space-y-6">
            {pillarsData.map((pillar, index) => (
              <Card key={pillar.id || index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-bold uppercase text-gray-500">Pilar {index + 1}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input value={pillar.title || ""} onChange={(e) => updatePillarItem(index, 'title', e.target.value)} placeholder="Judul Pilar" />
                  <Textarea value={pillar.description || ""} onChange={(e) => updatePillarItem(index, 'description', e.target.value)} placeholder="Deskripsi pilar..." />
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked={pillar.isActive} onChange={(e) => updatePillarItem(index, 'isActive', e.target.checked)} />
                    <Label>Aktif</Label>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              onClick={() => onSave('3 Pilar', () => leadService.updateAllPillars(pillarsData))} 
              disabled={isSaving}
              className="bg-[#C1121F]"
            >
              <Save className="mr-2 h-4 w-4" /> Simpan Semua Pilar
            </Button>
          </TabsContent>

          {/* PROGRAMS SECTION */}
          <TabsContent value="programs" className="space-y-6">
            <div className="flex justify-between items-center">
               <h3 className="font-semibold text-lg">Daftar Program</h3>
               <Button variant="outline" size="sm"><Plus className="h-4 w-4 mr-2"/> Tambah</Button>
            </div>
            {programsData.map((program, index) => (
              <Card key={program.id || index}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 space-y-4">
                      <Input value={program.title || ""} onChange={(e) => updateProgramItem(index, 'title', e.target.value)} placeholder="Nama Program" />
                      <Textarea value={program.description || ""} onChange={(e) => updateProgramItem(index, 'description', e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <Button variant="ghost" size="sm" onClick={() => moveItem(programsData, setProgramsData, index, 'up')}><MoveUp className="h-4 w-4"/></Button>
                      <Button variant="ghost" size="sm" onClick={() => moveItem(programsData, setProgramsData, index, 'down')}><MoveDown className="h-4 w-4"/></Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button onClick={() => onSave('Programs', () => leadService.updateProgram('bulk', programsData))} className="bg-[#C1121F]">
              <Save className="mr-2 h-4 w-4" /> Simpan Urutan Program
            </Button>
          </TabsContent>

        </Tabs>
      </div>
    </>
  );
}