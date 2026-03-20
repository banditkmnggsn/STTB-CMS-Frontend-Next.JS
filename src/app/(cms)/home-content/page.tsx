'use client'
import { useState } from 'react';
import { PageHeader } from '@/components/admin/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Save, Plus, Trash2, MoveUp, MoveDown, Eye } from 'lucide-react';
import { mockHomeHero, mockHomeStats, mockHomeProgramShowcase } from '@/lib/mock-data/mockCMSData';
import type { HomeHeroContent, HomeStatsItem, HomeProgramShowcase } from '@/lib/mock-data/contentModels';

export default function HomeContentPage() {
  const [heroData, setHeroData] = useState<HomeHeroContent>(mockHomeHero);
  const [statsData, setStatsData] = useState<HomeStatsItem[]>(mockHomeStats);
  const [showcaseData, setShowcaseData] = useState<HomeProgramShowcase[]>(mockHomeProgramShowcase);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSave = async (section: string) => {
    setIsSaving(true);
    setSaveMessage('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSaveMessage(`${section} berhasil disimpan!`);
    setIsSaving(false);
    
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const updateHeroField = (field: keyof HomeHeroContent, value: any) => {
    setHeroData(prev => ({ ...prev, [field]: value }));
  };

  const updateStatsItem = (index: number, field: keyof HomeStatsItem, value: any) => {
    setStatsData(prev => {
      const newData = [...prev];
      newData[index] = { ...newData[index], [field]: value };
      return newData;
    });
  };

  const moveStatsItem = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === statsData.length - 1)
    ) {
      return;
    }

    setStatsData(prev => {
      const newData = [...prev];
      const swapIndex = direction === 'up' ? index - 1 : index + 1;
      [newData[index], newData[swapIndex]] = [newData[swapIndex], newData[index]];
      
      // Update order
      newData[index].order = index + 1;
      newData[swapIndex].order = swapIndex + 1;
      
      return newData;
    });
  };

  const updateShowcaseItem = (index: number, field: keyof HomeProgramShowcase, value: any) => {
    setShowcaseData(prev => {
      const newData = [...prev];
      newData[index] = { ...newData[index], [field]: value };
      return newData;
    });
  };

  return (
    <>
      <PageHeader
        title="Konten Homepage"
        description="Kelola semua konten yang tampil di halaman utama website"
        breadcrumbs={[
            { label: 'Dashboard', path: '/dashboard' },
          { label: 'Konten Homepage' }
        ]}
      />

      <div className="p-8">
        {saveMessage && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">
              {saveMessage}
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 max-w-4xl">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="stats">Statistik</TabsTrigger>
            <TabsTrigger value="showcase">Program</TabsTrigger>
            <TabsTrigger value="why-choose">Why Choose</TabsTrigger>
            <TabsTrigger value="facilities">Fasilitas</TabsTrigger>
            <TabsTrigger value="cta">CTA</TabsTrigger>
          </TabsList>

          {/* HERO SECTION */}
          <TabsContent value="hero" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>
                  Bagian pertama yang dilihat pengunjung saat membuka website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="hero-title">Judul Utama</Label>
                  <Input
                    id="hero-title"
                    value={heroData.title}
                    onChange={(e) => updateHeroField('title', e.target.value)}
                    placeholder="Membentuk Pemimpin Rohani Masa Depan"
                  />
                </div>

                <div>
                  <Label htmlFor="hero-subtitle">Subtitle</Label>
                  <Input
                    id="hero-subtitle"
                    value={heroData.subtitle}
                    onChange={(e) => updateHeroField('subtitle', e.target.value)}
                    placeholder="STTB Bandung"
                  />
                </div>

                <div>
                  <Label htmlFor="hero-description">Deskripsi</Label>
                  <Textarea
                    id="hero-description"
                    value={heroData.description}
                    onChange={(e) => updateHeroField('description', e.target.value)}
                    rows={4}
                    placeholder="Pendidikan Teologi Berkualitas..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="primary-btn-text">Tombol Utama - Teks</Label>
                    <Input
                      id="primary-btn-text"
                      value={heroData.primaryButtonText}
                      onChange={(e) => updateHeroField('primaryButtonText', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="primary-btn-link">Tombol Utama - Link</Label>
                    <Input
                      id="primary-btn-link"
                      value={heroData.primaryButtonLink}
                      onChange={(e) => updateHeroField('primaryButtonLink', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="secondary-btn-text">Tombol Sekunder - Teks</Label>
                    <Input
                      id="secondary-btn-text"
                      value={heroData.secondaryButtonText}
                      onChange={(e) => updateHeroField('secondaryButtonText', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="secondary-btn-link">Tombol Sekunder - Link</Label>
                    <Input
                      id="secondary-btn-link"
                      value={heroData.secondaryButtonLink}
                      onChange={(e) => updateHeroField('secondaryButtonLink', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="hero-bg">Background Image URL</Label>
                  <Input
                    id="hero-bg"
                    value={heroData.backgroundImage}
                    onChange={(e) => updateHeroField('backgroundImage', e.target.value)}
                    placeholder="https://..."
                  />
                  {heroData.backgroundImage && (
                    <div className="mt-2">
                      <img 
                        src={heroData.backgroundImage} 
                        alt="Preview" 
                        className="h-32 w-full object-cover rounded-md"
                      />
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    onClick={() => handleSave('Hero Section')} 
                    disabled={isSaving}
                    className="bg-[#C1121F] hover:bg-[#9A0E19]"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
                  </Button>
                  <Button variant="outline">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* STATS SECTION */}
          <TabsContent value="stats" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">Statistik STTB</h3>
                <p className="text-sm text-gray-600">Angka-angka penting yang ditampilkan di homepage</p>
              </div>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Tambah Statistik
              </Button>
            </div>

            {statsData.map((stat, index) => (
              <Card key={stat.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base">Statistik #{index + 1}</CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveStatsItem(index, 'up')}
                        disabled={index === 0}
                      >
                        <MoveUp className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveStatsItem(index, 'down')}
                        disabled={index === statsData.length - 1}
                      >
                        <MoveDown className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Icon (Lucide React)</Label>
                      <Input
                        value={stat.icon}
                        onChange={(e) => updateStatsItem(index, 'icon', e.target.value)}
                        placeholder="GraduationCap"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Contoh: GraduationCap, Users, BookOpen, Award
                      </p>
                    </div>
                    <div>
                      <Label>Nilai</Label>
                      <Input
                        value={stat.value}
                        onChange={(e) => updateStatsItem(index, 'value', e.target.value)}
                        placeholder="7, 500+, etc"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Label</Label>
                    <Input
                      value={stat.label}
                      onChange={(e) => updateStatsItem(index, 'label', e.target.value)}
                      placeholder="Program Studi"
                    />
                  </div>

                  <div>
                    <Label>Deskripsi</Label>
                    <Textarea
                      value={stat.description}
                      onChange={(e) => updateStatsItem(index, 'description', e.target.value)}
                      rows={2}
                      placeholder="Beragam pilihan program..."
                    />
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex gap-3">
              <Button 
                onClick={() => handleSave('Statistik')} 
                disabled={isSaving}
                className="bg-[#C1121F] hover:bg-[#9A0E19]"
              >
                <Save className="mr-2 h-4 w-4" />
                Simpan Semua Statistik
              </Button>
            </div>
          </TabsContent>

          {/* SHOWCASE SECTION */}
          <TabsContent value="showcase" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">Program Showcase</h3>
                <p className="text-sm text-gray-600">Program yang ditampilkan di homepage</p>
              </div>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Tambah Program
              </Button>
            </div>

            {showcaseData.map((program, index) => (
              <Card key={program.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base">{program.title}</CardTitle>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Judul Program</Label>
                      <Input
                        value={program.title}
                        onChange={(e) => updateShowcaseItem(index, 'title', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Gelar</Label>
                      <Input
                        value={program.degree}
                        onChange={(e) => updateShowcaseItem(index, 'degree', e.target.value)}
                        placeholder="S.Th, M.Th, etc"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Deskripsi</Label>
                    <Textarea
                      value={program.description}
                      onChange={(e) => updateShowcaseItem(index, 'description', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Link Program</Label>
                      <Input
                        value={program.link}
                        onChange={(e) => updateShowcaseItem(index, 'link', e.target.value)}
                        placeholder="/program/..."
                      />
                    </div>
                    <div>
                      <Label>Image URL</Label>
                      <Input
                        value={program.image}
                        onChange={(e) => updateShowcaseItem(index, 'image', e.target.value)}
                      />
                    </div>
                  </div>

                  {program.image && (
                    <div>
                      <Label>Preview</Label>
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="h-32 w-full object-cover rounded-md mt-1"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`active-${program.id}`}
                      checked={program.isActive}
                      onChange={(e) => updateShowcaseItem(index, 'isActive', e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor={`active-${program.id}`} className="cursor-pointer">
                      Aktif (tampilkan di homepage)
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex gap-3">
              <Button 
                onClick={() => handleSave('Program Showcase')} 
                disabled={isSaving}
                className="bg-[#C1121F] hover:bg-[#9A0E19]"
              >
                <Save className="mr-2 h-4 w-4" />
                Simpan Program Showcase
              </Button>
            </div>
          </TabsContent>

          {/* OTHER SECTIONS */}
          <TabsContent value="why-choose">
            <Card>
              <CardHeader>
                <CardTitle>Why Choose STTB Section</CardTitle>
                <CardDescription>Coming soon...</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="facilities">
            <Card>
              <CardHeader>
                <CardTitle>Facilities Section</CardTitle>
                <CardDescription>Coming soon...</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="cta">
            <Card>
              <CardHeader>
                <CardTitle>CTA Section</CardTitle>
                <CardDescription>Coming soon...</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
