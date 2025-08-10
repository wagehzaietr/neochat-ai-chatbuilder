
import ChatBot from "@/components/Chatbot";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/hero-section"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#020617] relative">
        {/* Purple Radial Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(139,92,246,0.4), transparent)`,
          }}
        />
        {/* Your Content/Components */}

        <div className="relative z-10">
          <HeroSection />
          <ChatBot />
          <Features />
        </div>
        <FooterSection />
      </div>
    </>
  );
}
