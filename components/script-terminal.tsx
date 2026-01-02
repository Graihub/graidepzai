"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface ScriptTerminalProps {
  title: string
  code: string
}

export default function ScriptTerminal({ title, code }: ScriptTerminalProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="terminal-box">
      <div className="terminal-bar">
        <div className="t-dots">
          <div className="t-dot red"></div>
          <div className="t-dot yellow"></div>
          <div className="t-dot green"></div>
        </div>
        <div className="t-title">{title}</div>
      </div>
      <div className="code-content">
        <textarea className="code-area" readOnly value={code} />
        <div className="copy-overlay">
          <button className="btn-copy" onClick={handleCopy}>
            {copied ? (
              <>
                <Check size={16} /> COPIED!
              </>
            ) : (
              <>
                <Copy size={16} /> COPY
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
