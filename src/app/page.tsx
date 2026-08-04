import { Hero } from "@/components/home/Hero";
import { BottomStats } from "@/components/home/BottomStats";
// import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { HowWeWork } from "@/components/HowWeWork";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Trust } from "@/components/Trust";
import { WholesaleBanner } from "@/components/WholesaleBanner";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
    return (
        <main>
            <Hero />
            <BottomStats />
            {/* <Stats /> */}
            <About />
            <Categories />
            <FeaturedProducts />
            <HowWeWork />
            <WhyChooseUs />
            <Trust />
            <WholesaleBanner />
            <ContactCTA />
        </main>
    );
}
