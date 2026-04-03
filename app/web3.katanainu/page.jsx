import TokenOverview from "@/components/pages/home/TokenOverview";
import WhereToBuyToken from "@/components/pages/home/WhereToBuyToken";
import KataP2ESection from "@/components/pages/home/KataP2ESection";
import BrandLogo from "@/components/pages/home/BrandLogo";

export default function Web3Katana() {
  return (
    <main className="overflow-hidden">
<div className="bg-[url('/assets/images/background.jpg')] bg-[0%_25%] bg-cover z-[1] relative brand_container pt-36 md:pt-16">
  <BrandLogo />
</div>
      <TokenOverview />
      <WhereToBuyToken />
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}>
        <KataP2ESection />
      </div>
      <section className="py-20 px-4 md:px-10 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">RISK WARNING</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Cryptocurrency trading is subject to high market risk. Please make
            sure you always trade cautiously. Katana Inu is not responsible for
            your trading losses. You are solely responsible for determining
            whether any investment or transaction is appropriate for you.
            <br />
            <br />
            Nothing herein shall be construed as financial advice.
          </p>
        </div>
      </section>
    </main>
  );
}
