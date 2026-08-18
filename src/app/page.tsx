"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WelcomeScreen } from "@/components/welcome-screen";
import { InteractiveBackground } from "@/components/background-scene";
import { ProblemSection } from "@/components/problem-section";
import { HowItWorks } from "@/components/how-it-works";
import { WhatWeManage } from "@/components/what-we-manage";
import { CustomerJourneySection } from "@/components/customer-journey";
import { PerformanceModel } from "@/components/performance-model";
import { IdealPartner } from "@/components/ideal-partner";
import { ProofSection } from "@/components/proof-section";
import { SelectedExperience } from "@/components/selected-experience";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const [welcomeDismissed, setWelcomeDismissed] = useState(false);

  return (
    <>
      <WelcomeScreen onDismiss={() => setWelcomeDismissed(true)} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: welcomeDismissed ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={`min-h-screen flex flex-col relative ${
          welcomeDismissed ? "" : "pointer-events-none select-none"
        }`}
      >
        <Navbar />
        <main className="relative flex-1">
          <InteractiveBackground />
          <Hero startAnimation={welcomeDismissed} />
          <ProblemSection />
          <HowItWorks />
          <WhatWeManage />
          <CustomerJourneySection />
          <PerformanceModel />
          <IdealPartner />
          <ProofSection />
          <SelectedExperience />
          <FAQ />
          <FinalCTA />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
