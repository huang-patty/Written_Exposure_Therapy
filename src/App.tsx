/**
 * File: src/App.tsx
 * Purpose: Root React application component — configures providers and client-side routing.
 */

// UI Component Imports
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Data Management
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout and Pages
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Sources from "./pages/sources";

// Initialize React Query client
const queryClient = new QueryClient();

// ==========================================
// 🛑 MAINTENANCE MODE SWITCH
// Change this to 'true' to hide the site.
// Change to 'false' to show the site.
const IS_MAINTENANCE_MODE = true;
// ==========================================

// Simple Maintenance Page Component
const MaintenancePage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 font-sans text-center">
    <div className="max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Under Construction
      </h1>
      <p className="text-gray-600 mb-6">
        We are currently updating the Written Exposure Therapy platform to serve you better.
        Please check back soon.
      </p>
      <div className="animate-pulse">
        <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  </div>
);

const App = () => {
  // 1. Check if we should show the maintenance page
  if (IS_MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  // 2. Otherwise, render the full app
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sources" element={<Sources />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;