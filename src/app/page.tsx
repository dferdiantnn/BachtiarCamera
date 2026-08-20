import React from "react";
import Navbar from "@/components/Navbar";
import SpeedCanvas from "@/components/SpeedCanvas";
import HeroSection from "@/components/HeroSection";
import BentoFleet from "@/components/BentoFleet";
import RentalCalculator from "@/components/RentalCalculator";
import DragRaceTimeline from "@/components/DragRaceTimeline";
import PortfolioGallery from "@/components/PortfolioGallery";
import Testimonials from "@/components/Testimonials";
import LocationAndMap from "@/components/LocationAndMap";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#07070A] text-white selection:bg-racing-neon selection:text-black">
      {/* Background Interactive Particle/Speed Canvas */}
      <SpeedCanvas />

      {/* Futuristic Floating Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Camera Fleet (Bento Grid) */}
      <BentoFleet />

      {/* Interactive Rental Calculator */}
      <RentalCalculator />

      {/* Drag Strip Process Timeline */}
      <DragRaceTimeline />

      {/* Action Photography & Footage Gallery */}
      <PortfolioGallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Location Basecamp, Dark Map UI & FAQ */}
      <LocationAndMap />

      {/* Footer */}
      <Footer />
    </main>
  );
}
