import { Breadcrumb } from './Breadcrumb';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export function PageHeader({ title, description, breadcrumbs, actions }: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <Breadcrumb items={breadcrumbs} />
      
      <div className="flex items-start justify-between mt-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="text-gray-600 mt-2">{description}</p>
          )}
        </div>
        
        {actions && (
          <div className="flex items-center gap-3">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
