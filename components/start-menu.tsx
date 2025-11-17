"use client";

import {
  X,
  Github,
  Linkedin,
  Mail,
  FileText,
  Briefcase,
  Code,
  Zap,
} from "lucide-react";
import type { WindowId } from "@/lib/windows";

interface StartMenuProps {
  onClose: () => void;
  onOpenWindow: (id: WindowId) => void;
}

export default function StartMenu({ onClose, onOpenWindow }: StartMenuProps) {
  const handleWindowOpen = (id: WindowId) => {
    onOpenWindow(id);
    onClose();
  };

  return (
    <div className="fixed bottom-20 left-4 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="bg-linear-to-r from-win11-blue to-win11-blue-hover px-6 py-4 flex items-center justify-between">
        <h2 className="text-white font-bold text-lg">Shubham Asati</h2>
        <button
          onClick={onClose}
          className="text-white hover:bg-white/20 p-1 rounded transition-colors"
          aria-label="Close start menu"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Portfolio Shortcuts */}
        <div>
          <p className="text-xs font-semibold text-gray-600 px-2 mb-2">
            PORTFOLIO
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleWindowOpen("about")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm text-gray-700 hover:text-win11-blue"
            >
              <FileText size={16} className="text-win11-blue" />
              <span>About</span>
            </button>
            <button
              onClick={() => handleWindowOpen("experience")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm text-gray-700 hover:text-win11-blue"
            >
              <Briefcase size={16} className="text-win11-blue" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => handleWindowOpen("projects")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm text-gray-700 hover:text-win11-blue"
            >
              <Code size={16} className="text-win11-blue" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => handleWindowOpen("skills")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm text-gray-700 hover:text-win11-blue"
            >
              <Zap size={16} className="text-win11-blue" />
              <span>Skills</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Social Links */}
        <div>
          <p className="text-xs font-semibold text-gray-600 px-2 mb-2">
            CONNECT
          </p>
          <div className="flex gap-2">
            <a
              href="https://linkedin.com/in/shubham-asati-054ba124b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-win11-blue hover:bg-win11-blue-hover transition-colors text-white text-sm font-medium"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ShubhamAsati-123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-900 transition-colors text-white text-sm font-medium"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold text-gray-600 px-2 mb-2">
            CONTACT
          </p>
          <a
            href="mailto:asatishubham2004@gmail.com"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm text-gray-700 hover:text-win11-blue w-full"
          >
            <Mail size={16} className="text-win11-blue" />
            <span className="truncate">asatishubham2004@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
