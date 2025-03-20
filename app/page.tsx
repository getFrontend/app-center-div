"use client"

import { useState } from "react"
import { centeringMethods, type CenteringDirection } from "@/lib/center-data"
import { CenterMethodCard } from "@/components/center-method-card"
import { MethodSelector } from "@/components/method-selector"
import Image from "next/image"
import { logoImg } from "@/constants"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [activeMethod, setActiveMethod] = useState(centeringMethods[0].id)
  const [direction, setDirection] = useState<CenteringDirection>("both")

  const currentMethod = centeringMethods.find((method) => method.id === activeMethod)!

  return (
    <main className="min-h-screen bg-background sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex justify-end p-1">
            <ThemeToggle />
          </div>
          <div className="text-center">
            <Image className="mx-auto mb-2" src={logoImg} width={140} height={140} alt="Site logo: 10 Ways to Center a DIV" />
              <h1 className="text-4xl font-bold tracking-tight mb-2 p-2">10 Ways to Center a DIV</h1>
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

