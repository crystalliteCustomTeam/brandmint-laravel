"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("data-[state=open]:shadow-lg rounded-2xl", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="bg-[#F3F3F3] data-[state=open]:bg-white rounded-2xl relative data-[state=closed]:before:content-[url(/accordianIconDown.svg)] data-[state=open]:before:content-[url(/accordianIconUp.svg)] before:absolute before:right-5 before:top-0 before:bottom-0 before:flex before:items-center before:-z-10 z-10">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "text-left text-[16px] leading-relaxed md:text-[20px] md:leading-normal transition-all p-5 w-[calc(100%-50px)] pr-0 font-semibold",
        className
      )}
      {...props}>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[14px] md:text-[16px] leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("p-5 rounded-2xl", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }