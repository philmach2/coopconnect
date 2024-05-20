import Link from "next/link";
import Image from "next/image";
import charlesStreet from "@/assets/images/charles-st.png";

const LandingPage = () => {
  return (
    <div>
      <div className="absolute top-20 left-10 z-10">
        <h1 className="text-8xl z-10">78 Charles</h1>
      </div>
      <div className="relative" style={{ height: "calc(100vh - 64px)" }}>
        {" "}
        {/* Adjust 64px according to your Navbar height */}
        <Image
          className="w-full h-full object-cover"
          src={charlesStreet}
          alt="Charles Street"
          layout="fill"
        />
      </div>
      <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">About 78 Charles:</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            labore iure corrupti maiores voluptas consectetur, omnis totam
            fugiat dolorum mollitia reiciendis sint fugit placeat dolorem nam
            quidem veniam quam praesentium ratione facilis nulla quasi nobis
            ipsum. Tempore at ducimus, deleniti fugiat numquam repellendus
            exercitationem tempora atque culpa corporis magni nobis temporibus
            molestiae eius quasi, nemo ullam aperiam. Itaque veritatis expedita
            nesciunt placeat praesentium repudiandae omnis quae optio ipsam
            quod!
          </p>
          <p className="text-lg leading-relaxed pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            labore iure corrupti maiores voluptas consectetur, omnis totam
            fugiat dolorum mollitia reiciendis sint fugit placeat dolorem nam
            quidem veniam quam praesentium ratione facilis nulla quasi nobis
            ipsum. Odit ipsum veniam vel, atque voluptate et voluptatum adipisci
            quisquam accusamus vero ea quidem maxime minima omnis repellat
            debitis ratione quo? Nostrum, possimus eius et minima ducimus
            sapiente ad consectetur magnam?
          </p>
          <p className="text-lg leading-relaxed pt-4">
            Tempore at ducimus, deleniti fugiat numquam repellendus
            exercitationem tempora atque culpa corporis magni nobis temporibus
            molestiae eius quasi, nemo ullam aperiam. Itaque veritatis expedita
            nesciunt placeat praesentium repudiandae omnis quae optio ipsam
            quod!
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
