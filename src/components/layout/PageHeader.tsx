import { PageHeaderProps } from "@/types/ui";

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="fixed top-45 left-6 z-40 w-48"> 
      <div className="bg-gradient-to-r from-beige to-orange-50 rounded-sm p-3 shadow-sm">
        <h2 className="text-base font-semibold text-green-800 mb-1">
          {title}
        </h2>
        <p className="text-xs text-green-900 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}