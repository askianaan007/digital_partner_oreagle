import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
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
import { WhyAtomyCoders } from "@/components/why-atomycoders";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
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
        <WhyAtomyCoders />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
