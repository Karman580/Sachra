import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Logos } from "@/components/logos";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { Architecture } from "@/components/architecture";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { MongoDeepDive } from "@/components/mongodb";
import { Developers } from "@/components/developers";
import { Security } from "@/components/security";
import { Metrics } from "@/components/metrics";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Problem />
        <Solution />
        <Architecture />
        <Features />
        <HowItWorks />
        <MongoDeepDive />
        <Developers />
        <Security />
        <Metrics />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
