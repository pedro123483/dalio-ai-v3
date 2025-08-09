import CTA from "~/components/cta";
import FAQ from "~/components/faq";
import Features from "~/components/features";
import Footer from "~/components/footer";
import GettingStarted from "~/components/getting-started";
import Hero from "~/components/hero";
import Navbar from "~/components/navbar/navbar";
import Testimonial from "~/components/testimonial";

export default async function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <Features />
      <GettingStarted />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />   
    </main>
  );
}
