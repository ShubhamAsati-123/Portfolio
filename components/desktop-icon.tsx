"use client";

import { ReactNode } from "react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
} from "@/components/ui/context-menu";

interface DesktopIconProps {
  label: string;
  icon: ReactNode;
  onOpen: () => void;
  onPin?: () => void;
  onInspect?: () => void;
}

export default function DesktopIcon({
  label,
  icon,
  onOpen,
  onPin,
  onInspect,
}: DesktopIconProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <button
          onDoubleClick={onOpen}
          onClick={onOpen}
          className="flex flex-col items-center gap-2 cursor-pointer group w-24 text-center rounded-xl p-3 hover:bg-white/20 hover:backdrop-blur transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          <div className="group-hover:scale-110 transition-transform duration-200">
            {icon}
          </div>
          <span className="text-xs text-white drop-shadow-md text-center wrap-break-word font-medium leading-tight">
            {label}
          </span>
        </button>
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-44">
        <ContextMenuLabel>{label}</ContextMenuLabel>
        <ContextMenuItem onSelect={onOpen}>Open</ContextMenuItem>
        {onPin && (
          <ContextMenuItem onSelect={onPin}>Pin to Taskbar</ContextMenuItem>
        )}
        <ContextMenuSeparator />
        <ContextMenuItem onSelect={onInspect ?? (() => undefined)}>
          Properties
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
