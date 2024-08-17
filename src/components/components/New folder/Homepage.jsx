import logo from "../assets/logo.png";
import CarouselDefault from "./CarouselDefault";
import Contact from "./Contact";
import MainNav from "./MainNav";
import SocialMedia from "./SocialMedia";
function HomePage() {
  return (
    <div className="min-h-screen bg-[#c00000] ">
      <div className="p-4 ">
        <div className="flex  ">
          <img src={logo} alt="" className="h-[108px] w-[400px]" />
          <div className="w-full">
            <div className=" flex h-[43px] justify-between">
              <Contact />
              <SocialMedia />
            </div>
            <div className="">
              <MainNav />
            </div>
          </div>
        </div>
        <div className="h-[500px] py-4 ">
          <CarouselDefault />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
