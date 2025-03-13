
import React, { useState, createContext, useContext, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

// Context for the form wizard
interface FormWizardContextProps {
  currentStep: number;
  totalSteps: number;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  stepData: Record<string, any>;
  updateStepData: (data: Record<string, any>) => void;
}

const FormWizardContext = createContext<FormWizardContextProps | undefined>(undefined);

export const useFormWizard = () => {
  const context = useContext(FormWizardContext);
  if (!context) {
    throw new Error("useFormWizard must be used within a FormWizard component");
  }
  return context;
};

// Main FormWizard component
export interface FormWizardProps extends React.HTMLAttributes<HTMLDivElement> {
  initialStep?: number;
  onComplete?: (data: Record<string, any>) => void;
  children: ReactNode;
}

export const FormWizard = ({
  initialStep = 0,
  onComplete,
  children,
  className,
  ...props
}: FormWizardProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [stepData, setStepData] = useState<Record<string, any>>({});
  
  // Count the number of FormWizardStep children
  const childrenArray = React.Children.toArray(children);
  const totalSteps = childrenArray.filter(
    (child) => React.isValidElement(child) && child.type === FormWizardStep
  ).length;
  
  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  };
  
  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else if (onComplete) {
      onComplete(stepData);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const updateStepData = (data: Record<string, any>) => {
    setStepData((prev) => ({ ...prev, ...data }));
  };
  
  const contextValue: FormWizardContextProps = {
    currentStep,
    totalSteps,
    goToStep,
    nextStep,
    prevStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === totalSteps - 1,
    stepData,
    updateStepData,
  };
  
  return (
    <FormWizardContext.Provider value={contextValue}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </FormWizardContext.Provider>
  );
};

// Step component
export interface FormWizardStepProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  children: ReactNode;
}

export const FormWizardStep = ({
  title,
  description,
  children,
  className,
  ...props
}: FormWizardStepProps) => {
  const { currentStep } = useFormWizard();
  const index = React.useRef(-1);
  
  // Increment the index for each step
  index.current += 1;
  
  // Only render the current step
  if (index.current !== currentStep) {
    return null;
  }
  
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="space-y-1">
        <h3 className="text-lg font-medium">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  );
};

// Navigation component
export interface FormWizardNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  nextLabel?: string;
  prevLabel?: string;
  completeLabel?: string;
  showStepIndicator?: boolean;
}

export const FormWizardNavigation = ({
  nextLabel = "Next",
  prevLabel = "Back",
  completeLabel = "Complete",
  showStepIndicator = true,
  className,
  ...props
}: FormWizardNavigationProps) => {
  const { nextStep, prevStep, isFirstStep, isLastStep, currentStep, totalSteps } = useFormWizard();
  
  return (
    <div className={cn("flex items-center justify-between mt-6", className)} {...props}>
      <Button
        variant="outline"
        onClick={prevStep}
        disabled={isFirstStep}
      >
        {prevLabel}
      </Button>
      
      {showStepIndicator && (
        <div className="text-sm text-muted-foreground">
          Step {currentStep + 1} of {totalSteps}
        </div>
      )}
      
      <Button onClick={nextStep}>
        {isLastStep ? completeLabel : nextLabel}
        {!isLastStep && <ChevronRight className="ml-2 h-4 w-4" />}
      </Button>
    </div>
  );
};

// Progress component
export interface FormWizardProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dots" | "steps" | "progress";
  showLabels?: boolean;
  steps?: { title: string; description?: string }[];
}

export const FormWizardProgress = ({
  variant = "steps",
  showLabels = true,
  steps,
  className,
  ...props
}: FormWizardProgressProps) => {
  const { currentStep, totalSteps, goToStep } = useFormWizard();
  
  // Render different progress indicators based on variant
  const renderProgress = () => {
    switch (variant) {
      case "dots":
        return (
          <div className="flex items-center justify-center space-x-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  index === currentStep
                    ? "bg-primary"
                    : index < currentStep
                    ? "bg-primary/60"
                    : "bg-muted"
                )}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        );
        
      case "progress":
        const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
        return (
          <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        );
        
      case "steps":
      default:
        return (
          <div className="flex items-center w-full">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => goToStep(index)}
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors",
                      index === currentStep
                        ? "border-primary bg-primary text-primary-foreground"
                        : index < currentStep
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted bg-background"
                    )}
                    aria-label={`Go to step ${index + 1}`}
                  >
                    {index < currentStep ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <span className="text-sm">{index + 1}</span>
                    )}
                  </button>
                  {showLabels && steps && steps[index] && (
                    <div className="mt-2 text-center">
                      <div className="text-xs font-medium">
                        {steps[index].title}
                      </div>
                      {steps[index].description && (
                        <div className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                          {steps[index].description}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {index < totalSteps - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5 mx-2",
                      index < currentStep
                        ? "bg-primary"
                        : "bg-muted"
                    )}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        );
    }
  };
  
  return (
    <div className={cn("w-full mb-6", className)} {...props}>
      {renderProgress()}
    </div>
  );
};

// Container component
export interface FormWizardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const FormWizardContainer = ({
  children,
  className,
  ...props
}: FormWizardContainerProps) => {
  return (
    <Card className={cn("p-6", className)} {...props}>
      {children}
    </Card>
  );
};
