import React, { useEffect } from 'react';
import { use } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { useState } from 'react';
import { toast } from 'react-toastify';

const MyAcceptedTasks = () => {
    const {user}= use(AuthContext);
    const [tasks,setTasks]= useState([]);

useEffect(()=>{

    fetch(`http://localhost:5001/acceptedTasks?email=${user?.email}`).then(res=>res.json()).then(data=>{
        console.log(data);
        setTasks(data);
    })
},[user]);

const handleRemove = (id)=>{
    fetch(`http://localhost:5001/acceptedTasks/${id}`,{
        method: 'DELETE',
    }).then(res=>res.json()).then(()=>{
        setTasks(tasks.filter(task=>task._id !== id));
        toast.success('Removed Successfully ')
    })
}

    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text text-center">
         Your Accepted Tasks
        </h2>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">
            No accepted tasks yet.
          </p>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="border flex items-center justify-between rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={task.coverImage}
                    alt={task.title}
                    className="h-20 w-28 object-cover rounded-lg"
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {task.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{task.category}</p>
                  </div>
                </div>

                <div className="flex items-center flex-col md:flex-row  gap-2">
                  <button
                    onClick={() => handleRemove(task._id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    ✅ Done
                  </button>
                  <button
                    onClick={() => handleRemove(task._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    ❌ Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default MyAcceptedTasks;