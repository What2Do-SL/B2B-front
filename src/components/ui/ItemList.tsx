import { useRouter } from "next/navigation";
import { ItemListProps, ListColumn } from "@/types/ui";

export default function ItemList({
  items,
  columns,
  onView,
  onEdit,
  onCreateNew,
  createIcon,
  createLabel,
  className = "",
}: ItemListProps) {
  const router = useRouter();

  const handleView = (item: any) => {
    if (onView) {
      onView(item.id);
    }
  };

  const handleEdit = (item: any) => {
    if (onEdit) {
      onEdit(item.id);
    }
  };

  return (
    <div
      className={`bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="bg-green-600 px-6 py-4 border-b border-gray-200">
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `${columns.map(() => "1fr").join(" ")} auto`,
          }}
        >
          {columns.map((column) => (
            <div key={column.key} className="text-sm font-medium text-beige">
              {column.label}
            </div>
          ))}
          <div className="text-sm font-medium text-beige">Acciones</div>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <div key={item.id || index} className="px-6 py-4 transition-colors">
            <div
              className="grid gap-4 items-center"
              style={{
                gridTemplateColumns: `${columns
                  .map(() => "1fr")
                  .join(" ")} auto`,
              }}
            >
              {columns.map((column) => (
                <div key={column.key} className="text-sm">
                  {column.primary ? (
                    <div className="font-medium text-gray-900">
                      {column.render
                        ? column.render(item[column.key], item)
                        : item[column.key]}
                    </div>
                  ) : (
                    <div className="text-gray-600">
                      {column.render
                        ? column.render(item[column.key], item)
                        : item[column.key]}
                    </div>
                  )}
                </div>
              ))}

              {/* Actions */}
              <div className="flex gap-2">
                {onView && (
                  <button
                    onClick={() => handleView(item)}
                    className="px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-sm hover:bg-green-100 transition-colors cursor-pointer"
                  >
                    Ver detalles
                  </button>
                )}
                {onEdit && (
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1.5 text-xs font-medium text-green-900 bg-beige border border-beige rounded-sm hover:bg-green-100 transition-colors cursor-pointer"
                  >
                    Editar
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Create New Row */}
        <div
          onClick={onCreateNew}
          className="px-6 py-4 bg-green-50 border-t-2 border-dashed border-green-200 transition-colors hover:bg-green-100 cursor-pointer"
        >
          <div className="text-sm font-medium text-green-700 flex items-center justify-end">
            <span className="text-green-600 font-bold text-lg mr-2">{createIcon}</span>
            {createLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
