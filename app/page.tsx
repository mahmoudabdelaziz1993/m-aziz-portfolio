import AboutMe from "@/components/Block/about-me";
import { LandingHero } from "@/components/Block/landing-hero";
import { Navbar } from "@/components/Block/nav-bar";
import FallingIcons from "@/components/Block/skils";
import MatrixSkillsRain from "@/components/IconDigitalRain";
import IconDigitalRain from "@/components/IconDigitalRain";

export default function Home() {
  return (
    <main className=" h-screen ">
      <Navbar />
      <LandingHero />
      <AboutMe />
      <FallingIcons />

    </main>
  );
}
