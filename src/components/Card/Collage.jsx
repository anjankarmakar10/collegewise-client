const Collage = ({ college }) => {
  return (
    <article className="p-6 bg-white shadow-md rounded-md">
      <img
        src={college?.image}
        alt={college?.name}
        className="w-full h-[240] object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{college?.name}</h3>
      <p className="text-gray-600 mb-2">
        Admission Dates: {college?.admissionDates}
      </p>
      <p className="text-gray-600 mb-4">Events: {college?.events.join(", ")}</p>
      <p className="text-gray-600 mb-4">
        Research History: {college?.researchHistory}
      </p>
      <p className="text-gray-600 mb-4">Sports: {college?.sports.join(", ")}</p>
      <button className="btn btn-primary button">Details</button>
    </article>
  );
};
export default Collage;
