
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Define chart types
type ChartType = "bar" | "line" | "pie" | "doughnut";

// Define dataset structure
interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
  tension?: number;
}

// Define chart props
export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  type: ChartType;
  labels: string[];
  datasets: ChartDataset[];
  height?: number;
  width?: number;
  options?: Record<string, any>;
  showLegend?: boolean;
  showTooltip?: boolean;
  responsive?: boolean;
}

export const Chart = ({
  type,
  labels,
  datasets,
  height = 300,
  width = 500,
  options = {},
  showLegend = true,
  showTooltip = true,
  responsive = true,
  className,
  ...props
}: ChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<any>(null);

  useEffect(() => {
    // This is a placeholder for chart library integration
    // In a real implementation, you would use a library like Chart.js
    
    const renderChart = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Clear previous chart if it exists
      if (chartInstanceRef.current) {
        // Destroy previous chart instance
        // chartInstanceRef.current.destroy();
      }
      
      // In a real implementation, you would initialize your chart library here
      // Example with Chart.js (pseudo-code):
      // chartInstanceRef.current = new Chart(ctx, {
      //   type,
      //   data: { labels, datasets },
      //   options: {
      //     responsive,
      //     plugins: {
      //       legend: { display: showLegend },
      //       tooltip: { enabled: showTooltip }
      //     },
      //     ...options
      //   }
      // });
      
      // For this placeholder, we'll just draw a simple rectangle
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw placeholder text
      ctx.fillStyle = '#333';
      ctx.font = '14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`${type.toUpperCase()} Chart Placeholder`, canvas.width / 2, canvas.height / 2);
      ctx.fillText(`(Add Chart.js or other library to implement)`, canvas.width / 2, canvas.height / 2 + 20);
      
      // Draw some sample data visualization based on type
      if (type === 'bar') {
        drawBarPlaceholder(ctx, canvas, datasets, labels);
      } else if (type === 'line') {
        drawLinePlaceholder(ctx, canvas, datasets, labels);
      } else if (type === 'pie' || type === 'doughnut') {
        drawPiePlaceholder(ctx, canvas, datasets);
      }
    };
    
    const drawBarPlaceholder = (
      ctx: CanvasRenderingContext2D, 
      canvas: HTMLCanvasElement, 
      datasets: ChartDataset[], 
      labels: string[]
    ) => {
      const barWidth = (canvas.width - 60) / (labels.length * datasets.length);
      const maxValue = Math.max(...datasets.flatMap(d => d.data));
      const colors = ['#4361ee', '#3a0ca3', '#7209b7', '#f72585'];
      
      datasets.forEach((dataset, datasetIndex) => {
        dataset.data.forEach((value, index) => {
          const x = 30 + (index * barWidth * datasets.length) + (datasetIndex * barWidth);
          const barHeight = (value / maxValue) * (canvas.height - 80);
          
          ctx.fillStyle = Array.isArray(dataset.backgroundColor) 
            ? dataset.backgroundColor[index] || colors[datasetIndex % colors.length]
            : dataset.backgroundColor || colors[datasetIndex % colors.length];
            
          ctx.fillRect(x, canvas.height - 40 - barHeight, barWidth - 2, barHeight);
        });
      });
      
      // X-axis labels
      ctx.fillStyle = '#666';
      ctx.font = '10px Arial';
      labels.forEach((label, index) => {
        const x = 30 + ((index + 0.5) * barWidth * datasets.length);
        ctx.fillText(label, x, canvas.height - 20);
      });
    };
    
    const drawLinePlaceholder = (
      ctx: CanvasRenderingContext2D, 
      canvas: HTMLCanvasElement, 
      datasets: ChartDataset[], 
      labels: string[]
    ) => {
      const maxValue = Math.max(...datasets.flatMap(d => d.data));
      const colors = ['#4361ee', '#3a0ca3', '#7209b7', '#f72585'];
      const step = (canvas.width - 60) / (labels.length - 1);
      
      datasets.forEach((dataset, datasetIndex) => {
        const color = dataset.borderColor || colors[datasetIndex % colors.length];
        ctx.strokeStyle = Array.isArray(color) ? color[0] : color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        dataset.data.forEach((value, index) => {
          const x = 30 + (index * step);
          const y = canvas.height - 40 - ((value / maxValue) * (canvas.height - 80));
          
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        
        ctx.stroke();
      });
      
      // X-axis labels
      ctx.fillStyle = '#666';
      ctx.font = '10px Arial';
      labels.forEach((label, index) => {
        const x = 30 + (index * step);
        ctx.fillText(label, x, canvas.height - 20);
      });
    };
    
    const drawPiePlaceholder = (
      ctx: CanvasRenderingContext2D, 
      canvas: HTMLCanvasElement, 
      datasets: ChartDataset[]
    ) => {
      const dataset = datasets[0]; // Use first dataset for pie/doughnut
      const total = dataset.data.reduce((sum, value) => sum + value, 0);
      const colors = Array.isArray(dataset.backgroundColor) 
        ? dataset.backgroundColor 
        : ['#4361ee', '#3a0ca3', '#7209b7', '#f72585', '#560bad', '#480ca8'];
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 40;
      const innerRadius = type === 'doughnut' ? radius * 0.6 : 0;
      
      let startAngle = 0;
      
      dataset.data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        
        ctx.fillStyle = colors[index % colors.length];
        ctx.fill();
        
        if (type === 'doughnut' && innerRadius > 0) {
          ctx.beginPath();
          ctx.moveTo(centerX + innerRadius * Math.cos(startAngle + sliceAngle / 2), 
                    centerY + innerRadius * Math.sin(startAngle + sliceAngle / 2));
          ctx.arc(centerX, centerY, innerRadius, startAngle, startAngle + sliceAngle);
          ctx.closePath();
          ctx.fillStyle = '#fff';
          ctx.fill();
        }
        
        startAngle += sliceAngle;
      });
    };
    
    renderChart();
    
    // Re-render chart when props change
    return () => {
      if (chartInstanceRef.current) {
        // Clean up chart instance if needed
        // chartInstanceRef.current.destroy();
      }
    };
  }, [type, labels, datasets, height, width, options, showLegend, showTooltip, responsive]);

  return (
    <div className={cn("chart-container", className)} {...props}>
      <canvas 
        ref={canvasRef} 
        height={height} 
        width={width}
        style={{ 
          maxWidth: '100%', 
          height: responsive ? 'auto' : `${height}px`,
          width: responsive ? '100%' : `${width}px`
        }}
      />
      {showLegend && (
        <div className="chart-legend mt-4 flex flex-wrap gap-4 justify-center">
          {datasets.map((dataset, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-sm" 
                style={{ 
                  backgroundColor: Array.isArray(dataset.backgroundColor) 
                    ? dataset.backgroundColor[0] 
                    : dataset.backgroundColor || '#4361ee'
                }}
              />
              <span className="text-sm text-gray-700">{dataset.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
