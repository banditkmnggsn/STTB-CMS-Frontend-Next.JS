type StatusType = 'draft' | 'in-review' | 'approved' | 'published' | 'scheduled' | 'rejected' | 'active' | 'inactive';

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
}

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  draft: { label: 'Draft', className: 'bg-gray-100 text-gray-700 border-gray-300' },
  'in-review': { label: 'In Review', className: 'bg-yellow-100 text-yellow-700 border-yellow-300' },
  approved: { label: 'Approved', className: 'bg-blue-100 text-blue-700 border-blue-300' },
  published: { label: 'Published', className: 'bg-green-100 text-green-700 border-green-300' },
  scheduled: { label: 'Scheduled', className: 'bg-purple-100 text-purple-700 border-purple-300' },
  rejected: { label: 'Rejected', className: 'bg-red-100 text-red-700 border-red-300' },
  active: { label: 'Active', className: 'bg-green-100 text-green-700 border-green-300' },
  inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-700 border-gray-300' },
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const config = statusConfig[status];
  const displayLabel = label || config.label;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
      {displayLabel}
    </span>
  );
}
