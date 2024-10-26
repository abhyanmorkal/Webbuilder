import Button from "@/components/common/Button";
import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center relative overflow-x-hidden">
      <div className="absolute h-full top-0 z-[-2] w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      <h1 className="font-sans font-extrabold text-6xl px-5 lg:text-[70px] text-center mt-24 lg:mt-32 mb-0">
        Stand Out from the <span className="font-gradient-color">Crowd</span>✌️
      </h1>
      <p className="font-sans font-extrabold px-5 text-center mt-5 text-xl lg:text-[32px]">
        Create a Web Story Through Your Brand
      </p>
      <p className=" text-xl text-center lg:mt-10 mt-5 mb-6 px-5 lg:px-[280px] lg:mb-10">
        A stunning website is like the fancy outfit you wear to the digital
        party. It&apos;s the first impression you make on internet wanderers, so
        you want it to be a good one
      </p>
      <Button title="Explore Now" />
      <br />
      <Image
        src="/assets/human-img.svg" // Correct path
        alt="human animated image"
        width={1330}
        height={404}
        className="w-full h-full overflow-x-hidden"
      />
    </section>
  );
};

export default Home;
