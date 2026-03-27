"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutDMIT from "@/components/AboutDMIT";
import AboutUs from "@/components/AboutUs";
import VideoTestimonials from "@/components/VideoTestimonials";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <Hero />
        <AboutDMIT />
        <AboutUs />
        <VideoTestimonials />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
