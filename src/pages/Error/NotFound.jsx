import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen max-w-3xl  mx-auto flex flex-col-reverse md:flex-row items-center text-black justify-center ">
      <div className="flex-1">
        <h3 className="my-5 text-4xl font-medium">Oops!</h3>
        <p className="max-w-xs mb-5 text-xl">
          We can't seem to find the page you're looking for. You can try
          retracing your steps or return to the homepage.
        </p>

        <p className="text-sm text-gray-400 font-medium">Error Code: 404</p>

        <Link to={"/"}>
          <button className=" text-white mt-4 text-sm uppercase bg-[#228891] rounded px-4 py-[6px] w-52">
            GO TO HOME
          </button>
        </Link>
      </div>
      <div className="flex-1">
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="" />
      </div>
    </section>
  );
};

export default NotFound;
