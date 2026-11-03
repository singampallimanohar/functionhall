import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import OwnerChecklistModal from "./components/OwnerChecklistModal";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy-loaded page components for code splitting & smooth loading
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Events = lazy(() => import("./pages/Events"));
const Contact = lazy(() => import("./pages/Contact"));
const Enquiry = lazy(() => import("./pages/Enquiry"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F7F2E8] text-[#252923] selection:bg-[#C8A45D]/30 selection:text-[#173D32]">
        <ScrollToTop />
        
        {/* Navigation Bar */}
        <Navbar onOpenChecklist={() => setIsChecklistOpen(true)} />

        {/* Main Routed Page Content with Suspense Fallback */}
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <Footer onOpenChecklist={() => setIsChecklistOpen(true)} />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton variant="floating" />

        {/* Client Demonstration Owner Launch Verification Modal */}
        <OwnerChecklistModal
          isOpen={isChecklistOpen}
          onClose={() => setIsChecklistOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
