import React from 'react';
import { use } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const MyPostedJobs = () => {
    const {user,loading}= use(AuthContext);
    const [jobs,setJobs]= useState([]);
    const [updatingJob,setUpdatingJob]=useState(null);
    const [updateForm,setUpdateForm]= useState({
      title:'',
       category:'',
       summary:'',
       coverImage:'',
    })

    //
    useEffect(()=>{
   if(user?.email){
    fetch(
      `http://localhost:5001/myjobs?email=${user.email}`
    ).then(res=>res.json()).then(data=> setJobs(data)).catch(err=>{
        // console.log(err);
    })
   }
    },[user]);

    //open model with job data function
    const handleEditClick = (job)=>{
        setUpdatingJob(job);
        setUpdateForm({
            title:job.title,
            category:job.category,
            summary:job.summary,
            coverImage:job.coverImage,
        })
    };

    const handleChange = (e)=>{
        const {name,value}= e.target;
        setUpdateForm((prev)=>({...prev,[name]:value}))
    };

    //update 
const handleUpdate = ()=>{
    fetch(`http://localhost:5001/jobs/${updatingJob._id}`,{
        method:"PUT",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(updateForm),
    }).then(res=>res.json()).then(data=>{

        // console.log(data);
        const updatedJobs = jobs.map(job=>job._id == updatingJob._id ? {...job,...updateForm}: job);
        setJobs(updatedJobs);
        setUpdatingJob(null);
         Swal.fire("Success", "Job updated successfully!", "success");

    }).catch(err=>{
        // console.error(err);
    })
}



    //delete

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5001/jobs/${id}?email=${user.email}`, { method: "DELETE" })
            .then((res) => res.json())
            .then(() => {
              setJobs(jobs.filter((job) => job._id !== id));
              Swal.fire("Deleted!", "Job has been deleted.", "success");
            });
        }
      });
    };

    return (
      <div className="py-6 px-4">
        <h1 className="text-center font-bold text-3xl text mb-4">My Posted Jobs</h1>
        {jobs.length === 0 ? (
          <p className="text-center text-gray-500">
            You have not posted any jobs.
          </p>
        ) : (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="border rounded-xl p-4 shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-gray-300">{job.category}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => handleEditClick(job)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(job._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Update Modal */}
        {updatingJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="border-blue-600 border-2 rounded-xl p-6 w-full max-w-md">
              <h2 className="text-xl text-white  font-bold mb-4">Update Job</h2>
              <input
                type="text"
                name="title"
                value={updateForm.title}
                onChange={handleChange}
                placeholder="Job Title"
                className="input w-full mb-3"
              />
              <select
                name="category"
                value={updateForm.category}
                onChange={handleChange}
                className="select w-full mb-3"
              >
                <option value="">Select category</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphics Designing">Graphics Designing</option>
                <option value="Writing & Translation">
                  Writing & Translation
                </option>
                <option value="Video & Animation">Video & Animation</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="summary"
                value={updateForm.summary}
                onChange={handleChange}
                rows="4"
                placeholder="Summary"
                className="textarea w-full mb-3"
              />
              <input
                type="url"
                name="coverImage"
                value={updateForm.coverImage}
                onChange={handleChange}
                placeholder="Cover Image URL"
                className="input w-full mb-4"
              />
              <div className="flex justify-end gap-2">
                <button
                  className="btn btn-gray px-4 py-1 rounded"
                  onClick={() => setUpdatingJob(null)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary px-4 py-1 rounded"
                  onClick={handleUpdate}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default MyPostedJobs;