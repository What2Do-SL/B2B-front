import { PageHeaderProps } from "@/types/ui";

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="fixed top-22 2xl:top-45 left-6 z-40 w-52 xl:w-48"> 
      <div className="bg-beige rounded-sm py-1.5 px-2 xl:py-3 xl:px-3 shadow-sm">
        <h2 className="text-sm xl:text-base font-semibold text-green-800 mb-0.5 xl:mb-1">
          {title}
        </h2>
        <p className="text-xs text-green-900 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

//bg-gradient-to-r from-beige to-orange-50