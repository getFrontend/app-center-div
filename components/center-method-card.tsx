"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import type { CenteringDirection, CenteringMethod } from "@/lib/center-data"
import { getDemoStyles, getCode } from "@/lib/utils"
import { SimpleCodeBlock } from "@/components/simple-code-block"

interface CenterMethodCardProps {
  method: CenteringMethod
  direction: CenteringDirection
  onDirectionChange: (direction: CenteringDirection) => void
}

export function CenterMethodCard({ method, direction, onDirectionChange }: CenterMethodCardProps) {
  const demoStyles = getDemoStyles(method, direction)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{method.name}</CardTitle>
        <CardDescription>{method.description}</CardDescription>
        <div className="flex items-center space-x-8 mt-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="horizontal"
              checked={direction === "horizontal" || direction === "both"}
              onCheckedChange={(checked) => {
                if (checked && direction === "vertical") {
                  onDirectionChange("both")
                } else if (!checked && direction === "both") {
                  onDirectionChange("vertical")
                } else if (!checked && direction === "horizontal") {
                  onDirectionChange("vertical")
                }
              }}
            />
            <Label htmlFor="horizontal">Horizontal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="vertical"
              checked={direction === "vertical" || direction === "both"}
              onCheckedChange={(checked) => {
                if (checked && direction === "horizontal") {
                  onDirectionChange("both")
                } else if (!checked && direction === "both") {
                  onDirectionChange("horizontal")
                } else if (!checked && direction === "vertical") {
                  onDirectionChange("horizontal")
                }
              }}
            />
            <Label htmlFor="vertical">Vertical</Label>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex gap-2 mb-2">
            <Badge variant="outline">Pros</Badge>
            <div className="flex flex-wrap gap-2">
              {method.pros.map((pro, index) => (
                <Badge key={index} variant="pros">
                  {pro}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline">Cons</Badge>
            <div className="flex flex-wrap gap-2">
              {method.cons.map((con, index) => (
                <Badge key={index} variant="destructive">
                  {con}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="demo" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="demo">Demo</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="demo" className="p-0">
            <div className="border rounded-md bg-muted/40 dark:bg-slate-900 h-[300px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${method.id}-${direction}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-full ${demoStyles.parent}`}
                >
                  <motion.div
                    className={`bg-primary text-primary-foreground w-24 h-24 rounded-md flex items-center justify-center shadow-md ${demoStyles.child}`}
                    layoutId="centerBox"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    Centered
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </TabsContent>
          <TabsContent value="code" className="p-0">
            <SimpleCodeBlock code={getCode(method, direction)} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}