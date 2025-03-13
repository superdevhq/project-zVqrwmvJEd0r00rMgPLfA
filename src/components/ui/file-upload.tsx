
import React, { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Progress } from "./progress";
import { X, Upload, File, AlertCircle, CheckCircle2 } from "lucide-react";

export interface FileInfo {
  id: string;
  file: File;
  progress: number;
  error?: string;
  status: "idle" | "uploading" | "success" | "error";
  url?: string;
}

export interface FileUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onUpload"> {
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // in bytes
  disabled?: boolean;
  onUpload?: (files: File[]) => Promise<void> | void;
  onFileRemove?: (fileId: string) => void;
  uploadIcon?: React.ReactNode;
  dragActiveText?: React.ReactNode;
  dragInactiveText?: React.ReactNode;
  showPreview?: boolean;
  previewType?: "image" | "list";
  autoUpload?: boolean;
  value?: FileInfo[];
  onChange?: (files: FileInfo[]) => void;
  uploadButtonText?: string;
  removeButtonText?: string;
  errorMessage?: string;
}

export const FileUpload = ({
  accept,
  multiple = false,
  maxFiles = 5,
  maxSize = 5 * 1024 * 1024, // 5MB default
  disabled = false,
  onUpload,
  onFileRemove,
  uploadIcon = <Upload className="h-10 w-10 text-muted-foreground" />,
  dragActiveText = "Drop files here",
  dragInactiveText = "Drag & drop files here or click to browse",
  showPreview = true,
  previewType = "list",
  autoUpload = true,
  value,
  onChange,
  uploadButtonText = "Upload",
  removeButtonText = "Remove",
  errorMessage = "An error occurred during upload",
  className,
  ...props
}: FileUploadProps) => {
  // State for controlled or uncontrolled component
  const [files, setFiles] = useState<FileInfo[]>(value || []);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Use controlled or uncontrolled files
  const fileList = value !== undefined ? value : files;
  
  // Update files state and call onChange if provided
  const updateFiles = (newFiles: FileInfo[]) => {
    if (value === undefined) {
      setFiles(newFiles);
    }
    onChange?.(newFiles);
  };
  
  // Generate a unique ID for each file
  const generateId = () => {
    return Math.random().toString(36).substring(2, 9);
  };
  
  // Handle file selection
  const handleFiles = useCallback(
    (selectedFiles: FileList | null) => {
      if (!selectedFiles) return;
      
      // Check if adding these files would exceed maxFiles
      if (fileList.length + selectedFiles.length > maxFiles) {
        setError(`You can only upload a maximum of ${maxFiles} files`);
        return;
      }
      
      setError(null);
      
      // Convert FileList to array and filter out invalid files
      const validFiles: FileInfo[] = [];
      const invalidFiles: { file: File; reason: string }[] = [];
      
      Array.from(selectedFiles).forEach((file) => {
        // Check file size
        if (file.size > maxSize) {
          invalidFiles.push({
            file,
            reason: `File size exceeds ${(maxSize / (1024 * 1024)).toFixed(1)}MB`,
          });
          return;
        }
        
        // Check file type if accept is specified
        if (accept) {
          const acceptedTypes = accept.split(",").map((type) => type.trim());
          const fileType = file.type;
          
          // Handle wildcards like image/* or specific extensions
          const isAccepted = acceptedTypes.some((type) => {
            if (type.endsWith("/*")) {
              const category = type.split("/")[0];
              return fileType.startsWith(`${category}/`);
            }
            return type === fileType || (type.startsWith(".") && file.name.endsWith(type));
          });
          
          if (!isAccepted) {
            invalidFiles.push({
              file,
              reason: `File type not accepted. Allowed: ${accept}`,
            });
            return;
          }
        }
        
        // Add valid file to the list
        validFiles.push({
          id: generateId(),
          file,
          progress: 0,
          status: "idle",
        });
      });
      
      // Show error for invalid files
      if (invalidFiles.length > 0) {
        setError(
          `${invalidFiles.length} file(s) couldn't be added: ${invalidFiles
            .map((f) => `${f.file.name} (${f.reason})`)
            .join(", ")}`
        );
      }
      
      if (validFiles.length === 0) return;
      
      // Add new files to the list
      const newFileList = [...fileList, ...validFiles];
      updateFiles(newFileList);
      
      // Auto upload if enabled
      if (autoUpload && onUpload) {
        handleUpload(validFiles.map((f) => f.file));
      }
    },
    [fileList, maxFiles, maxSize, accept, autoUpload, onUpload, updateFiles]
  );
  
  // Handle file upload
  const handleUpload = async (filesToUpload: File[]) => {
    if (!onUpload || filesToUpload.length === 0) return;
    
    try {
      // Update status to uploading
      const updatedFiles = fileList.map((fileInfo) => {
        if (filesToUpload.some((f) => f === fileInfo.file)) {
          return { ...fileInfo, status: "uploading" as const };
        }
        return fileInfo;
      });
      updateFiles(updatedFiles);
      
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        updateFiles((current) =>
          current.map((fileInfo) => {
            if (
              filesToUpload.some((f) => f === fileInfo.file) &&
              fileInfo.status === "uploading" &&
              fileInfo.progress < 90
            ) {
              return {
                ...fileInfo,
                progress: Math.min(fileInfo.progress + 10, 90),
              };
            }
            return fileInfo;
          })
        );
      }, 300);
      
      // Call the onUpload function
      await onUpload(filesToUpload);
      
      // Clear the interval and update status to success
      clearInterval(progressInterval);
      updateFiles((current) =>
        current.map((fileInfo) => {
          if (filesToUpload.some((f) => f === fileInfo.file)) {
            return {
              ...fileInfo,
              progress: 100,
              status: "success" as const,
            };
          }
          return fileInfo;
        })
      );
    } catch (err) {
      // Update status to error
      updateFiles((current) =>
        current.map((fileInfo) => {
          if (filesToUpload.some((f) => f === fileInfo.file)) {
            return {
              ...fileInfo,
              status: "error" as const,
              error: errorMessage,
            };
          }
          return fileInfo;
        })
      );
    }
  };
  
  // Handle file removal
  const handleRemove = (fileId: string) => {
    const newFiles = fileList.filter((f) => f.id !== fileId);
    updateFiles(newFiles);
    onFileRemove?.(fileId);
  };
  
  // Handle drag events
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (disabled) return;
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // Handle drop event
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (disabled) return;
    
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };
  
  // Handle click to browse
  const handleClick = () => {
    if (disabled) return;
    inputRef.current?.click();
  };
  
  // Render file preview
  const renderFilePreview = () => {
    if (!showPreview || fileList.length === 0) return null;
    
    if (previewType === "image") {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {fileList.map((fileInfo) => {
            const isImage = fileInfo.file.type.startsWith("image/");
            
            return (
              <div
                key={fileInfo.id}
                className="relative rounded-md border overflow-hidden group"
              >
                {isImage ? (
                  <div className="aspect-square bg-muted">
                    <img
                      src={
                        fileInfo.url ||
                        (fileInfo.file instanceof File
                          ? URL.createObjectURL(fileInfo.file)
                          : "")
                      }
                      alt={fileInfo.file.name}
                      className="w-full h-full object-cover"
                      onLoad={(e) => {
                        if (!fileInfo.url && fileInfo.file instanceof File) {
                          URL.revokeObjectURL(e.currentTarget.src);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <File className="h-10 w-10 text-muted-foreground" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemove(fileInfo.id)}
                    className="h-8 px-2"
                  >
                    <X className="h-4 w-4 mr-1" />
                    {removeButtonText}
                  </Button>
                </div>
                
                {fileInfo.status === "uploading" && (
                  <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-1">
                    <Progress value={fileInfo.progress} className="h-1.5" />
                  </div>
                )}
                
                {fileInfo.status === "error" && (
                  <div className="absolute top-1 right-1">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  </div>
                )}
                
                {fileInfo.status === "success" && (
                  <div className="absolute top-1 right-1">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }
    
    // List view
    return (
      <div className="space-y-2 mt-4">
        {fileList.map((fileInfo) => (
          <div
            key={fileInfo.id}
            className="flex items-center justify-between p-2 border rounded-md bg-background"
          >
            <div className="flex items-center space-x-2 overflow-hidden">
              <File className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
              <span className="text-sm truncate">{fileInfo.file.name}</span>
              {fileInfo.status === "error" && (
                <AlertCircle className="h-4 w-4 flex-shrink-0 text-destructive" />
              )}
              {fileInfo.status === "success" && (
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-500" />
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              {fileInfo.status === "uploading" && (
                <div className="w-20">
                  <Progress value={fileInfo.progress} className="h-1.5" />
                </div>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemove(fileInfo.id)}
                className="h-7 px-2 text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Render upload button for manual upload
  const renderUploadButton = () => {
    if (autoUpload || !onUpload || fileList.length === 0) return null;
    
    const pendingFiles = fileList.filter((f) => f.status === "idle");
    if (pendingFiles.length === 0) return null;
    
    return (
      <Button
        onClick={() => handleUpload(pendingFiles.map((f) => f.file))}
        className="mt-4"
      >
        <Upload className="h-4 w-4 mr-2" />
        {uploadButtonText}
      </Button>
    );
  };
  
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 transition-colors",
          dragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25 hover:border-muted-foreground/50",
          disabled && "opacity-50 cursor-not-allowed bg-muted",
          "flex flex-col items-center justify-center text-center"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {uploadIcon}
        
        <p className="mt-2 text-sm text-muted-foreground">
          {dragActive ? dragActiveText : dragInactiveText}
        </p>
        
        <p className="mt-1 text-xs text-muted-foreground">
          {multiple
            ? `Upload up to ${maxFiles} files (max ${(maxSize / (1024 * 1024)).toFixed(1)}MB each)`
            : `Max file size: ${(maxSize / (1024 * 1024)).toFixed(1)}MB`}
        </p>
        
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
          onClick={(e) => {
            // Clear the input value to allow selecting the same file again
            e.currentTarget.value = "";
          }}
        />
      </div>
      
      {error && (
        <p className="text-sm text-destructive flex items-center">
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </p>
      )}
      
      {renderFilePreview()}
      {renderUploadButton()}
    </div>
  );
};
