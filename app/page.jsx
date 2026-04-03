//import Bannner from "@/components/pages/home/Bannner";
import Brand from "@/components/pages/home/Brand";
import ChoosePlayer from "@/components/pages/home/ChoosePlayer";
//import GameCards from "@/components/pages/home/Gamecard";
import Newsletter from "@/components/pages/home/Newsletter";
import PlayClosedBeta from "@/components/pages/home/PlayClosedBeta";
import Requirements from "@/components/pages/home/Requirements";
//import TokenOverview from "@/components/pages/home/TokenOverview";
//import WhereToBuyToken from "@/components/pages/home/WhereToBuyToken";
//import WinBySharing from "@/components/pages/home/WinBySharing";
import HeroHeader from "@/components/pages/home/HeroHeader";
import FAQPage from "@/components/pages/home/HomeFaq";
import Promoters from "@/components/pages/home/Promoters";
import Web2Web3Section from "@/components/pages/home/Web2Web3Section";
import Web2Banner from "@/components/pages/home/Web2Banner";
import Web3Banner from "@/components/pages/home/Web3Banner";
import Register from "@/components/Register";

export default function Home() {
  return (
    <main className="">
      <HeroHeader />
      {/* <WinBySharing /> */}
      <div className="bg-[url('/assets/images/background.jpg')] bg-[0%_25%] bg-cover z-[1]  relative brand_container">
        <Brand />
      </div>
      {/* <BabyDogeImage /> */}
      <div className="bg-[url('/assets/images/background.jpg')] bg-[50%_25%] bg-cover z-[1]  relative brand_container">
        {/* <Blogs /> */}
        <PlayClosedBeta />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "0 1rem", maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ flex: "1 1 400px" }}>
            <Web2Banner />
          </div>
          <div style={{ flex: "1 1 400px" }}>
            <Web3Banner />
          </div>
        </div>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <Web2Web3Section />
        </div>
        <FAQPage />
        {/* <Trailers /> */}
        <Register />
        <ChoosePlayer />
        <Requirements />
        <Promoters />
        {/* <WhereToBuyToken /> */}
        <div className="w-full bg-black">
          <Newsletter />
        </div>
      </div>
    </main>
  );
}
