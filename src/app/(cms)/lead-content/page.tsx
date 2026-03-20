// import { useState } from 'react';
// import { PageHeader } from '../../components/admin/PageHeader';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
// import { Button } from '../../components/ui/button';
// import { Input } from '../../components/ui/input';
// import { Label } from '../../components/ui/label';
// import { Textarea } from '../../components/ui/textarea';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
// import { Alert, AlertDescription } from '../../components/ui/alert';
// import { Save, Plus, Trash2, MoveUp, MoveDown, Eye, Edit } from 'lucide-react';
// import { 
//   mockLeadHero, 
//   mockLeadPillars, 
//   mockLeadPrograms, 
//   mockLeadEvents 
// } from '../../data/mockCMSData';
// import type { 
//   LeadHeroContent, 
//   LeadPillar, 
//   LeadProgram, 
//   LeadEvent 
// } from '../../data/contentModels';

// export function LeadContentPage() {
//   const [heroData, setHeroData] = useState<LeadHeroContent>(mockLeadHero);
//   const [pillarsData, setPillarsData] = useState<LeadPillar[]>(mockLeadPillars);
//   const [programsData, setProgramsData] = useState<LeadProgram[]>(mockLeadPrograms);
//   const [eventsData, setEventsData] = useState<LeadEvent[]>(mockLeadEvents);
//   const [isSaving, setIsSaving] = useState(false);
//   const [saveMessage, setSaveMessage] = useState('');

//   const handleSave = async (section: string) => {
//     setIsSaving(true);
//     setSaveMessage('');
    
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     setSaveMessage(`${section} berhasil disimpan!`);
//     setIsSaving(false);
    
//     setTimeout(() => setSaveMessage(''), 3000);
//   };

//   const updateHeroField = (field: keyof LeadHeroContent, value: any) => {
//     setHeroData(prev => ({ ...prev, [field]: value }));
//   };

//   const updatePillarItem = (index: number, field: keyof LeadPillar, value: any) => {
//     setPillarsData(prev => {
//       const newData = [...prev];
//       newData[index] = { ...newData[index], [field]: value };
//       return newData;
//     });
//   };

//   const updateProgramItem = (index: number, field: keyof LeadProgram, value: any) => {
//     setProgramsData(prev => {
//       const newData = [...prev];
//       newData[index] = { ...newData[index], [field]: value };
//       return newData;
//     });
//   };

//   const updateEventItem = (index: number, field: keyof LeadEvent, value: any) => {
//     setEventsData(prev => {
//       const newData = [...prev];
//       newData[index] = { ...newData[index], [field]: value };
//       return newData;
//     });
//   };

//   const moveProgramItem = (index: number, direction: 'up' | 'down') => {
//     if (
//       (direction === 'up' && index === 0) ||
//       (direction === 'down' && index === programsData.length - 1)
//     ) {
//       return;
//     }

//     setProgramsData(prev => {
//       const newData = [...prev];
//       const swapIndex = direction === 'up' ? index - 1 : index + 1;
//       [newData[index], newData[swapIndex]] = [newData[swapIndex], newData[index]];
//       newData[index].order = index + 1;
//       newData[swapIndex].order = swapIndex + 1;
//       return newData;
//     });
//   };

//   return (
//     <>
//       <PageHeader
//         title="Konten LEAD Center"
//         description="Kelola konten halaman Learning, Equipping, & Development Center"
//         breadcrumbs={[
//           { label: 'Dashboard', to: '/admin/dashboard' },
//           { label: 'Konten LEAD' }
//         ]}
//       />

//       <div className="p-8">
//         {saveMessage && (
//           <Alert className="mb-6 bg-green-50 border-green-200">
//             <AlertDescription className="text-green-800">
//               {saveMessage}
//             </AlertDescription>
//           </Alert>
//         )}

//         <Tabs defaultValue="hero" className="space-y-6">
//           <TabsList className="grid w-full grid-cols-5 max-w-4xl">
//             <TabsTrigger value="hero">Hero</TabsTrigger>
//             <TabsTrigger value="pillars">3 Pilar</TabsTrigger>
//             <TabsTrigger value="programs">Program</TabsTrigger>
//             <TabsTrigger value="events">Agenda</TabsTrigger>
//             <TabsTrigger value="media">Media</TabsTrigger>
//           </TabsList>

//           {/* HERO SECTION */}
//           <TabsContent value="hero" className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Hero Section - LEAD Center</CardTitle>
//                 <CardDescription>
//                   Bagian header utama halaman LEAD Center
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <Label>Badge Text</Label>
//                   <Input
//                     value={heroData.badge}
//                     onChange={(e) => updateHeroField('badge', e.target.value)}
//                     placeholder="Learning, Equipping, & Development"
//                   />
//                 </div>

//                 <div>
//                   <Label>Judul Utama</Label>
//                   <Textarea
//                     value={heroData.title}
//                     onChange={(e) => updateHeroField('title', e.target.value)}
//                     rows={2}
//                     placeholder="L.E.A.D. Center: Memperlengkapi Pelayan..."
//                   />
//                 </div>

//                 <div>
//                   <Label>Subtitle</Label>
//                   <Input
//                     value={heroData.subtitle}
//                     onChange={(e) => updateHeroField('subtitle', e.target.value)}
//                     placeholder="Pusat Pendidikan & Pelatihan Non-Formal STT Bandung"
//                   />
//                 </div>

//                 <div>
//                   <Label>Deskripsi</Label>
//                   <Textarea
//                     value={heroData.description}
//                     onChange={(e) => updateHeroField('description', e.target.value)}
//                     rows={3}
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label>Tombol Utama - Teks</Label>
//                     <Input
//                       value={heroData.primaryButtonText}
//                       onChange={(e) => updateHeroField('primaryButtonText', e.target.value)}
//                     />
//                   </div>
//                   <div>
//                     <Label>Tombol Utama - Link</Label>
//                     <Input
//                       value={heroData.primaryButtonLink}
//                       onChange={(e) => updateHeroField('primaryButtonLink', e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label>Tombol Sekunder - Teks</Label>
//                     <Input
//                       value={heroData.secondaryButtonText}
//                       onChange={(e) => updateHeroField('secondaryButtonText', e.target.value)}
//                     />
//                   </div>
//                   <div>
//                     <Label>Tombol Sekunder - Link</Label>
//                     <Input
//                       value={heroData.secondaryButtonLink}
//                       onChange={(e) => updateHeroField('secondaryButtonLink', e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label>Background Image URL</Label>
//                   <Input
//                     value={heroData.backgroundImage}
//                     onChange={(e) => updateHeroField('backgroundImage', e.target.value)}
//                   />
//                   {heroData.backgroundImage && (
//                     <img 
//                       src={heroData.backgroundImage} 
//                       alt="Preview" 
//                       className="mt-2 h-32 w-full object-cover rounded-md"
//                     />
//                   )}
//                 </div>

//                 <div className="flex gap-3 pt-4">
//                   <Button 
//                     onClick={() => handleSave('Hero Section')} 
//                     disabled={isSaving}
//                     className="bg-[#C1121F] hover:bg-[#9A0E19]"
//                   >
//                     <Save className="mr-2 h-4 w-4" />
//                     {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
//                   </Button>
//                   <Button variant="outline">
//                     <Eye className="mr-2 h-4 w-4" />
//                     Preview
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           {/* 3 PILLARS SECTION */}
//           <TabsContent value="pillars" className="space-y-6">
//             <div className="mb-4">
//               <h3 className="text-lg font-semibold">Tiga Pilar Utama LEAD</h3>
//               <p className="text-sm text-gray-600">Learning, Equipping, & Development</p>
//             </div>

//             {pillarsData.map((pillar, index) => (
//               <Card key={pillar.id}>
//                 <CardHeader>
//                   <div className="flex justify-between items-center">
//                     <CardTitle className="text-base">Pilar {index + 1}: {pillar.title}</CardTitle>
//                     <div className="flex items-center gap-2">
//                       <span className={`px-2 py-1 rounded text-xs font-semibold ${
//                         pillar.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
//                       }`}>
//                         {pillar.isActive ? 'Aktif' : 'Non-aktif'}
//                       </span>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div>
//                     <Label>Judul Pilar</Label>
//                     <Input
//                       value={pillar.title}
//                       onChange={(e) => updatePillarItem(index, 'title', e.target.value)}
//                     />
//                   </div>

//                   <div>
//                     <Label>Deskripsi</Label>
//                     <Textarea
//                       value={pillar.description}
//                       onChange={(e) => updatePillarItem(index, 'description', e.target.value)}
//                       rows={3}
//                     />
//                   </div>

//                   <div className="grid grid-cols-3 gap-4">
//                     <div>
//                       <Label>Icon (Lucide)</Label>
//                       <Input
//                         value={pillar.icon}
//                         onChange={(e) => updatePillarItem(index, 'icon', e.target.value)}
//                         placeholder="BookOpen"
//                       />
//                     </div>
//                     <div>
//                       <Label>Icon Color</Label>
//                       <Input
//                         type="color"
//                         value={pillar.iconColor}
//                         onChange={(e) => updatePillarItem(index, 'iconColor', e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <Label>Background Color</Label>
//                       <Input
//                         type="color"
//                         value={pillar.backgroundColor}
//                         onChange={(e) => updatePillarItem(index, 'backgroundColor', e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2 pt-2">
//                     <input
//                       type="checkbox"
//                       id={`pillar-active-${pillar.id}`}
//                       checked={pillar.isActive}
//                       onChange={(e) => updatePillarItem(index, 'isActive', e.target.checked)}
//                       className="rounded border-gray-300"
//                     />
//                     <Label htmlFor={`pillar-active-${pillar.id}`} className="cursor-pointer">
//                       Aktifkan pilar ini
//                     </Label>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}

//             <Button 
//               onClick={() => handleSave('3 Pilar')} 
//               disabled={isSaving}
//               className="bg-[#C1121F] hover:bg-[#9A0E19]"
//             >
//               <Save className="mr-2 h-4 w-4" />
//               Simpan 3 Pilar
//             </Button>
//           </TabsContent>

//           {/* PROGRAMS SECTION */}
//           <TabsContent value="programs" className="space-y-6">
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <h3 className="text-lg font-semibold">Program Unggulan LEAD</h3>
//                 <p className="text-sm text-gray-600">Daftar program pelatihan dan sertifikasi</p>
//               </div>
//               <Button variant="outline" size="sm">
//                 <Plus className="mr-2 h-4 w-4" />
//                 Tambah Program
//               </Button>
//             </div>

//             {programsData.map((program, index) => (
//               <Card key={program.id}>
//                 <CardHeader>
//                   <div className="flex justify-between items-center">
//                     <CardTitle className="text-base">{program.title}</CardTitle>
//                     <div className="flex gap-2">
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => moveProgramItem(index, 'up')}
//                         disabled={index === 0}
//                       >
//                         <MoveUp className="h-4 w-4" />
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => moveProgramItem(index, 'down')}
//                         disabled={index === programsData.length - 1}
//                       >
//                         <MoveDown className="h-4 w-4" />
//                       </Button>
//                       <Button variant="ghost" size="sm" className="text-red-600">
//                         <Trash2 className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div>
//                     <Label>Nama Program</Label>
//                     <Input
//                       value={program.title}
//                       onChange={(e) => updateProgramItem(index, 'title', e.target.value)}
//                     />
//                   </div>

//                   <div>
//                     <Label>Deskripsi</Label>
//                     <Textarea
//                       value={program.description}
//                       onChange={(e) => updateProgramItem(index, 'description', e.target.value)}
//                       rows={3}
//                     />
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label>Batch Info</Label>
//                       <Input
//                         value={program.batch}
//                         onChange={(e) => updateProgramItem(index, 'batch', e.target.value)}
//                         placeholder="Batch 5 - Buka Pendaftaran"
//                       />
//                     </div>
//                     <div>
//                       <Label>Status</Label>
//                       <Input
//                         value={program.status}
//                         onChange={(e) => updateProgramItem(index, 'status', e.target.value)}
//                         placeholder="Pendaftaran Dibuka"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label>Image URL</Label>
//                       <Input
//                         value={program.image}
//                         onChange={(e) => updateProgramItem(index, 'image', e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <Label>Link Pendaftaran</Label>
//                       <Input
//                         value={program.registrationLink}
//                         onChange={(e) => updateProgramItem(index, 'registrationLink', e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   {program.image && (
//                     <div>
//                       <Label>Preview</Label>
//                       <img 
//                         src={program.image} 
//                         alt={program.title}
//                         className="mt-1 h-32 w-full object-cover rounded-md"
//                       />
//                     </div>
//                   )}

//                   <div className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       id={`program-active-${program.id}`}
//                       checked={program.isActive}
//                       onChange={(e) => updateProgramItem(index, 'isActive', e.target.checked)}
//                       className="rounded border-gray-300"
//                     />
//                     <Label htmlFor={`program-active-${program.id}`} className="cursor-pointer">
//                       Tampilkan program ini
//                     </Label>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}

//             <Button 
//               onClick={() => handleSave('Program Unggulan')} 
//               disabled={isSaving}
//               className="bg-[#C1121F] hover:bg-[#9A0E19]"
//             >
//               <Save className="mr-2 h-4 w-4" />
//               Simpan Program
//             </Button>
//           </TabsContent>

//           {/* EVENTS SECTION */}
//           <TabsContent value="events" className="space-y-6">
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <h3 className="text-lg font-semibold">Agenda & Kegiatan</h3>
//                 <p className="text-sm text-gray-600">Event dan kegiatan mendatang LEAD Center</p>
//               </div>
//               <Button variant="outline" size="sm">
//                 <Plus className="mr-2 h-4 w-4" />
//                 Tambah Event
//               </Button>
//             </div>

//             {eventsData.map((event, index) => (
//               <Card key={event.id}>
//                 <CardHeader>
//                   <div className="flex justify-between items-center">
//                     <CardTitle className="text-base">{event.title}</CardTitle>
//                     <Button variant="ghost" size="sm" className="text-red-600">
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div>
//                     <Label>Judul Event</Label>
//                     <Input
//                       value={event.title}
//                       onChange={(e) => updateEventItem(index, 'title', e.target.value)}
//                     />
//                   </div>

//                   <div className="grid grid-cols-4 gap-4">
//                     <div>
//                       <Label>Tanggal</Label>
//                       <Input
//                         value={event.date}
//                         onChange={(e) => updateEventItem(index, 'date', e.target.value)}
//                         placeholder="23"
//                       />
//                     </div>
//                     <div>
//                       <Label>Bulan</Label>
//                       <Input
//                         value={event.month}
//                         onChange={(e) => updateEventItem(index, 'month', e.target.value)}
//                         placeholder="FEB"
//                       />
//                     </div>
//                     <div className="col-span-2">
//                       <Label>Waktu</Label>
//                       <Input
//                         value={event.time}
//                         onChange={(e) => updateEventItem(index, 'time', e.target.value)}
//                         placeholder="19:00 - 21:00 WIB"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label>Lokasi</Label>
//                       <Input
//                         value={event.location}
//                         onChange={(e) => updateEventItem(index, 'location', e.target.value)}
//                         placeholder="Zoom Online / Kampus STTB"
//                       />
//                     </div>
//                     <div>
//                       <Label>Tipe Event</Label>
//                       <Input
//                         value={event.type}
//                         onChange={(e) => updateEventItem(index, 'type', e.target.value)}
//                         placeholder="Webinar, Workshop, dll"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <Label>Link Registrasi</Label>
//                     <Input
//                       value={event.registrationLink}
//                       onChange={(e) => updateEventItem(index, 'registrationLink', e.target.value)}
//                     />
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       id={`event-active-${event.id}`}
//                       checked={event.isActive}
//                       onChange={(e) => updateEventItem(index, 'isActive', e.target.checked)}
//                       className="rounded border-gray-300"
//                     />
//                     <Label htmlFor={`event-active-${event.id}`} className="cursor-pointer">
//                       Tampilkan event ini
//                     </Label>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}

//             <Button 
//               onClick={() => handleSave('Agenda Event')} 
//               disabled={isSaving}
//               className="bg-[#C1121F] hover:bg-[#9A0E19]"
//             >
//               <Save className="mr-2 h-4 w-4" />
//               Simpan Event
//             </Button>
//           </TabsContent>

//           {/* MEDIA SECTION */}
//           <TabsContent value="media">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Media & Resources Section</CardTitle>
//                 <CardDescription>Video highlight dan galeri media (Coming soon...)</CardDescription>
//               </CardHeader>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </>
//   );
// }
