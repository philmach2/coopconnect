import Image from "next/image";
import charlesStreet from "@/assets/images/charles-st.png";
import About from "@/components/About";

const LandingPage = () => {
  return (
    <div>
      <div className="absolute top-20 left-10 z-10">
        <h1 className="text-8xl z-10">78 Charles</h1>
      </div>
      <div className="relative" style={{ height: "calc(100vh + 14rem)" }}>
        <Image
          className="w-full h-full object-cover"
          src={charlesStreet}
          alt="Charles Street"
          layout="fill"
        />
      </div>
      <About />
    </div>
  );
};

export default LandingPage;
