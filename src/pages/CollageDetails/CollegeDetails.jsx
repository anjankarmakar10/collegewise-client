import { useParams } from "react-router-dom";
import { useColleges } from "../../hooks/useColleges";

const CollegeDetails = () => {
  const { id } = useParams();

  const [data] = useColleges();
  const college = data?.find((item) => item.id === +id);

  return (
    <div className="bg-white">
      {/* College Banner */}
      <div
        className="h-96 bg-cover bg-center bg-gray-600 flex "
        style={{ backgroundImage: `url(${college?.image})` }}
      >
        <div className="container   h-fit mt-auto mb-16 bg-[#262019] w-fit px-8 py-4">
          <h1 className="text-white text-4xl font-semibold">{college?.name}</h1>
          <h6 className="text-white text-xl font-medium">
            {college?.details?.about}
          </h6>
        </div>
      </div>

      {/* Admission Process */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Admission Process</h2>
          <p className="text-gray-600">{college?.details?.admissionProcess}</p>
          <div className="form-control w-80 mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Details */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Events Details</h2>
          <p className="text-gray-600">{college?.events.join(", ")}</p>
        </div>
      </section>

      {/* Research Works */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Research Works</h2>
          <p className="text-gray-600">{college?.researchHistory}</p>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Sports Categories</h2>
          <p className="text-gray-600">{college?.sports.join(", ")}</p>
        </div>
      </section>
    </div>
  );
};
export default CollegeDetails;
