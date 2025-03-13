
import React from "react";
import { cn } from "@/lib/utils";

export interface NotificationBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  showZero?: boolean;
  maxCount?: number;
  dot?: boolean;
}

export const NotificationBadge = ({
  count = 0,
  variant = "default",
  size = "md",
  showZero = false,
  maxCount = 99,
  dot = false,
  className,
  ...props
}: NotificationBadgeProps) => {
  // Don't render if count is 0 and showZero is false
  if (count === 0 && !showZero && !dot) {
    return null;
  }

  // Determine the display text
  const displayText = dot ? "" : count > maxCount ? `${maxCount}+` : `${count}`;

  // Size classes
  const sizeClasses = {
    sm: "h-4 min-w-4 text-[10px]",
    md: "h-5 min-w-5 text-xs",
    lg: "h-6 min-w-6 text-sm",
  };

  // Variant classes
  const variantClasses = {
    default: "bg-gray-500 text-white",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-medium",
        sizeClasses[size],
        variantClasses[variant],
        dot ? "min-w-0" : "px-1.5",
        className
      )}
      {...props}
    >
      {displayText}
    </div>
  );
};
