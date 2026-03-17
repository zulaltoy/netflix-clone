import heroBg from "../assets/hero-background.jpg";
const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        src={heroBg}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover "
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl text-white font-bold ">
          Unlimited movies, TV shows, and more.
        </h1>

        <h2 className="text-2xl text-white font-semibold mt-4">
          Starts at $9,99. Cancel anytime
        </h2>
        <button className="sm:text-lg md:text-xl mt-6 bg-red-600 text-white font-bold rounded px-8 py-3">
          Restart your membership
        </button>
      </div>
    </div>
  );
};
export default Hero;
