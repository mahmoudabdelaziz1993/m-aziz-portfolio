import { Navbar } from "@/components/Block/nav-bar";
import Hero01 from "@/components/hero-01/hero-01";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero01 />
      <Hero01 />
    </main>
  );
}
