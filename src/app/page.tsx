"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SpeedCanvas from "@/components/SpeedCanvas";
import HeroSection from "@/components/HeroSection";
import PosterSpotlight from "@/components/PosterSpotlight";
import BentoFleet from "@/components/BentoFleet";
import KenapaHarusSewa from "@/components/KenapaHarusSewa";
import RentalCalculator from "@/components/RentalCalculator";
import DragRaceTimeline from "@/components/DragRaceTimeline";
import TermsSection from "@/components/TermsSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import Testimonials from "@/components/Testimonials";
import LocationAndMap from "@/components/LocationAndMap";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeCameraId, setActiveCameraId] = useState<string>("insta360-x3");

  const handleOpenBooking = (camId?: string) => {
    if (camId) setActiveCameraId(camId);
    setIsBookingModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#07070A] text-white selection:bg-racing-neon selection:text-black pb-16 sm:pb-0">
      {/* Background Interactive Optimized Particle Canvas */}
      <SpeedCanvas />

      {/* Futuristic Floating Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <HeroSection onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Poster & Promo Spotlight */}
      <PosterSpotlight onOpenBooking={handleOpenBooking} />

      {/* Camera Fleet (Bento Grid) */}
      <BentoFleet onOpenBooking={handleOpenBooking} />

      {/* Kenapa Harus Sewa di Sini (5 Keunggulan - Poster 2) */}
      <KenapaHarusSewa onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Rental Calculator */}
      <RentalCalculator onOpenBooking={handleOpenBooking} />

      {/* Drag Strip Process Timeline */}
      <DragRaceTimeline onOpenBooking={() => handleOpenBooking()} />

      {/* Syarat Dokumen & Ketentuan Biaya (Poster 3 & 4) */}
      <TermsSection onOpenBooking={() => handleOpenBooking()} />

      {/* Action Photography & Footage Gallery */}
      <PortfolioGallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Location Basecamp, Dark Map UI & FAQ */}
      <LocationAndMap onOpenBooking={() => handleOpenBooking()} />

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Mobile Sticky Bottom Action Bar (iPhone & Android) */}
      <MobileBottomNav onOpenBooking={() => handleOpenBooking()} />

      {/* Digital Rental Booking & Document Verification Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialCameraId={activeCameraId}
      />
    </main>
  );
}
