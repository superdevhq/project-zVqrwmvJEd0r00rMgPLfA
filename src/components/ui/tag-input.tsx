
import React, { useState, KeyboardEvent, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TagInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: string[];
  onChange: (value: string[]) => void;
  maxTags?: number;
  minLength?: number;
  maxLength?: number;
  variant?: "default" | "primary" | "secondary";
  allowDuplicates?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onTagAdd?: (tag: string) => void;
  onTagRemove?: (tag: string) => void;
}

export const TagInput = ({
  value = [],
  onChange,
  maxTags = Infinity,
  minLength = 1,
  maxLength = 20,
  variant = "default",
  allowDuplicates = false,
  placeholder = "Add a tag...",
  disabled = false,
  onTagAdd,
  onTagRemove,
  className,
  ...props
}: TagInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus the input when clicking on the container
  const handleContainerClick = () => {
    if (inputRef.current && !disabled) {
      inputRef.current.focus();
    }
  };

  // Handle tag addition
  const addTag = (tag: string) => {
    const trimmedTag = tag.trim();
    
    if (
      trimmedTag &&
      trimmedTag.length >= minLength &&
      trimmedTag.length <= maxLength &&
      value.length < maxTags &&
      (allowDuplicates || !value.includes(trimmedTag))
    ) {
      const newTags = [...value, trimmedTag];
      onChange(newTags);
      onTagAdd?.(trimmedTag);
      setInputValue("");
    }
  };

  // Handle tag removal
  const removeTag = (index: number) => {
    const newTags = [...value];
    const removedTag = newTags[index];
    newTags.splice(index, 1);
    onChange(newTags);
    onTagRemove?.(removedTag);
  };

  // Handle key presses
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
      removeTag(value.length - 1);
    } else if (e.key === "," && inputValue) {
      e.preventDefault();
      addTag(inputValue.replace(",", ""));
    }
  };

  // Variant styles for tags
  const tagVariants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className={cn(
        "flex flex-wrap gap-2 p-2 border rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 min-h-[42px]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {value.map((tag, index) => (
        <div
          key={`${tag}-${index}`}
          className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-md text-sm",
            tagVariants[variant]
          )}
        >
          <span>{tag}</span>
          {!disabled && (
            <X
              className="h-3 w-3 cursor-pointer hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(index);
              }}
            />
          )}
        </div>
      ))}
      
      {value.length < maxTags && (
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => inputValue && addTag(inputValue)}
          placeholder={value.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[120px] outline-none bg-transparent"
          disabled={disabled}
          {...props}
        />
      )}
    </div>
  );
};
