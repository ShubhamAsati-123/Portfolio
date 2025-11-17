"use client";

import DesktopIcon from "./desktop-icon";
import { FileText, Briefcase, Code, Zap, Mail } from "lucide-react";
import type { WindowId } from "@/lib/windows";

interface DesktopProps {
  onOpenWindow: (id: WindowId) => void;
}

export default function Desktop({ onOpenWindow }: DesktopProps) {
  return (
    <div className="p-6 flex flex-col gap-6 pointer-events-auto">
      <div className="rounded-3xl bg-white/8 backdrop-blur-xl border border-white/10 px-5 py-4 text-white shadow-[0_18px_40px_rgba(15,23,42,0.3)] w-44">
        <p className="text-xs uppercase tracking-[0.2em] text-white/70">
          Desktop
        </p>
        <p className="text-sm font-semibold mt-1">Quick Access</p>
      </div>

      <div className="flex flex-col gap-5">
        <DesktopIcon
          label="About Me"
          icon={<FileText size={32} className="text-white drop-shadow-lg" />}
          onOpen={() => onOpenWindow("about")}
          onInspect={() => onOpenWindow("about")}
        />
        <DesktopIcon
          label="Experience"
          icon={<Briefcase size={32} className="text-white drop-shadow-lg" />}
          onOpen={() => onOpenWindow("experience")}
          onInspect={() => onOpenWindow("experience")}
        />
        <DesktopIcon
          label="Projects"
          icon={<Code size={32} className="text-white drop-shadow-lg" />}
          onOpen={() => onOpenWindow("projects")}
          onInspect={() => onOpenWindow("projects")}
        />
        <DesktopIcon
          label="Skills"
          icon={<Zap size={32} className="text-white drop-shadow-lg" />}
          onOpen={() => onOpenWindow("skills")}
          onInspect={() => onOpenWindow("skills")}
        />
        <DesktopIcon
          label="Contact"
          icon={<Mail size={32} className="text-white drop-shadow-lg" />}
          onOpen={() => onOpenWindow("contact")}
          onInspect={() => onOpenWindow("contact")}
        />
      </div>
    </div>
  );
}
