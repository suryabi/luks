import React from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import TechMarquee from "@/components/landing/TechMarquee";
import Services from "@/components/landing/Services";
import Industries from "@/components/landing/Industries";
import Process from "@/components/landing/Process";
import Engagement from "@/components/landing/Engagement";
import Portfolio from "@/components/landing/Portfolio";
import TeamAbout from "@/components/landing/TeamAbout";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#150708] text-white font-body overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Industries />
        <Process />
        <Engagement />
        <Portfolio />
        <TeamAbout />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
