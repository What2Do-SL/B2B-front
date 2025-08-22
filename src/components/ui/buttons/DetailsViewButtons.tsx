interface DetailsViewButtonsProps {
  labelLeft: string;
  onClickLeft: () => void;
  labelRight: string;
  onClickRight: () => void;
  leftYPadding?: string;
  leftTextSize?: string;
}

export default function DetailsViewButtons({
  labelLeft,
  onClickLeft,
  labelRight,
  onClickRight,
  leftYPadding = "py-3",
  leftTextSize,
}: DetailsViewButtonsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onClickLeft}
        className={`w-full flex items-center justify-center gap-2 px-6 ${leftYPadding} ${leftTextSize} bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors cursor-pointer`}
      >
        {labelLeft}
      </button>
      <button
        onClick={onClickRight}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-beige text-green-900 rounded-sm hover:bg-green-200 transition-colors cursor-pointer"
      >
        {labelRight}
      </button>
    </div>
  );
}
