import React from 'react';
import Banner from '../Components/Banner';
import TopCategories from '../Components/TopCategories';
import AboutPlatform from '../Components/AboutPlatform';
import { useLoaderData } from 'react-router';
import JobCard from '../Components/JobCard';

const Home = () => {
  const latestData = useLoaderData();
    return (
      <div>
        <Banner></Banner>
        <h1 className="text text-center font-bold text-3xl my-3 mt-4 ">
          All Latest Jobs{" "}
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-700 mb-6">
          Stay ahead with the newest job opportunities on our platform! Discover
          the latest freelance projects, explore diverse categories, and connect
          with top employers to kickstart your next exciting venture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-3">
          {latestData.map((job, index) => (
            <JobCard key={index} job={job}></JobCard>
          ))}
        </div>
        <TopCategories></TopCategories>
        <AboutPlatform></AboutPlatform>
      </div>
    );
};

export default Home;