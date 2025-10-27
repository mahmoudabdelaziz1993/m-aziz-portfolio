import { LandingHero } from "@/components/Block/landing-hero";
import { Navbar } from "@/components/Block/nav-bar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LandingHero />
    </main>
  );
}
