import FeatureSection from "@/components/tools/banner";
import { Search } from "@/components/tools/search";

export default function Home() {
    return (
      <>
      <div className="pt-24">
        <FeatureSection/>
      </div>
        <div className="md:flex-between mb-6 m-8 ml-20 flex flex-col gap-5 md:flex-row">
          <h2 className="text-[30px] font-bold md:text-[36px] leading-[110%] text-dark-600">Recent Edits</h2>
          <Search />
        </div>
      </>
    );
  }