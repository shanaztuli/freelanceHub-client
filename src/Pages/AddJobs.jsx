import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner.jsx/Spinner";

const AddJobs = () => {
    const {user,loading} = use(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();


   
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;
   const postedDate = new Date().toISOString();
     const postedBy = form.postedBy.value;
    const userEmail = form.userEmail.value;
     const formData={
        title,category,summary,coverImage,postedDate,postedBy,userEmail
    }
fetch("http://localhost:5001/jobs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },body:JSON.stringify(formData)
}).then(res=>res.json()).then(data=>{
    // console.log(data)
    toast('You sussceefully added The Job');
}).catch(error =>{
    toast('Please Make sure you provided all Information correctly' ,   error);
})
   
    form.reset();
  };

 if (loading) {
   return (
     <div className="text-center mt-10">
       <Spinner></Spinner>
     </div>
   );
 }


  return (
    <div className="min-h-screen  flex flex-col justify-center items-center py-10 px-4">
      <div className=" shadow-2xl rounded-3xl w-full max-w-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">
          Add New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Job Title */}
          <div>
            <label className="label font-semibold ">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter job title"
              className="input w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* posted by */}
          <div>
            <label className="label font-semibold ">
              Posted By
            </label>
            <input
              type="text"
              name="postedBy"
              defaultValue={user?.displayName || ""}
              placeholder="Enter your name"
              className="input w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-semibold ">
              Category
            </label>
            <select
              name="category"
              required
              defaultValue=""
              className="select w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Designing">Graphics Designing</option>
              <option value="Writing & Translation">
                Writing & Translation
              </option>
              <option value="Video & Animation">Video & Animation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Job Summary */}
          <div>
            <label className="label font-semibold ">
              Job Summary
            </label>
            <textarea
              name="summary"
              rows="5"
              placeholder="Enter job description"
              required
              className="textarea w-full rounded-2xl border-gray-300 focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          {/* user email */}

          <div>
            <label className="label font-semibold ">Email</label>
            <input
              type="email"
              name="userEmail"
              defaultValue={user?.email || ""}
              placeholder="Enter your email"
              className="input w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="label font-semibold ">
              Cover Image URL
            </label>
            <input
              type="url"
              name="coverImage"
              required
              placeholder="https://example.com/image.jpg"
              className="input w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/*  Button */}
          <button
            type="submit"
            className="btn w-full btn-primary hover:bg-blue-700 text-white font-bold py-3 rounded-2xl transition-colors"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
