
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Problems from "./pages/Problems";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Articles from "./pages/Articles";
import ArticleView from "./pages/ArticleView";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import ConceptionMatrices from "./pages/ConceptionMatrices";
import Correction from "./pages/Correction";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import RequireAuth from "./components/admin/RequireAuth";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Admin Routes - Without Header/Footer */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <AdminPanel />
                </RequireAuth>
              }
            />

            {/* Regular Routes - With Header/Footer */}
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/approach" element={<Approach />} />
                      <Route path="/problems" element={<Problems />} />
                      <Route path="/reviews" element={<Reviews />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/articles" element={<Articles />} />
                      <Route path="/articles/:slug" element={<ArticleView />} />
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/conception-matrices" element={<ConceptionMatrices />} />
                      <Route path="/correction" element={<Correction />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
