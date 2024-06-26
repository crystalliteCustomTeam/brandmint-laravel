import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const ButtonVariants = cva(
  "w-max rounded-full font-medium text-[16px] h-[45px] xs:px-5 px-10",
  {
    variants: {
      variant: {
        default:
          "bg-[#EC4139] text-primary-foreground shadow hover:bg-[#EC4139]/90",
        black:
          "bg-black text-primary-foreground shadow hover:bg-black /90",
      }
    },
    defaultVariants: {
      variant: "default"
    },
  }
)

const Button = React.forwardRef(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(ButtonVariants({ variant, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, ButtonVariants }
