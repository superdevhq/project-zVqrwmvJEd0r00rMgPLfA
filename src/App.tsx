
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";

// Use Cases
import UseCases from "./pages/usecases";
import Enterprise from "./pages/usecases/Enterprise";
import Startups from "./pages/usecases/Startups";
import ContentCreators from "./pages/usecases/ContentCreators";
import Entrepreneurs from "./pages/usecases/Entrepreneurs";
import Accountants from "./pages/usecases/Accountants";
import Agencies from "./pages/usecases/Agencies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Use Cases Routes */}
          <Route path="/usecases" element={<UseCases />} />
          <Route path="/usecases/enterprise" element={<Enterprise />} />
          <Route path="/usecases/startups" element={<Startups />} />
          <Route path="/usecases/content-creators" element={<ContentCreators />} />
          <Route path="/usecases/entrepreneurs" element={<Entrepreneurs />} />
          <Route path="/usecases/accountants" element={<Accountants />} />
          <Route path="/usecases/agencies" element={<Agencies />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
