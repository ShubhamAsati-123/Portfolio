"use client";

import { useState, useRef, useEffect } from "react";
import { X, Minus, Maximize2, Minimize2 } from "lucide-react";
import AboutContent from "./windows/about-content";
import ProjectsContent from "./windows/projects/projects-content";
import ExperienceContent from "./windows/experience/experience-content";
import SkillsContent from "./windows/skills-content";
import ContactContent from "./windows/contact-content";
import type { WindowId } from "@/lib/windows";

interface PortfolioWindowProps {
  id: WindowId;
  title: string;
  isMinimized: boolean;
  isActive: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  onToggleMinimize: () => void;
  onToggleMaximize: () => void;
  onClose: () => void;
  onBringToFront: () => void;
  onUpdatePosition: (id: WindowId, x: number, y: number) => void;
}

const getWindowContent = (id: WindowId) => {
  switch (id) {
    case "about":
      return <AboutContent />;
    case "projects":
      return <ProjectsContent />;
    case "experience":
      return <ExperienceContent />;
    case "skills":
      return <SkillsContent />;
    case "contact":
      return <ContactContent />;
    default:
      return <div>Content</div>;
  }
};

export default function PortfolioWindow({
  id,
  title,
  isMinimized,
  isActive,
  isMaximized,
  x,
  y,
  width,
  height,
  zIndex,
  onToggleMinimize,
  onToggleMaximize,
  onClose,
  onBringToFront,
  onUpdatePosition,
}: PortfolioWindowProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!windowRef.current) return;
    windowRef.current.style.left = `${x}px`;
    windowRef.current.style.top = `${y}px`;
    windowRef.current.style.zIndex = String(zIndex);
    windowRef.current.style.width = `${width}px`;
    windowRef.current.style.height = `${height}px`;
  }, [x, y, zIndex, width, height]);

  if (isMinimized) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    onBringToFront();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - x,
      y: e.clientY - y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isMaximized) return;
    const newX = Math.max(0, e.clientX - dragOffset.x);
    const newY = Math.max(0, e.clientY - dragOffset.y);
    onUpdatePosition(id, newX, newY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={windowRef}
      className={`fixed rounded-3xl border ${
        isActive
          ? "border-white/60 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.85)] ring-2 ring-win11-blue/70"
          : "border-white/20 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.75)]"
      } bg-white/90 backdrop-blur-2xl transition-all duration-300 ease-out pointer-events-auto overflow-hidden data-[maximized=true]:rounded-[28px]`}
      data-maximized={isMaximized}
      onMouseDown={(event) => {
        event.stopPropagation();
        onBringToFront();
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className={`bg-linear-to-r from-win11-blue to-win11-blue-hover/90 h-14 flex items-center justify-between px-4 select-none rounded-t-3xl gap-3 shadow-lg ${isMaximized ? "cursor-default" : "cursor-move"}`}
        onMouseDown={handleMouseDown}
        onDoubleClick={() => onToggleMaximize()}
      >
        <span className="text-white text-sm font-semibold flex-1 truncate tracking-wide">
          {title}
        </span>
        <div className="flex gap-1 cursor-default">
          <button
            className="w-9 h-9 rounded-md hover:bg-white/20 flex items-center justify-center transition-colors duration-150 active:bg-white/30"
            onClick={(event) => {
              event.stopPropagation();
              onToggleMinimize();
            }}
            aria-label="Minimize window"
            title="Minimize"
          >
            <Minus size={16} className="text-white" />
          </button>
          <button
            className="w-9 h-9 rounded-md hover:bg-white/20 flex items-center justify-center transition-colors duration-150 active:bg-white/30"
            onClick={(event) => {
              event.stopPropagation();
              onToggleMaximize();
            }}
            aria-label={isMaximized ? "Restore window" : "Maximize window"}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? (
              <Minimize2 size={15} className="text-white" />
            ) : (
              <Maximize2 size={15} className="text-white" />
            )}
          </button>
          <button
            className="w-9 h-9 rounded-md hover:bg-red-500/80 hover:bg-opacity-100 flex items-center justify-center transition-colors duration-150 active:bg-red-600"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label="Close window"
            title="Close"
          >
            <X size={16} className="text-white" />
          </button>
        </div>
      </div>

      <div className="p-6 h-[calc(100%-56px)] overflow-y-auto bg-linear-to-br from-white/95 via-white/90 to-white/85 text-slate-700 text-sm leading-relaxed font-sans scrollbar-thin scrollbar-thumb-slate-300/80 scrollbar-track-transparent">
        {getWindowContent(id)}
      </div>
    </div>
  );
}
