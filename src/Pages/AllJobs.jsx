import React from 'react';
import { useLoaderData } from 'react-router';
import JobCard from '../Components/JobCard';

const AllJobs = () => {
    const data = useLoaderData();
    console.log(data);
    return (
      <div className="py-3">
        <h1 className="text text-center font-bold text-3xl mb-3 ">
          All Available Jobs{" "}
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-700 mb-6">
          Browse and apply for your desired jobs easily on our platform. Find
          top freelance opportunities across multiple categories and start your
          next project today!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-3">
          {data.map((job, index) => (
            <JobCard key={index} job={job}></JobCard>
          ))}
        </div>
      </div>
    );
};

export default AllJobs;