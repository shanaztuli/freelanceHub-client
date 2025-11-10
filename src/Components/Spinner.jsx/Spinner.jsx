import React from "react";
import { Loader } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 flex justify-center items-center">
        <Loader className="text-blue-600" />
      </div>
    </div>
  );
};

export default Spinner;
