'use client'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'

export default function AboutContent() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-bold text-win11-text">Shubham Asati</h2>
        <p className="text-win11-text-secondary text-sm leading-relaxed">
          Full Stack Developer passionate about building AI-powered applications, scalable web platforms, and innovative solutions. Currently interning at Vanilla Intelligence.
        </p>
      </div>
      
      <div className="border-b border-win11"></div>
      
      <div className="space-y-3">
        <h3 className="font-semibold text-win11-text text-sm">Contact Information</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-win11-text-secondary hover:text-win11-blue transition-colors cursor-pointer">
            <MapPin size={16} className="text-win11-blue flex-shrink-0" />
            <span>Kolshet, Thane, Maharashtra</span>
          </div>
          <div className="flex items-center gap-2 text-win11-text-secondary hover:text-win11-blue transition-colors cursor-pointer">
            <Phone size={16} className="text-win11-blue flex-shrink-0" />
            <span>7506375806</span>
          </div>
          <div className="flex items-center gap-2 text-win11-text-secondary hover:text-win11-blue transition-colors cursor-pointer">
            <Mail size={16} className="text-win11-blue flex-shrink-0" />
            <span>asatishubham2004@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="border-b border-win11"></div>

      <div className="space-y-2">
        <h3 className="font-semibold text-win11-text text-sm">Education</h3>
        <p className="text-win11-text-secondary text-sm leading-relaxed">
          <span className="font-semibold text-win11-text">B.Tech Computer Science Engineering</span>
          <br/>
          Indian Institute of Information Technology, Pune
          <br/>
          <span className="text-xs">CGPA: 7.76 (Nov 2022 - Ongoing)</span>
        </p>
      </div>
    </div>
  )
}
