"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WelcomeScreen } from "@/components/welcome-screen";
import { InteractiveBackground } from "@/components/background-scene";
import { ProblemSection } from "@/components/problem-section";
import { WhatWeManage } from "@/components/what-we-manage";
import { HowItWorks } from "@/components/how-it-works";
import { PerformanceModel } from "@/components/performance-model";
import { AttributionSection } from "@/components/attribution-section";
import { NoUpfrontRisk } from "@/components/no-upfront-risk";
import { ServiceArea } from "@/components/service-area";
import { IdealPartner } from "@/components/ideal-partner";
import { ProofSection } from "@/components/proof-section";
import { SelectedExperience } from "@/components/selected-experience";
import { WhyOreagle } from "@/components/why-atomycoders";
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
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={welcomeDismissed ? "min-h-screen flex flex-col" : "pointer-events-none select-none h-screen overflow-hidden flex flex-col"}
      >
        <Navbar />
        <main className="relative flex-1">
          <InteractiveBackground />
          <Hero startAnimation={welcomeDismissed} />
          <ProblemSection />
          <WhatWeManage />
          <HowItWorks />
          <PerformanceModel />
          <AttributionSection />
          <NoUpfrontRisk />
          <ServiceArea />
          <IdealPartner />
          <ProofSection />
          <SelectedExperience />
          <WhyOreagle />
          <FAQ />
          <FinalCTA />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
