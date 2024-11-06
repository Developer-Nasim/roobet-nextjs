import AllOffers from "@/components/Alloffers";
import Cta from "@/components/Cta";
import DiscoverOffers from "@/components/DiscoverOffers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav/Navbar"; 
import RoobetPackdraw from "@/components/RoobetPickdraw";
import WelcomeHero from "@/components/WelcomeHero";

export default function Home() {
  return (
    <>
      <Navbar/>
      <WelcomeHero/>
      <DiscoverOffers/>
      <RoobetPackdraw />
      <AllOffers />
      <Cta/>
      <Footer/>
    </>
  );
}
