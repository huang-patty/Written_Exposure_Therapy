/**
 * File: src/App.tsx
 * Purpose: Root React application component — configures providers and client-side routing.
 *
 * Influenced by:
 *  - @tanstack/react-query: QueryClient, QueryClientProvider
 *  - react-router-dom: BrowserRouter, Routes, Route
 *  - UI providers: TooltipProvider, Toaster, Sonner (from ./components/ui)
 *  - Layout and page components (Layout, Home, About, Team, Resources, Contact, NotFound)
 *
 * Influences:
 *  - Exports the default App component which wires up routing and global providers.
 *  - Affects the whole client UI by providing tooltip/toaster/query contexts.
 *
 * Notes:
 *  - Non-functional header added for documentation. No behaviour changes.
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

// Initialize React Query client
const queryClient = new QueryClient();

const App = () => (
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
