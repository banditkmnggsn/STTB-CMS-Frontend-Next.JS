// "use client"
// import { useState, useEffect } from "react";
// import { PageHeader } from "@/components/admin/PageHeader";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import {
//   Save,
//   Plus,
//   Trash2,
//   MoveUp,
//   MoveDown,
//   Eye,
//   Loader2,
//   ImageIcon,
//   LayoutTemplate,
//   CalendarDays,
//   Grid3X3,
//   Video,
//   ChevronRight,
//   Globe,
//   MapPin,
//   Clock,
// } from "lucide-react";

// // Import Service & Types
// import { leadService } from "@/services/lead-content.service";
// import { api } from "@/lib/api";
// import type {
//   LeadPillar,
//   LeadProgram,
//   LeadEvent,
// } from "@/lib/mock-data/contentModels";

// export interface LeadHeroContent {
//   id?: string;
//   badge: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   primaryButtonText: string;
//   primaryButtonLink: string;
//   secondaryButtonText: string;
//   secondaryButtonLink: string;
//   backgroundImage: string;
// }

// export default function LeadContentPage() {
//   // --- STATES ---
//   const [heroData, setHeroData] = useState<LeadHeroContent>({
//     badge: "",
//     title: "",
//     subtitle: "",
//     description: "",
//     primaryButtonText: "",
//     primaryButtonLink: "",
//     secondaryButtonText: "",
//     secondaryButtonLink: "",
//     backgroundImage: "",
//   });
//   const updateProgramItem = (
//     index: number,
//     field: keyof LeadProgram,
//     value: any,
//   ) => {
//     const newData = [...programsData];
//     newData[index] = { ...newData[index], [field]: value };
//     setProgramsData(newData);
//   };

// const addProgram = () => {
//     setProgramsData((prev) => [
//       ...prev,
//       {
//         id: `prog-${Date.now()}`,
//         title: "New Program Title",
//         batch: "Batch 5 - Buka Pendaftaran", // Menggantikan subtitle
//         description: "Program description goes here...",
//         image: "",
//         registrationLink: "/programs/new-program", // Menggantikan link
//         status: "open", // Menambahkan properti status yang wajib ada
//         isActive: true,
//         order: programsData.length + 1,
//       },
//     ]);
//   };
//   const [pillarsData, setPillarsData] = useState<LeadPillar[]>([]);
//   const [programsData, setProgramsData] = useState<LeadProgram[]>([]);
//   const [eventsData, setEventsData] = useState<LeadEvent[]>([]);
//   const [masterMedia, setMasterMedia] = useState<any[]>([]);

//   const [isLoading, setIsLoading] = useState(true);
//   const [isSaving, setIsSaving] = useState(false);
//   const [saveMessage, setSaveMessage] = useState({ text: "", type: "success" });

//   // --- INITIAL LOAD ---
//   useEffect(() => {
//     const loadAllData = async () => {
//       try {
//         setIsLoading(true);
//         const [hero, pillars, programs, events, mediaRes] = await Promise.all([
//           leadService.getHero(),
//           leadService.getPillars(),
//           leadService.getPrograms(),
//           leadService.getEvents(),
//           api.get("/api/media"),
//         ]);

//         setHeroData(hero || { backgroundImage: "" });
//         setPillarsData(pillars || []);
//         setProgramsData(programs || []);
//         setEventsData(events || []);
//         setMasterMedia(mediaRes.data?.items || mediaRes.data || []);
//       } catch (error) {
//         console.error("Gagal load data LEAD:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadAllData();
//   }, []);

//   // --- HANDLERS ---
//   const onSave = async (sectionName: string, saveFn: () => Promise<any>) => {
//     setIsSaving(true);
//     try {
//       const result = await saveFn();
//       if (result) {
//         setSaveMessage({
//           text: `${sectionName} berhasil diperbarui!`,
//           type: "success",
//         });
//       }
//     } catch (error) {
//       setSaveMessage({
//         text: `Gagal menyimpan ${sectionName}.`,
//         type: "error",
//       });
//     } finally {
//       setIsSaving(false);
//       setTimeout(() => setSaveMessage({ text: "", type: "success" }), 3000);
//     }
//   };

//   const updatePillarItem = (
//     index: number,
//     field: keyof LeadPillar,
//     value: any,
//   ) => {
//     const newData = [...pillarsData];
//     newData[index] = { ...newData[index], [field]: value };
//     setPillarsData(newData);
//   };

//   const updateEventItem = (
//     index: number,
//     field: keyof LeadEvent,
//     value: any,
//   ) => {
//     const newData = [...eventsData];
//     newData[index] = { ...newData[index], [field]: value };
//     setEventsData(newData);
//   };

//   const moveItem = (
//     data: any[],
//     setData: any,
//     index: number,
//     direction: "up" | "down",
//   ) => {
//     if (
//       (direction === "up" && index === 0) ||
//       (direction === "down" && index === data.length - 1)
//     )
//       return;
//     const newData = [...data];
//     const swapIndex = direction === "up" ? index - 1 : index + 1;
//     [newData[index], newData[swapIndex]] = [newData[swapIndex], newData[index]];
//     setData(newData);
//   };

//   const addEvent = () => {
//     setEventsData((prev) => [
//       ...prev,
//       {
//         id: `evt-${Date.now()}`,
//         title: "New Event Title",
//         date: "",
//         month: "",
//         time: "",
//         location: "",
//         description: "",
//         registrationLink: "",
//         type: "offline",
//         isActive: true,
//         order: eventsData.length + 1,
//       },
//     ]);
//   };

//   if (isLoading) {
//     return (
//       <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
//         <Loader2 className="h-10 w-10 animate-spin text-[#C1121F]" />
//         <p className="text-sm font-medium text-muted-foreground">
//           Memuat data LEAD Center...
//         </p>
//       </div>
//     );
//   }
//   return (
//     <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
//       <PageHeader
//         title="LEAD Center Content"
//         description="Manage hero sections, pillars, programs, and event agenda"
//         breadcrumbs={[
//           { label: "Content", path: "/content" },
//           { label: "LEAD Content" },
//         ]}
//       />

//       {saveMessage.text && (
//         <Alert
//           variant={saveMessage.type === "success" ? "default" : "destructive"}
//           className="mb-6"
//         >
//           <AlertDescription>{saveMessage.text}</AlertDescription>
//         </Alert>
//       )}

//         <Tabs defaultValue="hero" className="space-y-6">
//           <TabsList className="bg-slate-100 p-1 w-full flex overflow-x-auto justify-start">
//           <TabsTrigger value="hero">Hero Section</TabsTrigger>
//           <TabsTrigger value="pillars">3 Pillars</TabsTrigger>
//           <TabsTrigger value="programs">Programs</TabsTrigger>
//           <TabsTrigger value="events">Events Agenda</TabsTrigger>
//           <TabsTrigger value="media">Media Library</TabsTrigger>
//         </TabsList>

//         {/* --- TAB: HERO --- */}
//         <TabsContent value="hero">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//               <div>
//                 <CardTitle>Hero Configuration</CardTitle>
//                 <CardDescription>
//                   Main banner content for LEAD landing page
//                 </CardDescription>
//               </div>
//               <Button
//                 onClick={() =>
//                   onSave("Hero", () => leadService.updateHero(heroData))
//                 }
//                 disabled={isSaving}
//               >
//                 {isSaving ? (
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 ) : (
//                   <Save className="mr-2 h-4 w-4" />
//                 )}
//                 Save Changes
//               </Button>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label>Badge Text</Label>
//                   <Input
//                     value={heroData.badge}
//                     onChange={(e) =>
//                       setHeroData((prev) => ({
//                         ...prev,
//                         badge: e.target.value,
//                       }))
//                     }
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Subtitle</Label>
//                   <Input
//                     value={heroData.subtitle}
//                     onChange={(e) =>
//                       setHeroData((prev) => ({
//                         ...prev,
//                         subtitle: e.target.value,
//                       }))
//                     }
//                   />
//                 </div>
//                 <div className="md:col-span-2 space-y-2">
//                   <Label>Main Title</Label>
//                   <Input
//                     value={heroData.title}
//                     onChange={(e) =>
//                       setHeroData((prev) => ({
//                         ...prev,
//                         title: e.target.value,
//                       }))
//                     }
//                   />
//                 </div>
//                 <div className="md:col-span-2 space-y-2">
//                   <Label>Description</Label>
//                   <Textarea
//                     className="min-h-[100px]"
//                     value={heroData.description}
//                     onChange={(e) =>
//                       setHeroData((prev) => ({
//                         ...prev,
//                         description: e.target.value,
//                       }))
//                     }
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
//                 <div className="space-y-4">
//                   <Label className="text-[#C1121F] font-bold">
//                     Primary Button
//                   </Label>
//                   <div className="grid gap-2">
//                     <Input
//                       placeholder="Label"
//                       value={heroData.primaryButtonText}
//                       onChange={(e) =>
//                         setHeroData((prev) => ({
//                           ...prev,
//                           primaryButtonText: e.target.value,
//                         }))
//                       }
//                     />
//                     <Input
//                       placeholder="Link (URL)"
//                       value={heroData.primaryButtonLink}
//                       onChange={(e) =>
//                         setHeroData((prev) => ({
//                           ...prev,
//                           primaryButtonLink: e.target.value,
//                         }))
//                       }
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <Label className="font-bold">Secondary Button</Label>
//                   <div className="grid gap-2">
//                     <Input
//                       placeholder="Label"
//                       value={heroData.secondaryButtonText}
//                       onChange={(e) =>
//                         setHeroData((prev) => ({
//                           ...prev,
//                           secondaryButtonText: e.target.value,
//                         }))
//                       }
//                     />
//                     <Input
//                       placeholder="Link (URL)"
//                       value={heroData.secondaryButtonLink}
//                       onChange={(e) =>
//                         setHeroData((prev) => ({
//                           ...prev,
//                           secondaryButtonLink: e.target.value,
//                         }))
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* --- TAB: PILLARS --- */}
//         <TabsContent value="pillars">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>LEAD 3 Pillars</CardTitle>
//               <Button
//                 variant="outline"
//                 onClick={() =>
//                   onSave("Pillars", () =>
//                     leadService.updateAllPillars(pillarsData),
//                   )
//                 }
//                 disabled={isSaving}
//               >
//                 Save Pillars
//               </Button>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {pillarsData.map((pillar, index) => (
//                   <Card key={index} className="bg-muted/30">
//                     <CardContent className="pt-6 space-y-4">
//                       <div className="flex justify-between items-center">
//                         <span className="text-xs font-bold text-muted-foreground uppercase">
//                           Pillar {index + 1}
//                         </span>
//                         <div className="flex items-center space-x-2">
//                           <input
//                             type="checkbox"
//                             checked={pillar.isActive}
//                             onChange={(e) =>
//                               updatePillarItem(
//                                 index,
//                                 "isActive",
//                                 e.target.checked,
//                               )
//                             }
//                           />
//                           <Label className="text-[10px]">Active</Label>
//                         </div>
//                       </div>
//                       <Input
//                         value={pillar.title}
//                         onChange={(e) =>
//                           updatePillarItem(index, "title", e.target.value)
//                         }
//                         placeholder="Title"
//                       />
//                       <Textarea
//                         value={pillar.description}
//                         onChange={(e) =>
//                           updatePillarItem(index, "description", e.target.value)
//                         }
//                         placeholder="Description"
//                         className="h-24"
//                       />
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
// {/* --- TAB: PROGRAMS --- */}
//         <TabsContent value="programs">
//           <div className="flex justify-between items-center mb-4">
//             <div>
//               <h3 className="text-lg font-medium">Program Unggulan</h3>
//               <p className="text-sm text-muted-foreground">Kelola daftar program yang tampil di section "Program Unggulan Kami"</p>
//             </div>
//             <Button 
//               onClick={addProgram}
//               className="bg-[#C1121F] hover:bg-[#A01019]"
//             >
//               <Plus className="mr-2 h-4 w-4" /> Tambah Program
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {programsData.map((prog, index) => (
//               <Card key={prog.id} className="overflow-hidden flex flex-col">
//                 {/* Image Preview Area */}
//                 <div className="aspect-video bg-slate-100 relative group">
//                   {prog.image ? (
//                     <img 
//                       src={prog.image} 
//                       alt={prog.title} 
//                       className="w-full h-full object-cover" 
//                     />
//                   ) : (
//                     <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
//                       <ImageIcon className="h-8 w-8 mb-2" />
//                       <span className="text-xs">Belum ada foto</span>
//                     </div>
//                   )}
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
//                      <Button size="sm" variant="secondary" onClick={() => {/* Logic buka media library */}}>
//                        Ganti Foto
//                      </Button>
//                   </div>
//                 </div>

// <CardContent className="p-4 space-y-3 flex-1">
//                   <div className="space-y-1">
//                     <Label className="text-[10px] uppercase text-[#C1121F] font-bold">Batch / Keterangan Atas</Label>
//                     <Input 
//                       placeholder="Contoh: Batch 5 - Buka Pendaftaran" 
//                       value={prog.batch} // Ganti dari subtitle ke batch
//                       onChange={(e) => updateProgramItem(index, "batch", e.target.value)}
//                       className="h-8 text-xs"
//                     />
//                   </div>

//                   <div className="space-y-1">
//                     <Label className="text-xs font-semibold">Judul Program</Label>
//                     <Input 
//                       placeholder="Judul Program" 
//                       value={prog.title}
//                       onChange={(e) => updateProgramItem(index, "title", e.target.value)}
//                     />
//                   </div>

//                   <div className="space-y-1">
//                     <Label className="text-xs font-semibold">Deskripsi Singkat</Label>
//                     <Textarea 
//                       placeholder="Deskripsi program..." 
//                       value={prog.description}
//                       onChange={(e) => updateProgramItem(index, "description", e.target.value)}
//                       className="text-xs min-h-[80px] resize-none"
//                     />
//                   </div>

// <div className="space-y-1">
//                     <Label className="text-xs font-semibold">URL Pendaftaran / Detail</Label>
//                     <Input 
//                       placeholder="/programs/nama-program" 
//                       value={prog.registrationLink} // Ganti dari link ke registrationLink
//                       onChange={(e) => updateProgramItem(index, "registrationLink", e.target.value)}
//                       className="h-8 text-xs font-mono"
//                     />
//                   </div>

//                   <div className="space-y-1">
//                     <Label className="text-xs font-semibold">Link Foto (URL)</Label>
//                     <Input 
//                       placeholder="https://..." 
//                       value={prog.image}
//                       onChange={(e) => updateProgramItem(index, "image", e.target.value)}
//                       className="h-8 text-xs"
//                     />
//                   </div>
//                 </CardContent>

//                 <div className="p-4 pt-0 flex items-center justify-between border-t mt-auto">
//                   <div className="flex items-center gap-2">
//                     <Button 
//                       variant="outline" 
//                       size="icon" 
//                       className="h-8 w-8"
//                       onClick={() => moveItem(programsData, setProgramsData, index, "up")}
//                     >
//                       <MoveUp className="h-3 w-3" />
//                     </Button>
//                     <Button 
//                       variant="outline" 
//                       size="icon" 
//                       className="h-8 w-8"
//                       onClick={() => moveItem(programsData, setProgramsData, index, "down")}
//                     >
//                       <MoveDown className="h-3 w-3" />
//                     </Button>
//                   </div>
//                   <Button 
//                     variant="ghost" 
//                     size="sm" 
//                     className="text-destructive hover:text-destructive hover:bg-destructive/10"
//                     onClick={() => setProgramsData(prev => prev.filter((_, i) => i !== index))}
//                   >
//                     <Trash2 className="h-4 w-4 mr-2" /> Hapus
//                   </Button>
//                 </div>
//               </Card>
//             ))}
//           </div>

//  <div className="flex justify-end mt-8 border-t pt-6">
//             <Button
//               size="lg"
//               onClick={() => 
//                 onSave("Programs", async () => {
//                   // Karena service hanya punya update per ID, kita iterasi semua
//                   const updatePromises = programsData.map(prog => 
//                     leadService.updateProgram(prog.id, prog)
//                   );
//                   return Promise.all(updatePromises);
//                 })
//               }
//               disabled={isSaving}
//               className="bg-[#C1121F] hover:bg-[#A01019] px-8"
//             >
//               {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
//               Simpan Semua Program
//             </Button>
//           </div>
//         </TabsContent>
//         {/* --- TAB: EVENTS (CLEAN CARD STYLE) --- */}
//         <TabsContent value="events">
//           <div className="flex justify-end mb-4">
//             <Button
//               onClick={addEvent}
//               className="bg-[#C1121F] hover:bg-[#A01019]"
//             >
//               <Plus className="mr-2 h-4 w-4" /> Add New Event
//             </Button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {eventsData.map((event, index) => (
//               <Card key={index} className="shadow-sm">
//                 <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
//                   <div className="flex items-center gap-2">
//                     <div className="bg-muted p-2 rounded-md">
//                       <CalendarDays className="h-4 w-4" />
//                     </div>
//                     <CardTitle className="text-sm">Event Details</CardTitle>
//                   </div>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() =>
//                       setEventsData((prev) =>
//                         prev.filter((_, i) => i !== index),
//                       )
//                     }
//                     className="text-destructive"
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <Input
//                     placeholder="Event Title"
//                     value={event.title}
//                     onChange={(e) =>
//                       updateEventItem(index, "title", e.target.value)
//                     }
//                   />
//                   <div className="grid grid-cols-2 gap-2">
//                     <div className="relative">
//                       <Clock className="absolute left-2 top-3 h-3 w-3 text-muted-foreground" />
//                       <Input
//                         className="pl-7 text-xs"
//                         placeholder="Date/Time"
//                         value={event.date}
//                         onChange={(e) =>
//                           updateEventItem(index, "date", e.target.value)
//                         }
//                       />
//                     </div>
//                     <div className="relative">
//                       <MapPin className="absolute left-2 top-3 h-3 w-3 text-muted-foreground" />
//                       <Input
//                         className="pl-7 text-xs"
//                         placeholder="Location"
//                         value={event.location}
//                         onChange={(e) =>
//                           updateEventItem(index, "location", e.target.value)
//                         }
//                       />
//                     </div>
//                   </div>
//                   <div className="relative">
//                     <Globe className="absolute left-2 top-3 h-3 w-3 text-muted-foreground" />
//                     <Input
//                       className="pl-7 text-xs"
//                       placeholder="Registration Link"
//                       value={event.registrationLink}
//                       onChange={(e) =>
//                         updateEventItem(
//                           index,
//                           "registrationLink",
//                           e.target.value,
//                         )
//                       }
//                     />
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//           <div className="flex justify-end mt-6">
//             <Button
//               onClick={() =>
//                 onSave("Agenda", () => leadService.updateEvents(eventsData))
//               }
//               disabled={isSaving}
//             >
//               Save All Agenda
//             </Button>
//           </div>
//         </TabsContent>

//         {/* --- TAB: MEDIA --- */}
//         <TabsContent value="media">
//           <Card>
//             <CardHeader>
//               <CardTitle>Media Library</CardTitle>
//               <CardDescription>
//                 Click an image to set it as the Hero background
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
//                 {masterMedia.map((media) => (
//                   <div
//                     key={media.id}
//                     className={`aspect-square rounded-md border-2 overflow-hidden cursor-pointer transition-all ${heroData.backgroundImage === media.url ? "border-[#C1121F] ring-2 ring-[#C1121F]/20" : "border-transparent hover:border-muted-foreground"}`}
//                     onClick={() =>
//                       setHeroData((prev) => ({
//                         ...prev,
//                         backgroundImage: media.url,
//                       }))
//                     }
//                   >
//                     <img
//                       src={media.url}
//                       className="w-full h-full object-cover"
//                       alt="Media"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/admin/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Save, Plus, Trash2, MoveUp, MoveDown, Eye, Loader2,
  ImageIcon, LayoutTemplate, CalendarDays, Grid3X3, Video,
  Clock, MapPin, Globe
} from "lucide-react";
import type { 
  LeadHeroContent, 
  LeadPillar, 
  LeadProgram, 
  LeadEvent 
} from '@/types/content';
import { leadService } from "@/services/lead-content.service";
import { api } from "@/lib/api";

// ==========================================
// 1. PRODUCTION INTERFACES (Direct DB Mapping)
// ==========================================
// export interface LeadHeroContent {
//   badge: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   primaryButtonText: string;
//   primaryButtonLink: string;
//   secondaryButtonText: string;
//   secondaryButtonLink: string;
//   backgroundImage: string;
// }

// export interface LeadPillar {
//   id: string;
//   title: string;
//   description: string;
//   isActive: boolean;
//   order: number;
// }

// export interface LeadProgram {
//   id: string; // Bisa UUID string dari DB atau 'temp-xxx' untuk client-side
//   title: string;
//   description: string;
//   batch: string;
//   status: string;
//   image: string;
//   registrationLink: string;
//   order: number;
//   isActive: boolean;
// }

// export interface LeadEvent {
//   id: string;
//   title: string;
//   date: string;
//   month: string;
//   time: string;
//   location: string;
//   type: string;
//   registrationLink: string;
//   order: number;
//   isActive: boolean;
// }

export default function LeadContentPage() {
  // --- REAL STATES ---
  const [heroData, setHeroData] = useState<LeadHeroContent>({
    badge: "", title: "", subtitle: "", description: "",
    primaryButtonText: "", primaryButtonLink: "",
    secondaryButtonText: "", secondaryButtonLink: "", backgroundImage: ""
  });
  const [pillarsData, setPillarsData] = useState<LeadPillar[]>([]);
  const [programsData, setProgramsData] = useState<LeadProgram[]>([]);
  const [eventsData, setEventsData] = useState<LeadEvent[]>([]);
  const [masterMedia, setMasterMedia] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState({ text: "", type: "success" });

  // --- INITIAL LOAD (Direct Fetch) ---
  useEffect(() => {
    const loadAllData = async () => {
      try {
        setIsLoading(true);
        const [hero, pillars, programs, events, mediaRes] = await Promise.all([
          leadService.getHero(),
          leadService.getPillars(),
          leadService.getPrograms(),
          leadService.getEvents(),
          api.get("/api/media"),
        ]);

        if (hero) setHeroData(hero);
        if (pillars) setPillarsData(pillars);
        if (programs) setProgramsData(programs);
        if (events) setEventsData(events);
        setMasterMedia(mediaRes?.data?.items || mediaRes?.data || []);
      } catch (error) {
        console.error("Gagal load data LEAD:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadAllData();
  }, []);

  // --- UNIVERSAL SAVE HANDLER ---
  const onSave = async (sectionName: string, saveFn: () => Promise<any>) => {
    setIsSaving(true);
    try {
      await saveFn();
      setSaveMessage({ text: `${sectionName} berhasil disimpan!`, type: "success" });
    } catch (error) {
      setSaveMessage({ text: `Gagal menyimpan ${sectionName}.`, type: "error" });
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveMessage({ text: "", type: "success" }), 3000);
    }
  };

  // --- UPDATE DATA HANDLERS ---
  const updateProgramItem = (index: number, field: keyof LeadProgram, value: any) => {
    const newData = [...programsData];
    newData[index] = { ...newData[index], [field]: value };
    setProgramsData(newData);
  };

  const updatePillarItem = (index: number, field: keyof LeadPillar, value: any) => {
    const newData = [...pillarsData];
    newData[index] = { ...newData[index], [field]: value };
    setPillarsData(newData);
  };

  const updateEventItem = (index: number, field: keyof LeadEvent, value: any) => {
    const newData = [...eventsData];
    newData[index] = { ...newData[index], [field]: value };
    setEventsData(newData);
  };

  // --- REORDER LOGIC ---
  const moveItem = (data: any[], setData: any, index: number, direction: "up" | "down") => {
    if ((direction === "up" && index === 0) || (direction === "down" && index === data.length - 1)) return;
    const newData = [...data];
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    [newData[index], newData[swapIndex]] = [newData[swapIndex], newData[index]];
    
    // Auto sync order numbers
    const updatedOrder = newData.map((item, i) => ({ ...item, order: i + 1 }));
    setData(updatedOrder);
  };

  // --- ADD ITEM HANDLERS (Clears Dummy Values) ---
  const addProgram = () => {
    setProgramsData((prev) => [
      ...prev,
      {
        id: `temp-${Date.now()}`, // Ditandai 'temp-' untuk Smart Save (POST)
        title: "",
        batch: "",
        description: "",
        image: "",
        registrationLink: "",
        status: "open",
        isActive: true,
        order: prev.length + 1,
      },
    ]);
  };

 const addEvent = () => {
  setEventsData((prev) => [
    ...prev,
    {
      id: `temp-${Date.now()}`,
      title: "",
      date: "",
      month: "",
      time: "",
      location: "",
      registrationLink: "",
      type: "offline",
      order: prev.length + 1,
      isActive: true,
      isLeadEvent: true, // WAJIB ADA sesuai types/content.ts
    },
  ]);
};

  if (isLoading) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#C1121F]" />
        <p className="text-sm font-medium text-muted-foreground">Memuat data asli database...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <PageHeader
        title="LEAD Center Content"
        description="Pengaturan landing page LEAD, Program Unggulan, dan Agenda Kegiatan."
        breadcrumbs={[{ label: "Content", path: "/content" }, { label: "LEAD Content" }]}
      />

      {saveMessage.text && (
        <Alert variant={saveMessage.type === "success" ? "default" : "destructive"} className="mb-6">
          <AlertDescription>{saveMessage.text}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="hero" className="space-y-6">
        <TabsList className="bg-slate-100 p-1 w-full flex overflow-x-auto justify-start border">
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="pillars">3 Pillars</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="events">Events Agenda</TabsTrigger>
          <TabsTrigger value="media">Media Library</TabsTrigger>
        </TabsList>

        {/* --- TAB: HERO --- */}
        <TabsContent value="hero">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Hero Configuration</CardTitle>
                <CardDescription>Atur spanduk utama landing page LEAD</CardDescription>
              </div>
              <Button onClick={() => onSave("Hero", () => leadService.updateHero(heroData))} disabled={isSaving}>
                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                Save Changes
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Badge Text</Label>
                  <Input value={heroData.badge} onChange={(e) => setHeroData((prev) => ({ ...prev, badge: e.target.value }))} />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Input value={heroData.subtitle} onChange={(e) => setHeroData((prev) => ({ ...prev, subtitle: e.target.value }))} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label>Main Title</Label>
                  <Input value={heroData.title} onChange={(e) => setHeroData((prev) => ({ ...prev, title: e.target.value }))} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label>Description</Label>
                  <Textarea className="min-h-[100px]" value={heroData.description} onChange={(e) => setHeroData((prev) => ({ ...prev, description: e.target.value }))} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
                <div className="space-y-4">
                  <Label className="text-[#C1121F] font-bold">Primary Button</Label>
                  <div className="grid gap-2">
                    <Input placeholder="Label" value={heroData.primaryButtonText} onChange={(e) => setHeroData((prev) => ({ ...prev, primaryButtonText: e.target.value }))} />
                    <Input placeholder="URL Route" value={heroData.primaryButtonLink} onChange={(e) => setHeroData((prev) => ({ ...prev, primaryButtonLink: e.target.value }))} />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label className="font-bold">Secondary Button</Label>
                  <div className="grid gap-2">
                    <Input placeholder="Label" value={heroData.secondaryButtonText} onChange={(e) => setHeroData((prev) => ({ ...prev, secondaryButtonText: e.target.value }))} />
                    <Input placeholder="URL Route" value={heroData.secondaryButtonLink} onChange={(e) => setHeroData((prev) => ({ ...prev, secondaryButtonLink: e.target.value }))} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- TAB: PILLARS --- */}
        <TabsContent value="pillars">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>LEAD 3 Pillars</CardTitle>
                <CardDescription>Kelola 3 pilar kontribusi LEAD.</CardDescription>
              </div>
              <Button variant="outline" onClick={() => onSave("Pillars", () => leadService.updateAllPillars(pillarsData))} disabled={isSaving}>
                Save Pillars
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pillarsData.map((pillar, index) => (
                  <Card key={index} className="bg-muted/30">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-muted-foreground uppercase">Pillar {index + 1}</span>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" checked={pillar.isActive} onChange={(e) => updatePillarItem(index, "isActive", e.target.checked)} />
                          <Label className="text-[10px]">Active</Label>
                        </div>
                      </div>
                      <Input value={pillar.title} onChange={(e) => updatePillarItem(index, "title", e.target.value)} placeholder="Title" />
                      <Textarea value={pillar.description} onChange={(e) => updatePillarItem(index, "description", e.target.value)} placeholder="Description" className="h-24" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {/* --- TAB: PROGRAMS --- */}
        <TabsContent value="programs">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Featured Programs</CardTitle>
                <CardDescription>Daftar program unggulan di LEAD Center.</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={addProgram}>
                  <Plus className="mr-2 h-4 w-4" /> Add Program
                </Button>
                <Button onClick={() => onSave("Programs", () => leadService.updateProgram("bulk", programsData))} disabled={isSaving}>
                  {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                  Save All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {programsData.map((program, index) => (
                <div key={program.id} className="group relative border rounded-lg p-4 bg-card hover:border-[#C1121F] transition-colors">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="h-6 w-6" onClick={() => moveItem(programsData, setProgramsData, index, "up")}>
                      <MoveUp className="h-3 w-3" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-6 w-6" onClick={() => moveItem(programsData, setProgramsData, index, "down")}>
                      <MoveDown className="h-3 w-3" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label>Program Image URL</Label>
                      <div className="flex gap-2">
                        <Input value={program.image} onChange={(e) => updateProgramItem(index, "image", e.target.value)} placeholder="path/to/img.jpg" />
                      </div>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 gap-2">
                      <div className="col-span-2 space-y-1">
                        <Label>Title</Label>
                        <Input value={program.title} onChange={(e) => updateProgramItem(index, "title", e.target.value)} />
                      </div>
                      <div className="space-y-1">
                        <Label>Batch/Periode</Label>
                        <Input value={program.batch} onChange={(e) => updateProgramItem(index, "batch", e.target.value)} placeholder="e.g. Batch 10" />
                      </div>
                      <div className="space-y-1">
                        <Label>Status Tag</Label>
                        <Input value={program.status} onChange={(e) => updateProgramItem(index, "status", e.target.value)} placeholder="Open / Closed" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-end gap-2">
                       <Button variant="destructive" size="sm" onClick={() => setProgramsData(programsData.filter((_, i) => i !== index))}>
                        <Trash2 className="mr-2 h-4 w-4" /> Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- TAB: EVENTS --- */}
        <TabsContent value="events">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Agenda kegiatan mendatang (Automatic isLeadEvent filtering).</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={addEvent}>
                  <Plus className="mr-2 h-4 w-4" /> Add Event
                </Button>
                <Button onClick={() => onSave("Events", () => leadService.updateEvents(eventsData))} disabled={isSaving}>
                  Save Agenda
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 border-b">
                    <tr>
                      <th className="p-3 text-left font-medium">Date & Month</th>
                      <th className="p-3 text-left font-medium">Event Title</th>
                      <th className="p-3 text-left font-medium">Location</th>
                      <th className="p-3 text-left font-medium w-[100px]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {eventsData.map((event, index) => (
                      <tr key={event.id}>
                        <td className="p-3">
                          <div className="flex gap-1">
                            <Input className="w-12 h-8 px-1 text-center" value={event.date} onChange={(e) => updateEventItem(index, "date", e.target.value)} />
                            <Input className="w-20 h-8 px-1" value={event.month} onChange={(e) => updateEventItem(index, "month", e.target.value)} />
                          </div>
                        </td>
                        <td className="p-3">
                          <Input className="h-8" value={event.title} onChange={(e) => updateEventItem(index, "title", e.target.value)} />
                        </td>
                        <td className="p-3">
                           <Input className="h-8" value={event.location} onChange={(e) => updateEventItem(index, "location", e.target.value)} />
                        </td>
                        <td className="p-3">
                          <Button variant="ghost" size="icon" className="text-destructive" onClick={() => setEventsData(eventsData.filter((_, i) => i !== index))}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- TAB: MEDIA --- */}
        <TabsContent value="media">
          <Card>
            <CardHeader>
              <CardTitle>Asset References</CardTitle>
              <CardDescription>Gunakan path URL di bawah untuk mengisi gambar pada Hero, Program, atau Event.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {masterMedia.length > 0 ? (
                  masterMedia.map((file: any) => (
                    <div key={file.id} className="group relative aspect-square border rounded-md overflow-hidden bg-muted">
                      <img src={file.url} alt={file.filename} className="object-cover w-full h-full" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-2 transition-opacity">
                        <p className="text-[10px] text-white truncate w-full mb-2">{file.filename}</p>
                        <Button size="xs" variant="secondary" className="text-[10px] h-6" onClick={() => navigator.clipboard.writeText(file.url)}>
                          Copy Link
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-10 text-center text-muted-foreground">
                    <ImageIcon className="mx-auto h-10 w-10 mb-2 opacity-20" />
                    <p>Tidak ada aset media ditemukan di database.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}