import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import AnnouncementBanner from './components/AnnouncementBanner';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import Terms from './pages/Terms';
import Testimonials from './pages/Testimonials';
import WhyUs from './pages/WhyUs';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';

const PublicSite = () => (
  <>
    <Navbar />
    <AnnouncementBanner />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard/*"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/*" element={<PublicSite />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
