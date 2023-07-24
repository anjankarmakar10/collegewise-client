import SearchInput from "../Navbar/SearchInput";

const Hero = () => {
  return (
    <section className="showcase">
      <video src="/banner.mp4" muted loop autoPlay></video>
      <div className="text relative z-30 text-white text-center md:text-start px-3 md:p-24 pt-28">
        <h2 className="text-5xl md:text-7xl uppercase font-extrabold ">
          Discover Your
        </h2>
        <h3 className="text-4xl md:text-6xl uppercase font-bold">
          Dream College
        </h3>
        <p>
          Welcome to CollageWise, your gateway to explore and book college
          services and facilities with ease. Find the perfect college for your
          educational journey. Join our community and make informed decisions as
          you embark on your path to higher education. Start your adventure with
          CollageWise today!
        </p>
        <SearchInput />
      </div>
      <div className="shadow"></div>
    </section>
  );
};
export default Hero;
