import React from 'react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthProvider';
import { use } from 'react';
import { IoEyeOff } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {

  const { googleSignIn, logIn, setUser } = use(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        toast("You Login Successfully", result.user);

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;

        // console.log(user);

        toast.success("You Registered Successfully!", user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast('something went wrong',error);
      });
  };
  //
 





    return (
      <div className="flex justify-center my-4 items-center  ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h1 className="font-semibold text text-2xl text-center">
            Login your account
          </h1>
          <form onSubmit={handleSignIn} className="card-body">
            <fieldset className="fieldset">
              {/* email */}

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                className="input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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

            <div >Forget Password?</div>

              <button
                type="submit"
                className="btn btn-primary mt-3"
              >
                Login
              </button>
              <button
                type="submit"
                onClick={handleGoogleSignIn}
                className="btn bg-linear-to-r from-[#f4f3f1] to-[#f8f1e6]  btn-outline w-full"
              >
                <FcGoogle size={24} /> Login with Google
              </button>
              <p className="font-semibold text-center pt-5">
                Don't Have An Account ?{" "}
                <Link to="/auth/register" className="text-red-600">
                  SignUp
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
        {/* <LoadingSpinner></LoadingSpinner> */}
      </div>
    );
};

export default Login;