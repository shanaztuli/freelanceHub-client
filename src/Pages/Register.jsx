import React, { useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { use } from "react";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [passError, setPassError] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  //


const handleRegister = (e) => {
  e.preventDefault();

  const form = e.target;
  const photo = form.photo.value;
  const email = form.email.value;
  const name = form.name.value;
  const password = form.password.value;

  // Password validation
  const validPassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  if (!validPassword.test(password)) {
    return setPassError(
      "Password must be at least 6 characters long and must contain one uppercase and one lowercase letter."
    );
  } else {
    setPassError("");
  }


  createUser(email, password)
    .then((result) => {
      const user = result.user;

    
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
        
          setUser({
            ...user,
            displayName: name,
            photoURL: photo,
          });

          toast.success("You Registered Successfully!");
          navigate("/");
        })
        .catch((error) => {
          toast.error("Profile update failed: " + error.message);
        });
    })
    .catch((error) => {
      toast.error(error.message);
    });
};
  //
  return (
    <div>
      <div className="flex justify-center items-center  my-4  ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h1 className="font-semibold text-2xl text text-center">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />

              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-5 top-[36px]cursor-pointer z-50"
                >
                  {show ? <IoEyeOff /> : <FaEye />}
                </span>
              </div>

              {passError && <p className="text-sm  text-error">{passError}</p>}

              <button type="submit" className="btn btn-primary mt-3">
                Register Now
              </button>
              <p className="font-semibold text-center pt-5">
                Already Have An Account ?{" "}
                <Link to="/auth/login" className="text-red-600">
                  Login Now
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
