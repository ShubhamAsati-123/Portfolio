'use client'

import { X, Bell, CheckCircle, AlertCircle, Info } from 'lucide-react'
import { useState, useEffect } from 'react'

interface StartMenuProps {
  onClose: () => void
}

export default function NotificationCenter({ onClose }: StartMenuProps) {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', title: 'Welcome!', message: 'Welcome to my Windows 11 Portfolio', time: 'now' },
    { id: 2, type: 'info', title: 'Portfolio Updated', message: 'Check out my latest projects and experience', time: '2m ago' },
    { id: 3, type: 'alert', title: 'Tip', message: 'Drag windows around the desktop to explore', time: '5m ago' },
  ])

  return (
    <div className="fixed bottom-20 right-4 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50 animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0078d4] to-[#1084d7] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell size={20} className="text-white" />
          <h2 className="text-white font-bold text-lg">Notifications</h2>
        </div>
        <button onClick={onClose} className="text-white hover:bg-white/20 p-1 rounded transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Notifications List */}
      <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
        {notifications.map((notif) => (
          <div key={notif.id} className="px-4 py-3 hover:bg-gray-50 transition-colors">
            <div className="flex gap-3 items-start">
              {notif.type === 'success' && <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />}
              {notif.type === 'alert' && <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />}
              {notif.type === 'info' && <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />}
              
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{notif.title}</p>
                <p className="text-gray-600 text-xs mt-1">{notif.message}</p>
                <p className="text-gray-500 text-xs mt-1">{notif.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clear All Button */}
      <div className="border-t border-gray-200 px-4 py-2 bg-gray-50">
        <button
          onClick={() => setNotifications([])}
          className="text-sm text-[#0078d4] hover:text-[#106ebe] font-medium transition-colors"
        >
          Clear all
        </button>
      </div>
    </div>
  )
}
