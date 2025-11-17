'use client'

import { useState } from 'react'
import { sendContactEmail } from '@/app/actions/send-email'
import { Mail, Github, Linkedin, Twitter, CheckCircle, AlertCircle, Loader } from 'lucide-react'

export default function ContactContent() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !message) {
      setStatus('error')
      setStatusMessage('Please fill in email and message fields')
      return
    }

    setLoading(true)
    
    try {
      const result = await sendContactEmail({
        email,
        name,
        message,
      })

      if (result.success) {
        setStatus('success')
        setStatusMessage('Message sent successfully! Check your email for confirmation.')
        setEmail('')
        setName('')
        setMessage('')
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setStatusMessage(result.message)
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-win11-text flex items-center gap-2">
          <Mail size={20} />
          Get In Touch
        </h2>
        <p className="text-win11-text-secondary text-sm mt-1">
          I'd love to hear from you. Send me a message!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold text-win11-text block text-xs mb-2 uppercase tracking-wider">Name (Optional)</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-3 py-2.5 rounded-lg border border-win11 bg-white text-sm text-win11-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-win11-blue/50 focus:border-win11-blue transition-all duration-150"
          />
        </div>

        <div>
          <label className="font-semibold text-win11-text block text-xs mb-2 uppercase tracking-wider">Email *</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-win11 bg-white text-sm text-win11-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-win11-blue/50 focus:border-win11-blue transition-all duration-150"
          />
        </div>

        <div>
          <label className="font-semibold text-win11-text block text-xs mb-2 uppercase tracking-wider">Message *</label>
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            rows={4}
            required
            className="w-full px-3 py-2.5 rounded-lg border border-win11 bg-white text-sm text-win11-text placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-win11-blue/50 focus:border-win11-blue transition-all duration-150"
          />
        </div>

        {status === 'success' && (
          <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle size={18} className="text-green-600" />
            <p className="text-sm text-green-700">{statusMessage}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle size={18} className="text-red-600" />
            <p className="text-sm text-red-700">{statusMessage}</p>
          </div>
        )}

        <button 
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2.5 bg-win11-blue hover:bg-win11-blue-hover disabled:opacity-50 text-white rounded-lg font-semibold text-sm transition-colors duration-150 active:scale-95 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      <div className="border-t border-win11 pt-4 mt-4">
        <p className="text-xs text-win11-text-secondary font-medium mb-3 uppercase tracking-wider">Connect With Me</p>
        <div className="flex gap-2">
          <a 
            href="https://github.com/ShubhamAsati-123" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-2 bg-win11-bg-secondary hover:bg-gray-200 text-win11-text rounded-lg text-xs font-medium text-center transition-colors duration-150 flex items-center justify-center gap-2"
          >
            <Github size={14} />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/shubham-asati-054ba124b/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-2 bg-win11-bg-secondary hover:bg-gray-200 text-win11-text rounded-lg text-xs font-medium text-center transition-colors duration-150 flex items-center justify-center gap-2"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a 
            href="mailto:asatishubham2004@gmail.com"
            className="flex-1 px-3 py-2 bg-win11-bg-secondary hover:bg-gray-200 text-win11-text rounded-lg text-xs font-medium text-center transition-colors duration-150 flex items-center justify-center gap-2"
          >
            <Mail size={14} />
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
