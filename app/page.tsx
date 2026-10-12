import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import MoodFinder from "@/components/mood-finder";
import EnquiryBuilder from "@/components/enquiry-builder";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Gallery />
        <MoodFinder />
        <EnquiryBuilder />
      </main>
      <Footer />
    </>
  );
}
