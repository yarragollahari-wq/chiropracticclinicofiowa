import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import WhyUs from "@/components/home/WhyUs";
import Doctors from "@/components/home/Doctors";
import Testimonials from "@/components/home/Testimonials";
import NewPatients from "@/components/home/NewPatients";
import Insights from "@/components/home/Insights";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import { clinic, faqs, hours } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Chiropractic",
  name: clinic.name,
  telephone: clinic.phone,
  email: clinic.email,
  url: "https://chiropracticclinicofiowa.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "214 Blairs Ferry Rd NE, Suite 2",
    addressLocality: "Cedar Rapids",
    addressRegion: "IA",
    postalCode: "52402",
    addressCountry: "US",
  },
  areaServed: ["Cedar Rapids", "Marion", "Hiawatha", "Linn County"],
  openingHoursSpecification: hours
    .filter((h) => h.open)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      description: h.time,
    })),
  mainEntityOfPage: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Doctors />
      <Testimonials />
      <NewPatients />
      <Insights />
      <Faq />
      <Contact />
    </>
  );
}
