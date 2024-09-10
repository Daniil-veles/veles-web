import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorClass?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorClass, type, ...props }, ref) => {
    const defaultStyles = `ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
          disabled:cursor-not-allowed disabled:opacity-50`;

    const commonStyles = `flex h-12 w-full rounded-xl border px-4 py-3`;

    // Применяем commonStyles только если className пустой
    const appliedStyles = className
      ? `${defaultStyles} ${className} ${errorClass}`
      : `${defaultStyles} ${commonStyles} ${errorClass}`;

    return (
      <input type={type} className={cn(appliedStyles)} ref={ref} {...props} />
    );
  }
);
Input.displayName = "Input";

export { Input };
