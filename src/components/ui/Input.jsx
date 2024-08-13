import * as React from "react"

import { cn } from "../../lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "bg-transparent placeholder:text-[#707070] py-4 border-b-2 text-[16px] text-white focus:outline-none focus:border-red-500 w-full",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
