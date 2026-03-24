"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/admin/PageHeader";
import { DataTable, Column } from "@/components/admin/DataTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import {
  Plus,
  Mail,
  Shield,
  Users,
  Save,
  Loader2,
  X,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  getAllUsers,
  getAllRoles,
  updateUser,
  updateRolePermissions,
  createRole,
  UserProfile,
  Role,
} from "@/services/users.service";

// ============================================================
// Modal Create Role
// ============================================================

interface CreateRoleModalProps {
  onClose: () => void;
  onSuccess: (newRole: Role) => void;
}

function CreateRoleModal({ onClose, onSuccess }: CreateRoleModalProps) {
  const [form, setForm] = useState({ name: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Nama role wajib diisi");
      return;
    }

    setIsLoading(true);
    setError("");
    try {
      const newRole = await createRole({
        name: form.name.trim().toLowerCase(), // Pastikan lowercase
        description: form.description.trim(),
        permissions: {}, // Kirim objek kosong
      });
      onSuccess(newRole);
    } catch (err: any) {
      // Tangkap pesan error dari backend jika ada
      const errorMessage =
        err.response?.data?.error ||
        err.error ||
        err.message ||
        "Gagal membuat role. Coba lagi.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Buat Role Baru
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Role akan tersedia untuk di-assign ke user
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle size={15} className="text-red-600 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nama Role <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
              placeholder="contoh: reviewer, moderator"
              disabled={isLoading}
              autoFocus
            />
            <p className="text-xs text-gray-400 mt-1">
              Gunakan huruf kecil tanpa spasi
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Deskripsi
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent resize-none"
              placeholder="Jelaskan fungsi role ini..."
              disabled={isLoading}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-[#C1121F] hover:bg-[#9A0E19] text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Membuat...
                </>
              ) : (
                <>
                  <Plus size={15} /> Buat Role
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function UserManagementPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"users" | "roles">("users");

  const [users, setUsers] = useState<UserProfile[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [rolePermissions, setRolePermissions] = useState<
    Record<string, Record<string, string[]>>
  >({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSavingMatrix, setIsSavingMatrix] = useState(false);
  const [showCreateRoleModal, setShowCreateRoleModal] = useState(false);
  const [saveMatrixStatus, setSaveMatrixStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const availablePermissions = {
    users: [
      { id: "create", label: "Create" },
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
      { id: "delete", label: "Delete" },
    ],
    roles: [
      { id: "create", label: "Create" },
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
      { id: "delete", label: "Delete" },
    ],
    articles: [
      { id: "create", label: "Create" },
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
      { id: "delete", label: "Delete" },
      { id: "publish", label: "Publish" },
    ],
    programs: [
      { id: "create", label: "Create" },
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
      { id: "delete", label: "Delete" },
    ],
    events: [
      { id: "create", label: "Create" },
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
      { id: "delete", label: "Delete" },
    ],
    media: [
      { id: "create", label: "Create" },
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
      { id: "delete", label: "Delete" },
    ],
    homeContent: [
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
    ],
    leadContent: [
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
    ],
    pages: [
      { id: "create", label: "Create" },
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
      { id: "delete", label: "Delete" },
    ],
    lecturers: [
      { id: "create", label: "Create" },
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
      { id: "delete", label: "Delete" },
    ],
    categories: [
      { id: "create", label: "Create" },
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
      { id: "delete", label: "Delete" },
    ],
    tags: [
      { id: "create", label: "Create" },
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
      { id: "delete", label: "Delete" },
    ],
    siteSettings: [
      { id: "read", label: "Read" },
      { id: "update", label: "Update" },
    ],
    auditLogs: [{ id: "read", label: "Read" }],
    inquiries: [
      { id: "read", label: "Read" },
      { id: "delete", label: "Delete" },
    ],
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [usersData, rolesData] = await Promise.all([
        getAllUsers(1, 100),
        getAllRoles(),
      ]);
      setUsers(usersData.items || []);
      setRoles(rolesData || []);
      const mappedPerms: Record<string, Record<string, string[]>> = {};
      rolesData.forEach((r) => {
        mappedPerms[r.id] = r.permissions || {};
      });
      setRolePermissions(mappedPerms);
    } catch (error) {
      console.error("Gagal load data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserRoleChange = async (userId: string, newRoleId: string) => {
    try {
      await updateUser(userId, { roleId: newRoleId });
      const updatedRole = roles.find((r) => r.id === newRoleId);
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, roleId: newRoleId, role: updatedRole! } : u,
        ),
      );
    } catch (error) {
      console.error("Gagal ganti role:", error);
      alert("Gagal mengubah role user.");
    }
  };

  const togglePermission = (
    roleId: string,
    resource: string,
    action: string,
  ) => {
    setRolePermissions((prev) => {
      const roleData = prev[roleId] || {};
      const resourceActions = roleData[resource] || [];
      const isExist = resourceActions.includes(action);
      return {
        ...prev,
        [roleId]: {
          ...roleData,
          [resource]: isExist
            ? resourceActions.filter((a) => a !== action)
            : [...resourceActions, action],
        },
      };
    });
  };

  const handleSaveMatrix = async () => {
    setIsSavingMatrix(true);
    setSaveMatrixStatus("idle");
    try {
      await Promise.all(
        roles.map((role) => {
          const rawPerms = rolePermissions[role.id] || {};

          // FILTER: Hanya kirim resource yang value-nya benar-benar Array
          const cleanPerms = Object.fromEntries(
            Object.entries(rawPerms).filter(([_, value]) =>
              Array.isArray(value),
            ),
          );

          return updateRolePermissions(role.id, cleanPerms);
        }),
      );
      setSaveMatrixStatus("success");
      setTimeout(() => setSaveMatrixStatus("idle"), 2500);
    } catch (error) {
      setSaveMatrixStatus("error");
      setTimeout(() => setSaveMatrixStatus("idle"), 2500);
    } finally {
      setIsSavingMatrix(false);
    }
  };

  const handleCreateRoleSuccess = (newRole: Role) => {
    setRoles((prev) => [...prev, newRole]);
    setRolePermissions((prev) => ({ ...prev, [newRole.id]: {} }));
    setShowCreateRoleModal(false);
    setActiveTab("roles");
  };

  const handleActionButton = () => {
    if (activeTab === "users") {
      router.push("/register?returnTo=/users");
    } else {
      setShowCreateRoleModal(true);
    }
  };

  const userColumns: Column<UserProfile>[] = [
    {
      key: "name",
      label: "User",
      sortable: true,
      render: (item) => (
        <div>
          <p className="font-medium text-gray-900">{item.name}</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Mail size={12} />
            {item.email}
          </p>
        </div>
      ),
    },
    {
      key: "role",
      label: "Role",
      render: (item) => (
        <select
          className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded border border-blue-200 focus:ring-1 focus:ring-blue-500 cursor-pointer outline-none"
          value={item.roleId || item.role?.id}
          onChange={(e) => handleUserRoleChange(item.id, e.target.value)}
        >
          {roles.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (item) => (
        <StatusBadge status={item.isActive ? "active" : "inactive"} />
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="p-8 flex items-center gap-2">
        <Loader2 className="animate-spin text-[#C1121F]" /> Loading Data...
      </div>
    );
  }

  return (
    <>
      {showCreateRoleModal && (
        <CreateRoleModal
          onClose={() => setShowCreateRoleModal(false)}
          onSuccess={handleCreateRoleSuccess}
        />
      )}

      <PageHeader
        title="Access Management"
        description="Manage users, roles, and system permissions in one place."
        breadcrumbs={[{ label: "User Management" }]}
        actions={
          <button
            onClick={handleActionButton}
            className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] flex items-center gap-2 transition-colors text-sm"
          >
            <Plus size={18} />
            {activeTab === "users" ? "Tambah User" : "Buat Role"}
          </button>
        }
      />

      <div className="p-8">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-6 py-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "users"
                ? "border-[#C1121F] text-[#C1121F]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Users size={18} /> Users
          </button>
          <button
            onClick={() => setActiveTab("roles")}
            className={`px-6 py-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "roles"
                ? "border-[#C1121F] text-[#C1121F]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Shield size={18} /> Roles & Permissions
          </button>
        </div>

        {activeTab === "users" ? (
          <div className="space-y-8">
            <DataTable columns={userColumns} data={users} selectable />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600 mb-1">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">
                  {users.length}
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600 mb-1">Admins</p>
                <p className="text-2xl font-bold text-blue-600">
                  {
                    users.filter((u) =>
                      u.role?.name?.toLowerCase().includes("admin"),
                    ).length
                  }
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600 mb-1">Author</p>
                <p className="text-2xl font-bold text-green-600">
                  {
                    users.filter((u) =>
                      u.role?.name?.toLowerCase().includes("author"),
                    ).length
                  }
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600 mb-1">Editors</p>
                <p className="text-2xl font-bold text-purple-600">
                  {
                    users.filter((u) =>
                      u.role?.name?.toLowerCase().includes("editor"),
                    ).length
                  }
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-fit">
              <div className="px-6 py-4 border-b bg-gray-50">
                <h3 className="font-semibold">Available Roles</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {roles.length} role terdaftar
                </p>
              </div>
              <div className="divide-y max-h-[500px] overflow-y-auto">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900 capitalize">
                          {role.name}
                        </p>
                        {role.description && (
                          <p className="text-xs text-gray-500 mt-1">
                            {role.description}
                          </p>
                        )}
                      </div>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                        {role._count?.users || 0} users
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 flex flex-col">
              <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
                <div>
                  <h3 className="font-semibold">Permission Matrix</h3>
                  <p className="text-xs text-gray-500">
                    Define what each role can perform
                  </p>
                </div>
                <button
                  onClick={handleSaveMatrix}
                  disabled={isSavingMatrix}
                  className={`flex items-center gap-2 px-3 py-1.5 text-white text-xs rounded transition-colors disabled:opacity-50 ${
                    saveMatrixStatus === "success"
                      ? "bg-green-600"
                      : saveMatrixStatus === "error"
                        ? "bg-red-600"
                        : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {isSavingMatrix ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Saving...
                    </>
                  ) : saveMatrixStatus === "success" ? (
                    <>
                      <CheckCircle size={14} /> Tersimpan
                    </>
                  ) : saveMatrixStatus === "error" ? (
                    <>
                      <AlertCircle size={14} /> Gagal
                    </>
                  ) : (
                    <>
                      <Save size={14} /> Save Matrix
                    </>
                  )}
                </button>
              </div>
              <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white border-b sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider text-[10px] bg-white">
                        Capability
                      </th>
                      {roles.map((r) => (
                        <th
                          key={r.id}
                          className="px-3 py-3 text-center font-medium text-gray-600 uppercase tracking-wider text-[10px] bg-white border-l border-gray-100"
                        >
                          {r.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(availablePermissions).map(
                      ([resource, actions]) => (
                        <React.Fragment key={resource}>
                          <tr className="bg-gray-50/80">
                            <td
                              colSpan={roles.length + 1}
                              className="px-6 py-2 font-bold text-[10px] text-gray-400 uppercase tracking-widest"
                            >
                              {resource.replace(/([A-Z])/g, " $1")}
                            </td>
                          </tr>
                          {actions.map((action) => (
                            <tr
                              key={`${resource}-${action.id}`}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-6 py-3 text-gray-700 text-xs pl-10">
                                {action.label}
                              </td>
                              {roles.map((r) => (
                                <td
                                  key={r.id}
                                  className="px-3 py-3 text-center border-l border-gray-100"
                                >
                                  <input
                                    type="checkbox"
                                    checked={
                                      rolePermissions[r.id]?.[
                                        resource
                                      ]?.includes(action.id) || false
                                    }
                                    onChange={() =>
                                      togglePermission(
                                        r.id,
                                        resource,
                                        action.id,
                                      )
                                    }
                                    className="w-4 h-4 rounded border-gray-300 text-[#C1121F] focus:ring-[#C1121F] cursor-pointer"
                                  />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </React.Fragment>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
