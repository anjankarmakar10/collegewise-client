import { useColleges } from "../../hooks/useColleges";
import Collage from "../Card/Collage";

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
            {data?.slice(0, 3).map((college) => (
              <Collage key={college.id} college={college} />
            ))}
          </div>
        </div>
        <button className="btn btn-neutral button w-fit mx-auto my-6">
          More
        </button>
      </section>
    </div>
  );
};
export default FeaturesCollege;
