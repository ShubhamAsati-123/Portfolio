"use client";

import { useState, useCallback, useEffect } from "react";
import PortfolioWindow from "@/components/portfolio-window";
import Taskbar from "@/components/taskbar";
import Desktop from "@/components/desktop";
import StartMenu from "@/components/start-menu";
import NotificationCenter from "@/components/notification-center";
import SearchPalette from "@/components/search-palette";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
} from "@/components/ui/context-menu";
import { WINDOW_PRESETS, WindowId } from "@/lib/windows";

interface WindowBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface WindowState extends WindowBounds {
  id: WindowId;
  title: string;
  isMinimized: boolean;
  isActive: boolean;
  isMaximized: boolean;
  previousBounds: WindowBounds | null;
}

const DEFAULT_WINDOW_SIZE = { width: 640, height: 520 };
const MAXIMIZED_MARGIN = { x: 20, y: 20 };

export default function Home() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const hideOverlays = useCallback(() => {
    setShowStartMenu(false);
    setShowNotifications(false);
    setShowSearch(false);
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      const toggleSearchShortcut =
        (event.metaKey || event.ctrlKey) && key === "k" && !event.shiftKey;
      const openSearchShortcut =
        (event.metaKey || event.ctrlKey) && event.shiftKey && key === "p";

      if (toggleSearchShortcut) {
        event.preventDefault();
        setShowStartMenu(false);
        setShowNotifications(false);
        setShowSearch((prev) => !prev);
        return;
      }

      if (openSearchShortcut) {
        event.preventDefault();
        setShowStartMenu(false);
        setShowNotifications(false);
        setShowSearch(true);
        return;
      }

      if (key === "escape") {
        if (showSearch) {
          event.preventDefault();
          setShowSearch(false);
          return;
        }

        if (showStartMenu || showNotifications) {
          event.preventDefault();
          hideOverlays();
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [hideOverlays, showNotifications, showSearch, showStartMenu]);

  const bringToFront = useCallback((id: WindowId) => {
    setWindows((prev) => {
      const targetIndex = prev.findIndex((w) => w.id === id);
      if (targetIndex === -1 || prev[targetIndex].isMinimized) {
        return prev;
      }

      const updated = prev.map((w, index) => ({
        ...w,
        isActive: index === targetIndex,
      }));

      const targetWindow = { ...updated[targetIndex], isActive: true };
      const remaining = updated.filter((_, index) => index !== targetIndex);
      return [...remaining, targetWindow];
    });
  }, []);

  const toggleWindow = useCallback((id: WindowId) => {
    setWindows((prev) => {
      const targetIndex = prev.findIndex((w) => w.id === id);
      if (targetIndex === -1) {
        return prev;
      }

      const target = prev[targetIndex];

      if (target.isMinimized) {
        const restored = prev.map((w) =>
          w.id === id
            ? { ...w, isMinimized: false, isActive: true }
            : { ...w, isActive: false }
        );
        const restoredWindow = restored[targetIndex];
        const others = restored.filter((_, index) => index !== targetIndex);
        return [...others, restoredWindow];
      }

      if (!target.isActive) {
        const reactivated = prev.map((w) => ({
          ...w,
          isActive: w.id === id,
        }));
        const activeWindow = reactivated[targetIndex];
        const others = reactivated.filter((_, index) => index !== targetIndex);
        return [...others, activeWindow];
      }

      return prev.map((w) =>
        w.id === id ? { ...w, isMinimized: true, isActive: false } : w
      );
    });
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    setWindows((prev) => {
      const existingIndex = prev.findIndex((w) => w.id === id);

      if (existingIndex !== -1) {
        const reopened = prev.map((w) =>
          w.id === id
            ? { ...w, isMinimized: false, isActive: true }
            : { ...w, isActive: false }
        );
        const activeWindow = reopened[existingIndex];
        const others = reopened.filter((_, index) => index !== existingIndex);
        return [...others, activeWindow];
      }

      const preset = WINDOW_PRESETS[id];
      const offset = prev.length * 28;
      const { title, initialPosition } = preset;

      const demoted = prev.map((w) => ({ ...w, isActive: false }));

      const newWindow: WindowState = {
        id,
        title,
        isMinimized: false,
        isActive: true,
        isMaximized: false,
        width: DEFAULT_WINDOW_SIZE.width,
        height: DEFAULT_WINDOW_SIZE.height,
        previousBounds: null,
        x: initialPosition.x + offset,
        y: initialPosition.y + offset,
      };

      return [...demoted, newWindow];
    });
  }, []);

  const updateWindowPosition = useCallback(
    (id: WindowId, x: number, y: number) => {
      setWindows((prev) =>
        prev.map((w) => (w.id === id && !w.isMaximized ? { ...w, x, y } : w))
      );
    },
    []
  );

  const toggleMaximize = useCallback((id: WindowId) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id !== id) {
          return { ...w, isActive: false };
        }

        if (w.isMinimized) {
          return { ...w, isMinimized: false, isActive: true };
        }

        if (w.isMaximized) {
          const bounds = w.previousBounds ?? {
            x: w.x,
            y: w.y,
            width: DEFAULT_WINDOW_SIZE.width,
            height: DEFAULT_WINDOW_SIZE.height,
          };

          return {
            ...w,
            ...bounds,
            isActive: true,
            isMinimized: false,
            isMaximized: false,
            previousBounds: null,
          };
        }

        if (typeof window === "undefined") {
          return {
            ...w,
            isActive: true,
            isMinimized: false,
            isMaximized: true,
            previousBounds: {
              x: w.x,
              y: w.y,
              width: w.width,
              height: w.height,
            },
          };
        }

        const viewportWidth = Math.max(
          window.innerWidth - MAXIMIZED_MARGIN.x * 2,
          DEFAULT_WINDOW_SIZE.width
        );
        const viewportHeight = Math.max(
          window.innerHeight - (MAXIMIZED_MARGIN.y * 2 + 64),
          DEFAULT_WINDOW_SIZE.height
        );

        return {
          ...w,
          x: MAXIMIZED_MARGIN.x,
          y: MAXIMIZED_MARGIN.y,
          width: viewportWidth,
          height: viewportHeight,
          isActive: true,
          isMinimized: false,
          isMaximized: true,
          previousBounds: {
            x: w.x,
            y: w.y,
            width: w.width,
            height: w.height,
          },
        };
      })
    );
  }, []);

  const handleWindowAction = useCallback(
    (
      id: WindowId,
      action:
        | "activate"
        | "toggle"
        | "minimize"
        | "maximize"
        | "restore"
        | "close"
    ) => {
      switch (action) {
        case "activate":
          bringToFront(id);
          setWindows((prev) =>
            prev.map((w) => (w.id === id ? { ...w, isMinimized: false } : w))
          );
          break;
        case "toggle":
          toggleWindow(id);
          break;
        case "minimize":
          setWindows((prev) =>
            prev.map((w) =>
              w.id === id ? { ...w, isMinimized: true, isActive: false } : w
            )
          );
          break;
        case "maximize":
          toggleMaximize(id);
          break;
        case "restore":
          setWindows((prev) =>
            prev.map((w) => {
              if (w.id !== id) return w;

              if (w.isMaximized) {
                const bounds = w.previousBounds ?? {
                  x: w.x,
                  y: w.y,
                  width: DEFAULT_WINDOW_SIZE.width,
                  height: DEFAULT_WINDOW_SIZE.height,
                };

                return {
                  ...w,
                  ...bounds,
                  isActive: true,
                  isMinimized: false,
                  isMaximized: false,
                  previousBounds: null,
                };
              }

              return { ...w, isMinimized: false, isActive: true };
            })
          );
          break;
        case "close":
          closeWindow(id);
          break;
        default:
          break;
      }
    },
    [bringToFront, toggleWindow, toggleMaximize, closeWindow]
  );

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="relative min-h-screen flex flex-col overflow-hidden bg-slate-950 text-slate-50 bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-linear-to-br from-slate-950/70 via-slate-900/40 to-slate-950/75 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_55%)] pointer-events-none" />

          {showStartMenu && (
            <div
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40"
              onClick={(event) => {
                event.stopPropagation();
                setShowStartMenu(false);
              }}
            >
              <StartMenu
                onClose={() => setShowStartMenu(false)}
                onOpenWindow={(windowId: WindowId) => {
                  openWindow(windowId);
                  setShowStartMenu(false);
                }}
              />
            </div>
          )}

          {showNotifications && (
            <NotificationCenter onClose={() => setShowNotifications(false)} />
          )}

          <SearchPalette
            open={showSearch}
            onOpenChange={(open) => {
              setShowSearch(open);
              if (!open) {
                setShowStartMenu(false);
                setShowNotifications(false);
              }
            }}
            onOpenWindow={(windowId: WindowId) => {
              openWindow(windowId);
              setShowSearch(false);
              setShowStartMenu(false);
              setShowNotifications(false);
            }}
            onShowStart={() => {
              setShowSearch(false);
              setShowNotifications(false);
              setShowStartMenu(true);
            }}
            onShowNotifications={() => {
              setShowSearch(false);
              setShowStartMenu(false);
              setShowNotifications(true);
            }}
            onShowDesktop={() => {
              setWindows((prev) =>
                prev.map((w) => ({ ...w, isMinimized: true, isActive: false }))
              );
              setShowSearch(false);
              setShowStartMenu(false);
              setShowNotifications(false);
            }}
          />

          <div
            className="relative flex-1 flex"
            onMouseDownCapture={hideOverlays}
          >
            <Desktop
              onOpenWindow={(windowId: WindowId) => {
                hideOverlays();
                openWindow(windowId);
              }}
            />

            <div className="flex-1 relative">
              {windows.map((win, index) => (
                <PortfolioWindow
                  key={win.id}
                  id={win.id}
                  title={win.title}
                  isMinimized={win.isMinimized}
                  isActive={win.isActive}
                  isMaximized={win.isMaximized}
                  width={win.width}
                  height={win.height}
                  x={win.x}
                  y={win.y}
                  zIndex={30 + index}
                  onToggleMinimize={() => toggleWindow(win.id)}
                  onToggleMaximize={() => toggleMaximize(win.id)}
                  onClose={() => closeWindow(win.id)}
                  onBringToFront={() => bringToFront(win.id)}
                  onUpdatePosition={updateWindowPosition}
                />
              ))}
            </div>
          </div>

          <Taskbar
            windows={windows}
            onWindowClick={(id: WindowId) => {
              hideOverlays();
              toggleWindow(id);
            }}
            onWindowAction={handleWindowAction}
            onStartClick={(event) => {
              event.stopPropagation();
              setShowStartMenu((prev) => !prev);
              setShowNotifications(false);
            }}
            onNotificationClick={(event) => {
              if (event) {
                event.stopPropagation();
              }
              setShowNotifications((prev) => !prev);
              setShowStartMenu(false);
            }}
            onShowDesktop={() => {
              setWindows((prev) =>
                prev.map((w) => ({ ...w, isMinimized: true, isActive: false }))
              );
              hideOverlays();
            }}
            onSearchClick={() => {
              setShowStartMenu(false);
              setShowNotifications(false);
              setShowSearch(true);
            }}
          />
        </div>
      </ContextMenuTrigger>

      <ContextMenuContent className="min-w-48">
        <ContextMenuLabel>Desktop</ContextMenuLabel>
        <ContextMenuItem
          onSelect={() => {
            setShowNotifications(false);
            setShowStartMenu(true);
          }}
        >
          Open Start
        </ContextMenuItem>
        <ContextMenuItem
          onSelect={() => {
            setShowStartMenu(false);
            setShowNotifications(true);
          }}
        >
          Show Notifications
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem
          onSelect={() =>
            setWindows((prev) =>
              prev.map((w) => ({ ...w, isMinimized: false, isActive: false }))
            )
          }
        >
          Restore All Windows
        </ContextMenuItem>
        <ContextMenuItem
          onSelect={() =>
            setWindows((prev) =>
              prev.map((w) => ({ ...w, isMinimized: true, isActive: false }))
            )
          }
        >
          Minimize All
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
