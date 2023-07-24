import { Link } from "react-router-dom";
import { useColleges } from "../../hooks/useColleges";
import College from "../Card/College";

const FeaturesCollege = () => {
  const [data] = useColleges();

  return (
    <div>
      <section className="py-10 bg-gray-100 flex flex-col">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center bg-green-600 text-white w-fit px-8 py-3 mx-auto">
            Popular Colleges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.slice(0, 3)?.map((college) => (
              <College key={college.id} college={college} />
            ))}
          </div>
        </div>
        <Link className="w-fit mx-auto my-6" to="/colleges">
          <button className="btn btn-neutral button ">More</button>
        </Link>
      </section>
    </div>
  );
};
export default FeaturesCollege;
