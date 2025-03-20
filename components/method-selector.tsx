"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { CenteringMethod } from "@/lib/center-data"

interface MethodSelectorProps {
  methods: CenteringMethod[]
  activeMethod: string
  onMethodChange: (methodId: string) => void
}

export function MethodSelector({ methods, activeMethod, onMethodChange }: MethodSelectorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Centering Methods</CardTitle>
        <CardDescription>Select a method to see how it works</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {methods.map((method) => (
            <Button
              key={method.id}
              variant={activeMethod === method.id ? "default" : "outline"}
              className="w-full justify-start text-left"
              onClick={() => onMethodChange(method.id)}
            >
              {method.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}