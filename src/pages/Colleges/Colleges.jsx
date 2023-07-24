import College from "../../components/Card/College";
import { useColleges } from "../../hooks/useColleges";

const Colleges = () => {
  const [data] = useColleges();
  return (
    <section className="py-20 bg-gray-100 flex flex-col">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((college) => (
            <College key={college.id} college={college} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Colleges;
