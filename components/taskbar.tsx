"use client";

import {
  Volume2,
  Wifi,
  Clock,
  Search,
  Settings,
  Bell,
  ChevronUp,
} from "lucide-react";
import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import type { WindowId } from "@/lib/windows";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
} from "@/components/ui/context-menu";

interface TaskbarProps {
  windows: Array<{
    id: WindowId;
    title: string;
    isMinimized: boolean;
    isActive: boolean;
    isMaximized: boolean;
  }>;
  onWindowClick: (id: WindowId) => void;
  onWindowAction: (
    id: WindowId,
    action:
      | "activate"
      | "toggle"
      | "minimize"
      | "maximize"
      | "restore"
      | "close"
  ) => void;
  onStartClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onNotificationClick: (event?: MouseEvent<HTMLButtonElement>) => void;
  onShowDesktop: () => void;
  onSearchClick: () => void;
}

export default function Taskbar({
  windows,
  onWindowClick,
  onWindowAction,
  onStartClick,
  onNotificationClick,
  onShowDesktop,
  onSearchClick,
}: TaskbarProps) {
  const [time, setTime] = useState<string>("10:30 AM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const openWindows = windows;

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="fixed bottom-0 left-0 right-0 h-14 bg-linear-to-r from-white/75 via-white/90 to-white/80 backdrop-blur-2xl border-t border-white/20 flex items-center justify-between px-4 text-xs shadow-[0_-18px_40px_rgba(15,23,42,0.28)] z-40">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <button
              onClick={onStartClick}
              className="w-11 h-11 rounded-xl bg-linear-to-br from-win11-blue to-win11-blue-hover/90 hover:from-win11-blue-hover hover:to-win11-blue transition-all flex items-center justify-center text-white font-semibold text-lg shadow-md hover:shadow-lg active:shadow-inner transform hover:scale-105 active:scale-95 shrink-0"
              title="Start"
            >
              ⊞
            </button>

            <button
              onClick={onSearchClick}
              className="w-10 h-10 rounded-lg hover:bg-slate-200/50 active:bg-slate-300/50 transition-all flex items-center justify-center text-slate-500 hover:text-slate-800 transform hover:scale-105 active:scale-95"
              title="Search"
            >
              <Search size={18} />
            </button>

            <div className="w-px h-8 bg-white/30 mx-2" />

            <div className="flex gap-1 overflow-x-auto max-w-md scrollbar-hide pr-1">
              {windows.map((win) => (
                <ContextMenu key={win.id}>
                  <ContextMenuTrigger asChild>
                    <button
                      onClick={() => onWindowClick(win.id)}
                      className={`group relative px-3 py-2 rounded-xl bg-white/65 hover:bg-white/90 text-slate-700 text-xs font-medium transition-all border border-white/30 hover:border-win11-blue/40 transform hover:-translate-y-0.5 hover:shadow-md active:shadow-inner active:scale-95 shrink-0 min-w-28 flex items-center gap-2 ${
                        win.isActive
                          ? "ring-2 ring-win11-blue/70 bg-white text-win11-blue font-semibold"
                          : win.isMinimized
                            ? "opacity-70"
                            : ""
                      }`}
                      title={win.title}
                      data-active={win.isActive}
                      data-minimized={win.isMinimized}
                    >
                      <span
                        className={`h-2 w-2 rounded-full transition-colors ${
                          win.isActive
                            ? "bg-win11-blue"
                            : win.isMinimized
                              ? "bg-slate-400"
                              : "bg-slate-500/60"
                        }`}
                      />
                      <span className="truncate flex-1 text-left">
                        {win.title}
                      </span>
                    </button>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="min-w-44">
                    <ContextMenuLabel>{win.title}</ContextMenuLabel>
                    <ContextMenuItem
                      onSelect={() => onWindowAction(win.id, "activate")}
                    >
                      Bring to Front
                    </ContextMenuItem>
                    {win.isMinimized ? (
                      <ContextMenuItem
                        onSelect={() => onWindowAction(win.id, "restore")}
                      >
                        Restore
                      </ContextMenuItem>
                    ) : (
                      <ContextMenuItem
                        onSelect={() => onWindowAction(win.id, "minimize")}
                      >
                        Minimize
                      </ContextMenuItem>
                    )}
                    <ContextMenuItem
                      onSelect={() => onWindowAction(win.id, "maximize")}
                    >
                      {win.isMaximized ? "Restore Size" : "Maximize"}
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem
                      variant="destructive"
                      onSelect={() => onWindowAction(win.id, "close")}
                    >
                      Close
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={(event) => onNotificationClick(event)}
              className="w-9 h-9 rounded-lg hover:bg-slate-200/60 active:bg-slate-300/60 transition-all flex items-center justify-center text-slate-500 hover:text-slate-800 transform hover:scale-110 active:scale-95"
              title="Notifications"
            >
              <Bell size={16} />
            </button>
            <button
              className="w-9 h-9 rounded-lg hover:bg-slate-200/60 active:bg-slate-300/60 transition-all flex items-center justify-center text-slate-500 hover:text-slate-800 transform hover:scale-110 active:scale-95"
              title="Connections"
            >
              <Wifi size={16} />
            </button>
            <button
              className="w-9 h-9 rounded-lg hover:bg-slate-200/60 active:bg-slate-300/60 transition-all flex items-center justify-center text-slate-500 hover:text-slate-800 transform hover:scale-110 active:scale-95"
              title="Volume"
            >
              <Volume2 size={16} />
            </button>
            <button
              className="w-9 h-9 rounded-lg hover:bg-slate-200/60 active:bg-slate-300/60 transition-all flex items-center justify-center text-slate-500 hover:text-slate-800 transform hover:scale-110 active:scale-95"
              title="Hidden icons"
            >
              <ChevronUp size={16} />
            </button>
            <button
              className="w-9 h-9 rounded-lg hover:bg-slate-200/60 active:bg-slate-300/60 transition-all flex items-center justify-center text-slate-500 hover:text-slate-800 transform hover:scale-110 active:scale-95"
              title="Settings"
            >
              <Settings size={16} />
            </button>
            <button
              onClick={onShowDesktop}
              className="w-10 h-10 rounded-lg hover:bg-slate-200/60 active:bg-slate-300/60 transition-all flex items-center justify-center text-slate-500 hover:text-slate-800 transform hover:scale-105 active:scale-95"
              title="Show desktop"
            >
              <span className="block h-5 w-1.5 rounded-full bg-slate-400" />
            </button>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-200/60 active:bg-slate-300/60 transition-all cursor-default text-slate-600 hover:text-slate-800">
              <Clock size={14} />
              <span className="font-medium text-xs font-mono tracking-tight">
                {time}
              </span>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>

      <ContextMenuContent className="min-w-44">
        <ContextMenuLabel>Taskbar</ContextMenuLabel>
        <ContextMenuItem onSelect={onShowDesktop}>Show Desktop</ContextMenuItem>
        {windows.length > 0 && (
          <ContextMenuItem
            onSelect={() =>
              onWindowAction(windows[windows.length - 1].id, "activate")
            }
          >
            Focus Last Window
          </ContextMenuItem>
        )}
        <ContextMenuSeparator />
        <ContextMenuItem onSelect={() => onNotificationClick()}>
          Open Notifications
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
