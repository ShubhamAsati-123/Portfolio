"use client";

import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import type { WindowId } from "@/lib/windows";
import {
  FileText,
  Briefcase,
  Code,
  Zap,
  Mail,
  GridIcon,
  BellRing,
  MonitorSmartphone,
} from "lucide-react";
import { memo, useEffect, useMemo } from "react";

interface SearchPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenWindow: (id: WindowId) => void;
  onShowStart: () => void;
  onShowNotifications: () => void;
  onShowDesktop: () => void;
}

const windowItems: Array<{
  id: WindowId;
  label: string;
  description: string;
  icon: typeof FileText;
}> = [
  {
    id: "about",
    label: "About Me",
    description: "Read my personal story and mission.",
    icon: FileText,
  },
  {
    id: "experience",
    label: "Experience",
    description: "See my professional timeline and roles.",
    icon: Briefcase,
  },
  {
    id: "projects",
    label: "Projects",
    description: "Browse featured projects and case studies.",
    icon: Code,
  },
  {
    id: "skills",
    label: "Skills",
    description: "Explore my technical expertise and tools.",
    icon: Zap,
  },
  {
    id: "contact",
    label: "Contact",
    description: "Reach out via email or social platforms.",
    icon: Mail,
  },
];

const quickActions = [
  {
    label: "Open Start Menu",
    description: "Access shortcuts and social links.",
    icon: GridIcon,
    action: "start" as const,
    shortcut: "Ctrl + Shift + S",
  },
  {
    label: "Show Notifications",
    description: "Review recent tips and updates.",
    icon: BellRing,
    action: "notifications" as const,
    shortcut: "Ctrl + Shift + N",
  },
  {
    label: "Show Desktop",
    description: "Minimize all windows instantly.",
    icon: MonitorSmartphone,
    action: "desktop" as const,
    shortcut: "Ctrl + Shift + D",
  },
];

function SearchPaletteComponent({
  open,
  onOpenChange,
  onOpenWindow,
  onShowStart,
  onShowNotifications,
  onShowDesktop,
}: SearchPaletteProps) {
  const memoizedWindowItems = useMemo(() => windowItems, []);
  const memoizedQuickActions = useMemo(() => quickActions, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePaletteShortcuts = (event: KeyboardEvent) => {
      const key = event.key;
      const lowerKey = key.toLowerCase();
      const modifierPressed = event.metaKey || event.ctrlKey;

      if (!modifierPressed) {
        return;
      }

      if (!event.shiftKey && /^[1-9]$/.test(key)) {
        const index = Number(key) - 1;
        const targetWindow = memoizedWindowItems[index];
        if (targetWindow) {
          event.preventDefault();
          onOpenWindow(targetWindow.id);
          onOpenChange(false);
        }
        return;
      }

      if (event.shiftKey) {
        switch (lowerKey) {
          case "s":
            event.preventDefault();
            onOpenChange(false);
            onShowStart();
            return;
          case "n":
            event.preventDefault();
            onOpenChange(false);
            onShowNotifications();
            return;
          case "d":
            event.preventDefault();
            onOpenChange(false);
            onShowDesktop();
            return;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handlePaletteShortcuts);
    return () => window.removeEventListener("keydown", handlePaletteShortcuts);
  }, [
    memoizedWindowItems,
    onOpenChange,
    onOpenWindow,
    onShowDesktop,
    onShowNotifications,
    onShowStart,
    open,
  ]);

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search"
      description="Search portfolio sections and quick actions"
      className="sm:max-w-[520px]"
      showCloseButton={false}
    >
      <CommandInput
        placeholder="Search portfolio, actions, or shortcuts"
        autoFocus
      />
      <CommandList>
        <CommandEmpty>No matches. Try another keyword.</CommandEmpty>

        <CommandGroup heading="Sections">
          {memoizedWindowItems.map(
            ({ id, label, description, icon: Icon }, index) => (
              <CommandItem
                key={id}
                value={`${label} ${description}`}
                onSelect={() => {
                  onOpenWindow(id);
                  onOpenChange(false);
                }}
              >
                <Icon className="size-4 text-win11-blue" />
                <div className="flex flex-col text-left">
                  <span className="font-medium text-sm text-slate-800">
                    {label}
                  </span>
                  <span className="text-xs text-slate-500">{description}</span>
                </div>
                <CommandShortcut>Ctrl or Cmd + {index + 1}</CommandShortcut>
              </CommandItem>
            )
          )}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Quick actions">
          {memoizedQuickActions.map(
            ({ label, description, icon: ActionIcon, action, shortcut }) => (
              <CommandItem
                key={action}
                value={`${label} ${description}`}
                onSelect={() => {
                  switch (action) {
                    case "start":
                      onOpenChange(false);
                      onShowStart();
                      break;
                    case "notifications":
                      onOpenChange(false);
                      onShowNotifications();
                      break;
                    case "desktop":
                      onOpenChange(false);
                      onShowDesktop();
                      break;
                    default:
                      break;
                  }
                }}
              >
                <ActionIcon className="size-4 text-slate-600" />
                <div className="flex flex-col text-left">
                  <span className="font-medium text-sm text-slate-800">
                    {label}
                  </span>
                  <span className="text-xs text-slate-500">{description}</span>
                </div>
                <CommandShortcut>{shortcut}</CommandShortcut>
              </CommandItem>
            )
          )}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

const SearchPalette = memo(SearchPaletteComponent);

export default SearchPalette;
