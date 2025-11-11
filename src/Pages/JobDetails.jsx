import React from "react";
import { use } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import Spinner from "../Components/Spinner.jsx/Spinner";
import { toast } from "react-toastify";

const JobDetails = () => {
  const job = useLoaderData();
  const {user,loading} = use(AuthContext);

 if (loading) {
   return (
     <div className="text-center mt-10">
       <Spinner></Spinner>
     </div>
   );
 }


 const handleAcceptJob = ()=>{
  const acceptedJob = {
    jobId:job._id,
    title:job.title,
    category:job.category,
    postedBy:job.postedBy,
    summary:job.summary,
    coverImage:job.coverImage,
    acceptedBy: user?.email,
    acceptedDate : new Date().toISOString()
  };
  fetch("http://localhost:5001/acceptedTasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(acceptedJob),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      toast.success("You have accepted this job");
    })
    .catch((err) => {
      console.log(err);
      toast.error("something Went wrong");
    });
 }

  return (
    <div className="min-h-screen border-2 border-gray-400  py-10 px-4 flex justify-center items-center">
      <div className=" shadow-2xl rounded-3xl max-w-5xl w-full overflow-hidden border border-gray-200">
        <div className="relative">
          <img
            src={job.coverImage}
            alt={job.title}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-black border-2 border-gray-400 bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-4">
              {job.title}
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-10 space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="badge badge-lg bg-blue-200 text-blue-700 font-semibold px-4 py-2 rounded-full">
              {job.category}
            </span>
            <span className="text-gray-500">
              Posted by{" "}
              <span className="font-semibold text-gray-800">
                {job.postedBy}
              </span>
            </span>
            <span className="text-gray-400 text-sm">
              {new Date(job.postedDate).toLocaleString()}
            </span>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">{job.summary}</p>

          {/* Contact Info */}
          <div className="bg-gray-100 p-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Job Information
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <span className="font-medium text-gray-800">Posted By:</span>{" "}
                {job.postedBy || "Anonymous User"}
              </li>
              <li>
                <span className="font-medium text-gray-800">Category:</span>{" "}
                {job.category}
              </li>
              <li>
                <span className="font-medium text-gray-800">Posted On:</span>{" "}
                {new Date(job.postedDate).toLocaleDateString()}
              </li>
              <li>
                <span className="font-medium text-gray-800">Status:</span>{" "}
                <span className="text-green-600 font-semibold">
                  Open for Applications
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/allJobs"
              className="btn rounded-full border border-gray-300 hover:border-blue-400 hover:text-blue-600"
            >
              Back to All Jobs
            </Link>

            <button onClick={handleAcceptJob} className="btn btn-primary rounded-full px-6 py-3 hover:from-blue-600 hover:to-indigo-700">
              Accept Job
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
