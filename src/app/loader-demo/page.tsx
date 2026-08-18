"use client";

import { OreagleLoader } from "@/components/oreagle-loader";

export default function LoaderDemoPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <OreagleLoader fullscreen={false} transparent={true} size={260} />
    </div>
  );
}
