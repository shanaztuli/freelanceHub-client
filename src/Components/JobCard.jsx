import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/jobDetails/${job._id}`); 
  };

  return (
    <div className="flex flex-col md:flex-row  shadow-md rounded-lg mt-4 overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
      <div className="md:w-1/3 flex-shrink-0">
        <img
          src={job.coverImage}
          alt={job.title}
          className="w-full h-48 md:h-full object-cover rounded-lg"
        />
      </div>

      <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0 flex flex-col justify-between">
        <h2 className="text-2xl font-bold  mb-2">{job.title}</h2>

        <p className="text-sm  mb-1">
          <span className="font-semibold">Category:</span> {job.category}
        </p>
        <p className="text-sm  mb-3">
          <span className="font-semibold">Posted By:</span> {job.postedBy}
        </p>

        <p className="text-gray-400 text-sm mb-4">
          {job.summary.length > 150
            ? job.summary.substring(0, 150) + "..."
            : job.summary}
        </p>

        {/* View Details */}
        <button
          onClick={handleViewDetails}
          className="self-start btn-primary  px-4 py-2  "
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
