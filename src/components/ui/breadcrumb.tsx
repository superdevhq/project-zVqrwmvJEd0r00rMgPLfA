
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  showHomeIcon?: boolean;
  homeHref?: string;
  maxItems?: number;
  itemClassName?: string;
  activeItemClassName?: string;
  separatorClassName?: string;
}

export const Breadcrumb = ({
  items,
  separator = <ChevronRight className="h-4 w-4" />,
  showHomeIcon = true,
  homeHref = "/",
  maxItems = Infinity,
  className,
  itemClassName,
  activeItemClassName,
  separatorClassName,
  ...props
}: BreadcrumbProps) => {
  // Handle case when there are too many items
  const displayedItems = items.length > maxItems && maxItems > 2
    ? [
        ...items.slice(0, 1),
        { label: "...", href: undefined },
        ...items.slice(-Math.max(1, maxItems - 2))
      ]
    : items;

  return (
    <nav
      className={cn("flex items-center text-sm", className)}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="flex items-center flex-wrap">
        {/* Home item */}
        {showHomeIcon && (
          <li className="flex items-center">
            <Link
              to={homeHref}
              className={cn(
                "flex items-center text-muted-foreground hover:text-foreground transition-colors",
                itemClassName
              )}
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
            </Link>
            <span 
              className={cn(
                "mx-2 text-muted-foreground", 
                separatorClassName
              )}
              aria-hidden="true"
            >
              {separator}
            </span>
          </li>
        )}

        {/* Breadcrumb items */}
        {displayedItems.map((item, index) => {
          const isLast = index === displayedItems.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors",
                      itemClassName
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                  <span 
                    className={cn(
                      "mx-2 text-muted-foreground", 
                      separatorClassName
                    )}
                    aria-hidden="true"
                  >
                    {separator}
                  </span>
                </>
              ) : (
                <span
                  className={cn(
                    "flex items-center gap-1",
                    isLast ? "font-medium text-foreground" : "text-muted-foreground",
                    isLast && activeItemClassName,
                    !item.href && !isLast && "text-muted-foreground",
                    itemClassName
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
