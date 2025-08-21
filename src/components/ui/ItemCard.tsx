"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ItemCardProps } from "@/types/ui";

function ItemCard({
  id,
  title,
  subtitle,
  additionalInfo = [],
  description,
  detailsRoute,
  badge,
  gridSize = 5,
  animationStepDuration = 0.2,
  className = "",
  style = {},
  aspectRatio = "100%",
  onEdit,
}: ItemCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pixelGridRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  // Green palette colors for random pixels
  const greenColors = [
    "var(--color-green-300)",
    "var(--color-green-400)",
    "var(--color-green-500)",
    "var(--color-green-600)",
    "var(--color-green-700)",
    "var(--color-green-800)",
  ];

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches);

  // Truncate description if too long
  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixelated-image-card__pixel");
        pixel.classList.add("absolute", "hidden");

        // Random green color for each pixel
        const randomColor =
          greenColors[Math.floor(Math.random() * greenColors.length)];
        pixel.style.backgroundColor = randomColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize]);

  const animatePixels = (activate: boolean) => {
    setIsActive(activate);
    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll(".pixelated-image-card__pixel");
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: "none" });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: "block",
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });

   delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
  if (activeEl) {
    activeEl.style.display = activate ? "block" : "none";
    activeEl.style.pointerEvents = activate ? "auto" : "none"; 
  }
});

    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });
  };

  const handleMouseEnter = () => {
    if (!isActive) animatePixels(true);
  };

  const handleMouseLeave = () => {
    if (isActive) animatePixels(false);
  };

  const handleClick = () => {
    if (isTouchDevice) {
      animatePixels(!isActive);
    }
  };

  const handleViewDetails = () => {
    router.push(detailsRoute);
  };

  // First content (default view)
  const firstContent = (
    <div className="p-6 h-full flex flex-col justify-between">
      <div>
        {badge && (
          <div className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-sm mb-4">
            {badge}
          </div>
        )}
        <h3 className="text-xl font-semibold text-white mb-2 truncate">
          {title}
        </h3>

        {subtitle && <p className="text-green-200 text-sm mb-2">{subtitle}</p>}

        {/* Additional info (1-3 items) */}
        {additionalInfo.length > 0 && (
          <div className="space-y-1">
            {additionalInfo.slice(0, 3).map((info, index) => (
              <p key={index} className="text-green-300 text-xs">
                {info}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Second content (hover/active view)
  const secondContent = (
    <div className="p-6 h-full flex flex-col justify-between bg-green-900/95">
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-green-100 text-sm leading-relaxed mb-4">
          {truncateDescription(description)}
        </p>
      </div>

      <div className="space-y-2">
        <button
          onClick={handleViewDetails}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          Ver detalles
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {onEdit && (
          <button
            onClick={() => onEdit(id || "")} // Use ID if available, fallback to title
            className="w-full bg-beige hover:bg-green-100 text-green-900 font-medium py-2 px-4 rounded-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            Editar
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`
        ${className}
        bg-gradient-to-br from-green-800 to-green-900
        text-white
        rounded-sm
        border-2
        border-green-600/30
        w-[300px]
        max-w-full
        relative
        overflow-hidden
        cursor-pointer
        transition-transform
        hover:scale-105
      `}
      style={style}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={handleClick}
    >
      <div style={{ paddingTop: aspectRatio }} />

      {/* Default content */}
      <div className="absolute inset-0 w-full h-full">{firstContent}</div>

      {/* Hover/Active content */}
      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ display: "none" }}
      >
        {secondContent}
      </div>

      {/* Pixel animation grid */}
      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      />
    </div>
  );
}

export default ItemCard;
