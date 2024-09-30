import Banner from "../components/banner";
import Header from "../components/hreader";
import SpecilityMenu from "../components/specility-menu";
import TopDoctors from "../components/top-doctors";

function Home() {
  return (
    <div>
      <Header />
      <SpecilityMenu />
      <TopDoctors/>
      <Banner/>
    </div>
  );
}

export default Home;
