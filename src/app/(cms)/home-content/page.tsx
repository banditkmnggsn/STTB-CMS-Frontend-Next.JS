"use client";

import { useState, useEffect } from "react";
import { homeContentService } from "@/services/home-content.service";
import { PageHeader } from "@/components/admin/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Save,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Image as ImageIcon,
} from "lucide-react";
import * as Icons from "lucide-react";
import { HelpCircle } from "lucide-react";
import { toast } from "sonner";

const IconPreview = ({ name }: { name: string }) => {
  const LucideIcon = (Icons as any)[name];
  return LucideIcon ? (
    <LucideIcon className="h-5 w-5 text-[#C1121F]" />
  ) : (
    <Icons.HelpCircle className="h-5 w-5 text-slate-300" />
  );
};
export default function HomeContentPage() {
  // --- STATES ---
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });
  // Data States (Mapping ke JSONB Backend)
  const [hero, setHero] = useState<any>({
    title: "",
    subtitle: "",
    description: "",
    primaryButtonText: "",
    primaryButtonLink: "",
    secondaryButtonText: "",
    secondaryButtonLink: "",
    backgroundImage: "",
  });
  const [stats, setStats] = useState<any[]>([]);
  const [programs, setPrograms] = useState<any[]>([]);
  const [pillars, setPillars] = useState<any[]>([]); // Why Choose
  const [facilities, setFacilities] = useState<any[]>([]);
  const [cta, setCta] = useState<any>({});

  // --- FETCH DATA ---
// Ganti seluruh isi useEffect loadInitialData dengan ini:

useEffect(() => {
  const loadInitialData = async () => {
    try {
      setIsLoading(true);

      // getSection() sekarang langsung mengembalikan konten —
      // tidak ada lagi layer .data atau .data.data yang perlu di-unwrap di sini.
      const [heroData, statsData, showcaseData, pillarsData, facilitiesData] =
        await Promise.all([
          homeContentService.getSection('hero'),
          homeContentService.getSection('stats'),
          homeContentService.getSection('showcase'),
          homeContentService.getSection('pillars'),
          homeContentService.getSection('facilities'),
        ]);

      if (heroData) {
        setHero({
          title:               heroData.title               || '',
          subtitle:            heroData.subtitle            || '',
          description:         heroData.description         || '',
          primaryButtonText:   heroData.primaryButtonText   || '',
          primaryButtonLink:   heroData.primaryButtonLink   || '',
          secondaryButtonText: heroData.secondaryButtonText || '',
          secondaryButtonLink: heroData.secondaryButtonLink || '',
          backgroundImage:     heroData.backgroundImage     || '',
        });
      }

      setStats(     Array.isArray(statsData)     ? statsData     : []);
      setPrograms(  Array.isArray(showcaseData)  ? showcaseData  : []);
      setPillars(   Array.isArray(pillarsData)   ? pillarsData   : []);
      setFacilities(Array.isArray(facilitiesData)? facilitiesData: []);

    } catch (error) {
      console.error('Gagal load data:', error);
      toast.error('Gagal mengambil data dari server');
    } finally {
      setIsLoading(false);
    }
  };

  loadInitialData();
}, []);

  // --- HANDLERS ---
  const handleSave = async (section: string, data: any) => {
    try {
      setIsSaving(true);

      // Kirim langsung ke endpoint /api/home-content/:section
      // Pastikan service Anda melakukan PUT request
      await homeContentService.updateSection(section, data);

      toast.success(`Berhasil memperbarui section ${section}`);
    } catch (error) {
      console.error("Save error:", error);
      toast.error(`Gagal menyimpan ${section}`);
    } finally {
      setIsSaving(false);
    }
  };

  // Helper untuk tambah item di array (Stats, Program, Pillars, Facilities)
  const addItem = (setter: any, template: any) =>
    setter((prev: any) => [...prev, { ...template, id: Date.now() }]);

  const removeItem = (setter: any, index: number) =>
    setter((prev: any) => prev.filter((_: any, i: number) => i !== index));

  const updateArrayField = (
    setter: React.Dispatch<React.SetStateAction<any[]>>,
    index: number,
    field: string,
    value: any,
  ) => {
    setter((prev) => {
      const newArr = [...prev];
      newArr[index] = { ...newArr[index], [field]: value };
      return newArr;
    });
  };

  return (
    <>
      <PageHeader
        title="Konten Homepage"
        description="Kelola teks, gambar, dan urutan konten di halaman utama."
        breadcrumbs={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Konten Homepage" },
        ]}
      />

      <div className="p-8 max-w-6xl mx-auto space-y-6">
        {alert.message && (
          <Alert
            className={`${alert.type === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`}
          >
            <div className="flex items-center gap-2">
              {alert.type === "success" ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertDescription>{alert.message}</AlertDescription>
            </div>
          </Alert>
        )}

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="bg-slate-100 p-1 w-full flex overflow-x-auto justify-start">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="stats">Statistik</TabsTrigger>
            <TabsTrigger value="showcase">Program</TabsTrigger>
            <TabsTrigger value="pillars">Why Choose</TabsTrigger>
            <TabsTrigger value="facilities">Fasilitas</TabsTrigger>
            <TabsTrigger value="cta">CTA</TabsTrigger>
          </TabsList>

          {/* SECTION: HERO */}
          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>
                  Bagian pertama yang dilihat pengunjung saat membuka website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {/* Row 1: Judul & Subtitle */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Judul Utama</Label>
                      <Input
                        value={hero?.title || ""}
                        onChange={(e) =>
                          setHero((prev: any) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Subtitle</Label>
                      <Input
                        placeholder="Masukkan subtitle..."
                        // Gunakan optional chaining (?.) dan fallback string kosong
                        value={hero?.subtitle || ""}
                        onChange={(e) =>
                          // Cegah spread null dengan pengecekan hero
                          setHero(
                            hero
                              ? { ...hero, subtitle: e.target.value }
                              : { subtitle: e.target.value },
                          )
                        }
                      />
                    </div>
                  </div>

                  {/* Row 2: Deskripsi */}
                  <div className="space-y-2">
                    <Label>Deskripsi</Label>
                    <Textarea
                      placeholder="Masukkan deskripsi hero..."
                      rows={4}
                      value={hero?.description || ""}
                      onChange={(e) =>
                        setHero(
                          hero
                            ? { ...hero, description: e.target.value }
                            : { description: e.target.value },
                        )
                      }
                    />
                  </div>

                  {/* Row 3: Buttons Container */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 border rounded-lg bg-slate-50/50">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-blue-600 font-semibold">
                          Tombol Utama - Teks
                        </Label>
                        <Input
                          value={hero?.primaryButtonText || ""}
                          onChange={(e) =>
                            setHero(
                              hero
                                ? { ...hero, primaryButtonText: e.target.value }
                                : { primaryButtonText: e.target.value },
                            )
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-blue-600 font-semibold">
                          Tombol Utama - Link
                        </Label>
                        <Input
                          value={hero?.primaryButtonLink || ""}
                          onChange={(e) =>
                            setHero(
                              hero
                                ? { ...hero, primaryButtonLink: e.target.value }
                                : { primaryButtonLink: e.target.value },
                            )
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-slate-600 font-semibold">
                          Tombol Sekunder - Teks
                        </Label>
                        <Input
                          value={hero?.secondaryButtonText || ""}
                          onChange={(e) =>
                            setHero(
                              hero
                                ? {
                                    ...hero,
                                    secondaryButtonText: e.target.value,
                                  }
                                : { secondaryButtonText: e.target.value },
                            )
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-600 font-semibold">
                          Tombol Sekunder - Link
                        </Label>
                        <Input
                          value={hero?.secondaryButtonLink || ""}
                          onChange={(e) =>
                            setHero(
                              hero
                                ? {
                                    ...hero,
                                    secondaryButtonLink: e.target.value,
                                  }
                                : { secondaryButtonLink: e.target.value },
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Image URL */}
                  <div className="space-y-2">
                    <Label>Background Image URL</Label>
                    <Input
                      placeholder="https://images.unsplash.com/..."
                      value={hero?.backgroundImage || ""}
                      onChange={(e) =>
                        setHero(
                          hero
                            ? { ...hero, backgroundImage: e.target.value }
                            : { backgroundImage: e.target.value },
                        )
                      }
                    />
                  </div>
                </div>

                <Button
                  onClick={() => handleSave("hero", hero)}
                  disabled={isSaving}
                  className="bg-[#C1121F] hover:bg-[#9A0E19] mt-4"
                >
                  {isSaving ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="mr-2 h-4 w-4" />
                  )}
                  Simpan Hero
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SECTION: STATS */}
          <TabsContent value="stats" className="space-y-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg border">
              <div className="text-sm font-medium text-slate-500">
                Statistik STTB
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  addItem(setStats, {
                    icon: "GraduationCap",
                    value: "",
                    label: "",
                    description: "",
                  })
                }
              >
                <Plus className="h-4 w-4 mr-1" /> Tambah Statistik
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {stats.map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400">
                        Statistik #{idx + 1}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(setStats, idx)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Icon (Lucide React)</Label>
                        <Input
                          value={item.icon}
                          onChange={(e) =>
                            updateArrayField(
                              setStats,
                              idx,
                              "icon",
                              e.target.value,
                            )
                          }
                          placeholder="Contoh: GraduationCap, Users, Award"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Nilai</Label>
                        <Input
                          value={item.value}
                          onChange={(e) =>
                            updateArrayField(
                              setStats,
                              idx,
                              "value",
                              e.target.value,
                            )
                          }
                          placeholder="7"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Label</Label>
                      <Input
                        value={item.label}
                        onChange={(e) =>
                          updateArrayField(
                            setStats,
                            idx,
                            "label",
                            e.target.value,
                          )
                        }
                        placeholder="Program Studi"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Deskripsi</Label>
                      <Textarea
                        value={item.description}
                        onChange={(e) =>
                          updateArrayField(
                            setStats,
                            idx,
                            "description",
                            e.target.value,
                          )
                        }
                        placeholder="Beragam pilihan program sarjana dan magister"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              onClick={() => handleSave("stats", stats)}
              disabled={isSaving}
              className="bg-[#C1121F]"
            >
              {isSaving ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Simpan Statistik
            </Button>
          </TabsContent>
          {/* SECTION: PROGRAM (SHOWCASE) */}
          <TabsContent value="showcase" className="space-y-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg border">
              <div>
                <h3 className="text-lg font-semibold">Program Studi</h3>
                <p className="text-sm text-slate-500">
                  Daftar program sarjana/magister yang muncul di homepage
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() =>
                  addItem(setPrograms, {
                    id: Date.now(), // ID sementara untuk key render
                    title: "",
                    degree: "",
                    description: "",
                    link: "",
                    image: "",
                    isActive: true,
                  })
                }
              >
                <Plus className="h-4 w-4 mr-2" /> Tambah Program
              </Button>
            </div>

            <div className="space-y-6">
              {programs.map((prog, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <CardHeader className="flex flex-row items-center justify-between bg-slate-50/50 border-b py-3">
                    <CardTitle className="text-md font-bold">
                      {prog.title || `Program #${idx + 1}`}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(setPrograms, idx)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Judul Program</Label>
                        <Input
                          value={prog.title || ""}
                          onChange={(e) =>
                            updateArrayField(
                              setPrograms,
                              idx,
                              "title",
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Gelar</Label>
                        <Input
                          value={prog.degree}
                          onChange={(e) =>
                            updateArrayField(
                              setPrograms,
                              idx,
                              "degree",
                              e.target.value,
                            )
                          }
                          placeholder="Contoh: S.Th"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Deskripsi</Label>
                      <Textarea
                        value={prog.description}
                        onChange={(e) =>
                          updateArrayField(
                            setPrograms,
                            idx,
                            "description",
                            e.target.value,
                          )
                        }
                        placeholder="Jelaskan singkat mengenai program studi ini..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Link Program</Label>
                        <Input
                          value={prog.link}
                          onChange={(e) =>
                            updateArrayField(
                              setPrograms,
                              idx,
                              "link",
                              e.target.value,
                            )
                          }
                          placeholder="/program/sarjana-teologi"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Image URL</Label>
                        <Input
                          value={prog.image}
                          onChange={(e) =>
                            updateArrayField(
                              setPrograms,
                              idx,
                              "image",
                              e.target.value,
                            )
                          }
                          placeholder="https://images.unsplash.com/..."
                        />
                      </div>
                    </div>

                    {/* Real-time Image Preview */}
                    {prog.image && (
                      <div className="space-y-2">
                        <Label className="text-xs text-slate-400">
                          Preview Gambar
                        </Label>
                        <div className="relative h-40 w-full overflow-hidden rounded-md border">
                          <img
                            src={prog.image}
                            alt="Preview"
                            className="h-full w-full object-cover"
                            onError={(e) =>
                              (e.currentTarget.src =
                                "https://placehold.co/600x400?text=Invalid+Image+URL")
                            }
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-2 pt-2">
                      <input
                        type="checkbox"
                        id={`active-${idx}`}
                        className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                        checked={!!prog.isActive}
                        onChange={(e) =>
                          updateArrayField(
                            setPrograms,
                            idx,
                            "isActive",
                            e.target.checked,
                          )
                        }
                      />
                      <Label
                        htmlFor={`active-${idx}`}
                        className="text-sm font-medium"
                      >
                        Aktif (tampilkan di homepage)
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              onClick={() => handleSave("showcase", programs)}
              disabled={isSaving}
              className="bg-[#C1121F] w-full md:w-auto"
            >
              {isSaving ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Simpan Semua Program
            </Button>
          </TabsContent>

          {/* SECTION: CTA */}
          <TabsContent value="cta">
            <Card>
              <CardHeader>
                <CardTitle>Call to Action Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="CTA Title"
                  value={cta.title || ""}
                  onChange={(e) => setCta({ ...cta, title: e.target.value })}
                />
                <Textarea
                  placeholder="CTA Description"
                  value={cta.description || ""}
                  onChange={(e) =>
                    setCta({ ...cta, description: e.target.value })
                  }
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Button Text"
                    value={cta.buttonText || ""}
                    onChange={(e) =>
                      setCta({ ...cta, buttonText: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Button Link"
                    value={cta.buttonLink || ""}
                    onChange={(e) =>
                      setCta({ ...cta, buttonLink: e.target.value })
                    }
                  />
                </div>
                <Button
                  onClick={() => handleSave("cta", cta)}
                  disabled={isSaving}
                  className="bg-[#C1121F]"
                >
                  Simpan CTA
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SECTION: PILLARS & FACILITIES (Placeholder UI logic sama) */}
          <TabsContent value="pillars" className="space-y-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg border">
              <div>
                <h3 className="text-lg font-semibold">Why Choose Us</h3>
                <p className="text-sm text-slate-500">
                  Pilar keunggulan yang membedakan kampus kita
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() =>
                  addItem(setPillars, {
                    icon: "Star",
                    title: "",
                    description: "",
                  })
                }
              >
                <Plus className="h-4 w-4 mr-2" /> Tambah Pilar
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {pillars.map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <IconPreview name={item.icon || "Star"} />
                        <span className="font-bold text-sm">
                          Pilar #{idx + 1}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(setPillars, idx)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Icon (Lucide)</Label>
                        <Input
                          value={item.icon || ""}
                          onChange={(e) =>
                            updateArrayField(
                              setPillars,
                              idx,
                              "icon",
                              e.target.value,
                            )
                          }
                          placeholder="Shield, Zap, Heart, dll"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label>Judul Keunggulan</Label>
                        <Input
                          value={item.title || ""}
                          onChange={(e) =>
                            updateArrayField(
                              setPillars,
                              idx,
                              "title",
                              e.target.value,
                            )
                          }
                          placeholder="Contoh: Kurikulum Berbasis Industri"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Deskripsi Singkat</Label>
                      <Textarea
                        value={item.description || ""}
                        onChange={(e) =>
                          updateArrayField(
                            setPillars,
                            idx,
                            "description",
                            e.target.value,
                          )
                        }
                        placeholder="Jelaskan mengapa poin ini unggul..."
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              onClick={() => handleSave("pillars", pillars)}
              disabled={isSaving}
              className="bg-[#C1121F]"
            >
              {isSaving ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Simpan Why Choose
            </Button>
          </TabsContent>
          <TabsContent value="facilities" className="space-y-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg border">
              <div>
                <h3 className="text-lg font-semibold">Fasilitas Kampus</h3>
                <p className="text-sm text-slate-500">
                  Daftar sarana dan prasarana penunjang belajar
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() =>
                  addItem(setFacilities, {
                    title: "",
                    image: "",
                    description: "",
                  })
                }
              >
                <Plus className="h-4 w-4 mr-2" /> Tambah Fasilitas
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {facilities.map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-bold text-[#C1121F]">
                        Fasilitas #{idx + 1}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(setFacilities, idx)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label>Nama Fasilitas</Label>
                      <Input
                        value={item.title || ""}
                        onChange={(e) =>
                          updateArrayField(
                            setFacilities,
                            idx,
                            "title",
                            e.target.value,
                          )
                        }
                        placeholder="Contoh: Perpustakaan Digital"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Image URL</Label>
                      <Input
                        value={item.image || ""}
                        onChange={(e) =>
                          updateArrayField(
                            setFacilities,
                            idx,
                            "image",
                            e.target.value,
                          )
                        }
                        placeholder="https://..."
                      />
                    </div>

                    {item.image && (
                      <div className="h-32 w-full rounded-md overflow-hidden border">
                        <img
                          src={item.image}
                          alt="Preview"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label>Deskripsi</Label>
                      <Textarea
                        value={item.description || ""}
                        onChange={(e) =>
                          updateArrayField(
                            setFacilities,
                            idx,
                            "description",
                            e.target.value,
                          )
                        }
                        placeholder="Jelaskan fungsi fasilitas ini..."
                        className="h-20"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              onClick={() => handleSave("facilities", facilities)}
              disabled={isSaving}
              className="bg-[#C1121F]"
            >
              {isSaving ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Simpan Fasilitas
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
