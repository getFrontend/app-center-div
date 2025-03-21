"use client"

import { cn } from "@/lib/utils"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SimpleCodeBlockProps {
  code: string
  className?: string
}

export function SimpleCodeBlock({ code, className }: SimpleCodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(code.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Enhanced CSS syntax highlighting with regex
  const highlightCSS = (code: string) => {
    return (
      code
        // First, escape any HTML to prevent XSS
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        // Highlight selectors (.class, #id)
        .replace(/(\.[\w-]+|#[\w-]+)/g, '<span class="css-selector">$1</span>')
        // Highlight properties - more specific pattern to catch CSS properties
        .replace(/([a-z-]+)(\s*:)/g, '<span class="css-property">$1</span>$2')
        // Highlight values - more specific to avoid capturing too much
        .replace(/:\s*([^;}\n]+)/g, ': <span class="css-value">$1</span>')
        // Highlight punctuation
        .replace(/(\{|\}|;)/g, '<span class="css-punctuation">$1</span>')
        // Add line numbers by splitting and joining with spans
        .split("\n")
        .map((line, i) => {
          // Don't add line numbers to empty lines
          if (line.trim() === "") {
            return '<span class="line-number"></span>'
          }
          return `<span class="line-number">${i + 1}</span>${line}`
        })
        .join("\n")
    )
  }

  return (
    <div className={cn("relative rounded-md overflow-hidden", className)}>
      <pre className="p-4 text-sm bg-muted/40 dark:bg-slate-950 overflow-x-auto code-block">
        <code dangerouslySetInnerHTML={{ __html: highlightCSS(code.trim()) }} />
      </pre>
      <Button size="sm" variant="ghost" className="absolute top-2 right-2" onClick={copyCode}>
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )
}