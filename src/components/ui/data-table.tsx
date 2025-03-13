
import React, { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";
import { Button } from "./button";
import { Input } from "./input";
import { Select } from "./select";
import { ChevronDown, ChevronUp, ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight, Search } from "lucide-react";

export interface Column<T> {
  id: string;
  header: React.ReactNode;
  accessorKey?: keyof T;
  accessorFn?: (row: T) => any;
  cell?: (info: { row: T; value: any }) => React.ReactNode;
  enableSorting?: boolean;
  meta?: Record<string, any>;
}

export interface DataTableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  columns: Column<T>[];
  pagination?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  searchable?: boolean;
  searchPlaceholder?: string;
  searchKeys?: (keyof T)[];
  noResultsMessage?: React.ReactNode;
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  onRowClick?: (row: T) => void;
}

export function DataTable<T>({
  data,
  columns,
  pagination = true,
  pageSize: initialPageSize = 10,
  pageSizeOptions = [5, 10, 20, 50],
  searchable = false,
  searchPlaceholder = "Search...",
  searchKeys,
  noResultsMessage = "No results found",
  loading = false,
  loadingIndicator = "Loading...",
  onRowClick,
  className,
  ...props
}: DataTableProps<T>) {
  // State for sorting
  const [sorting, setSorting] = useState<{ id: string; desc: boolean } | null>(null);
  
  // State for pagination
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(initialPageSize);
  
  // State for search
  const [searchValue, setSearchValue] = useState("");
  
  // Filter data based on search value
  const filteredData = useMemo(() => {
    if (!searchValue || !searchable) return data;
    
    return data.filter((row) => {
      // If searchKeys are provided, only search in those keys
      if (searchKeys && searchKeys.length > 0) {
        return searchKeys.some((key) => {
          const value = row[key];
          if (value == null) return false;
          return String(value).toLowerCase().includes(searchValue.toLowerCase());
        });
      }
      
      // Otherwise, search in all keys
      return Object.values(row).some((value) => {
        if (value == null) return false;
        return String(value).toLowerCase().includes(searchValue.toLowerCase());
      });
    });
  }, [data, searchValue, searchable, searchKeys]);
  
  // Sort data
  const sortedData = useMemo(() => {
    if (!sorting) return filteredData;
    
    const { id, desc } = sorting;
    const column = columns.find((col) => col.id === id);
    
    if (!column) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      let valueA: any;
      let valueB: any;
      
      if (column.accessorFn) {
        valueA = column.accessorFn(a);
        valueB = column.accessorFn(b);
      } else if (column.accessorKey) {
        valueA = a[column.accessorKey];
        valueB = b[column.accessorKey];
      } else {
        return 0;
      }
      
      // Handle null and undefined values
      if (valueA == null) return desc ? 1 : -1;
      if (valueB == null) return desc ? -1 : 1;
      
      // Handle different types
      if (typeof valueA === "string" && typeof valueB === "string") {
        return desc ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
      }
      
      return desc ? valueB - valueA : valueA - valueB;
    });
  }, [filteredData, sorting, columns]);
  
  // Paginate data
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;
    
    const start = pageIndex * pageSize;
    const end = start + pageSize;
    
    return sortedData.slice(start, end);
  }, [sortedData, pagination, pageIndex, pageSize]);
  
  // Calculate total pages
  const totalPages = useMemo(() => {
    if (!pagination) return 1;
    return Math.ceil(sortedData.length / pageSize);
  }, [sortedData, pagination, pageSize]);
  
  // Handle sorting
  const handleSort = (columnId: string) => {
    const column = columns.find((col) => col.id === columnId);
    if (!column || column.enableSorting === false) return;
    
    setSorting((prev) => {
      if (prev?.id !== columnId) return { id: columnId, desc: false };
      if (prev.desc) return null;
      return { id: columnId, desc: true };
    });
  };
  
  // Handle page change
  const handlePageChange = (newPage: number) => {
    setPageIndex(Math.max(0, Math.min(newPage, totalPages - 1)));
  };
  
  // Handle page size change
  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize);
    setPageIndex(0); // Reset to first page when changing page size
  };
  
  // Get cell value
  const getCellValue = (row: T, column: Column<T>) => {
    if (column.accessorFn) {
      return column.accessorFn(row);
    }
    
    if (column.accessorKey) {
      return row[column.accessorKey];
    }
    
    return null;
  };
  
  // Render cell content
  const renderCell = (row: T, column: Column<T>) => {
    const value = getCellValue(row, column);
    
    if (column.cell) {
      return column.cell({ row, value });
    }
    
    if (value == null) return null;
    
    return String(value);
  };
  
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {/* Search input */}
      {searchable && (
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-8"
          />
        </div>
      )}
      
      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.id}
                  className={cn(
                    column.enableSorting !== false && "cursor-pointer select-none",
                    column.meta?.className
                  )}
                  onClick={() => column.enableSorting !== false && handleSort(column.id)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.header}</span>
                    {column.enableSorting !== false && sorting?.id === column.id && (
                      <span className="ml-1">
                        {sorting.desc ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronUp className="h-4 w-4" />
                        )}
                      </span>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {loadingIndicator}
                </TableCell>
              </TableRow>
            ) : paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {noResultsMessage}
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className={cn(onRowClick && "cursor-pointer hover:bg-muted/50")}
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((column) => (
                    <TableCell key={column.id} className={column.meta?.className}>
                      {renderCell(row, column)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination */}
      {pagination && totalPages > 0 && (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-medium text-foreground">
                {sortedData.length > 0
                  ? pageIndex * pageSize + 1
                  : 0}
              </span>{" "}
              to{" "}
              <span className="font-medium text-foreground">
                {Math.min((pageIndex + 1) * pageSize, sortedData.length)}
              </span>{" "}
              of{" "}
              <span className="font-medium text-foreground">{sortedData.length}</span>{" "}
              results
            </p>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Rows per page</span>
              <select
                value={pageSize}
                onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                className="h-8 w-16 rounded-md border border-input bg-background px-2 text-sm"
              >
                {pageSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(0)}
              disabled={pageIndex === 0}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(pageIndex - 1)}
              disabled={pageIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <span className="text-sm">
              Page{" "}
              <span className="font-medium">{pageIndex + 1}</span> of{" "}
              <span className="font-medium">{totalPages}</span>
            </span>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(pageIndex + 1)}
              disabled={pageIndex >= totalPages - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(totalPages - 1)}
              disabled={pageIndex >= totalPages - 1}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
