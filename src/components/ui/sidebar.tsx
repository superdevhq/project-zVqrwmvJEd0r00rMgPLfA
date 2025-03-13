
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

export interface SidebarItemProps {
  title: string;
  icon?: React.ReactNode;
  path?: string;
  children?: SidebarItemProps[];
  badge?: string | number;
  badgeColor?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarItemProps[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  collapsible?: boolean;
  width?: string;
  collapsedWidth?: string;
  mobileBreakpoint?: string;
}

export const Sidebar = ({
  items,
  header,
  footer,
  collapsed = false,
  onCollapsedChange,
  collapsible = true,
  width = "240px",
  collapsedWidth = "64px",
  mobileBreakpoint = "md",
  className,
  ...props
}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const toggleCollapsed = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onCollapsedChange?.(newState);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Badge color variants
  const badgeColorVariants = {
    default: "bg-gray-500 text-white",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    danger: "bg-red-500 text-white",
  };

  const renderSidebarItems = (items: SidebarItemProps[], level = 0) => {
    return items.map((item, index) => {
      const [isOpen, setIsOpen] = useState(false);
      const hasChildren = item.children && item.children.length > 0;
      const isActive = item.path && location.pathname === item.path;
      const isParentOfActive = hasChildren && item.children?.some(
        child => child.path && location.pathname === child.path
      );

      const toggleSubmenu = (e: React.MouseEvent) => {
        if (hasChildren) {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
      };

      return (
        <div key={`${item.title}-${index}`} className="w-full">
          <div
            className={cn(
              "flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors",
              isActive || isParentOfActive
                ? "bg-primary/10 text-primary"
                : "hover:bg-muted",
              level > 0 && "ml-4 pl-2",
              isCollapsed && level === 0 && "justify-center px-0"
            )}
            onClick={toggleSubmenu}
          >
            <div className="flex items-center gap-2 overflow-hidden">
              {item.icon && (
                <div className={cn("text-muted-foreground", isActive && "text-primary")}>
                  {item.icon}
                </div>
              )}
              
              {(!isCollapsed || level > 0) && (
                <span className="truncate">{item.title}</span>
              )}
            </div>

            {!isCollapsed && (
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className={cn(
                    "px-1.5 py-0.5 text-xs rounded-full",
                    badgeColorVariants[item.badgeColor || "default"]
                  )}>
                    {item.badge}
                  </span>
                )}
                
                {hasChildren && (
                  isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
                )}
              </div>
            )}
          </div>

          {hasChildren && (isOpen || isParentOfActive) && !isCollapsed && (
            <div className="mt-1 mb-1">
              {renderSidebarItems(item.children, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className={cn(
          "fixed top-4 left-4 z-50 p-2 rounded-md bg-background shadow-md md:hidden",
          isMobileOpen && "left-[calc(100vw-4rem)]"
        )}
        onClick={toggleMobileMenu}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar Backdrop for Mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "flex flex-col h-screen bg-background border-r transition-all duration-300 z-40",
          isCollapsed ? "w-[var(--collapsed-width)]" : "w-[var(--expanded-width)]",
          `${mobileBreakpoint}:relative fixed top-0 left-0`,
          !isMobileOpen && `-translate-x-full ${mobileBreakpoint}:translate-x-0`,
          className
        )}
        style={{
          '--expanded-width': width,
          '--collapsed-width': collapsedWidth,
        } as React.CSSProperties}
        {...props}
      >
        {/* Header */}
        {header && (
          <div className="p-4 border-b">
            {header}
          </div>
        )}

        {/* Collapse Toggle */}
        {collapsible && !isCollapsed && (
          <button
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted hidden md:flex"
            onClick={toggleCollapsed}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}

        {/* Expand Toggle */}
        {collapsible && isCollapsed && (
          <button
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted hidden md:flex"
            onClick={toggleCollapsed}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          {renderSidebarItems(items)}
        </nav>

        {/* Footer */}
        {footer && (
          <div className={cn(
            "p-4 border-t",
            isCollapsed && "flex justify-center p-2"
          )}>
            {footer}
          </div>
        )}
      </aside>
    </>
  );
};

// Import for ChevronLeft
const ChevronLeft = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m15 18-6-6 6-6"/>
  </svg>
);
