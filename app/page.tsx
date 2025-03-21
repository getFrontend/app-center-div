"use client"

import { useState } from "react"
import { centeringMethods, type CenteringDirection } from "@/lib/center-data"
import { CenterMethodCard } from "@/components/center-method-card"
import { MethodSelector } from "@/components/method-selector"
import Image from "next/image"
import { logoImg } from "@/constants"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [activeMethod, setActiveMethod] = useState(centeringMethods[0].id)
  const [direction, setDirection] = useState<CenteringDirection>("both")

  const currentMethod = centeringMethods.find((method) => method.id === activeMethod)!

  return (
    <main className="min-h-screen bg-background sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1"></div>
            <Image className="mx-auto my-1" src={logoImg} width={110} height={110} alt="Site logo: 10 Ways to Center a DIV" />
            <div className="flex-1 flex justify-end self-start gap-2">
              <Link 
                href="https://github.com/getFrontend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <ThemeToggle />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-2">10 Ways to Center a DIV</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              An interactive guide to different CSS methods for centering elements
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <MethodSelector methods={centeringMethods} activeMethod={activeMethod} onMethodChange={setActiveMethod} />
          </div>

          <div className="lg:col-span-2">
            <CenterMethodCard method={currentMethod} direction={direction} onDirectionChange={setDirection} />
          </div>
        </div>
      </div>
    </main>
  )
}

