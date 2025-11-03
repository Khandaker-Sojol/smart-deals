import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import googleLogo from "/images/icon-google.png";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { signInWithGoogle, signInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state;

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
        alert("Sign in Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-[92vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-[300px] md:w-[500px] shrink-0 shadow-2xl md:py-10">
          <div className="card-body">
            <div className="text-center space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">Login </h1>
              <p className="text-[16px]">
                Don't Have an account?{" "}
                <Link to="/auth/register" className="text-gradient ">
                  Register Now
                </Link>
              </p>
            </div>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="example@gmail.com"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="**********"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-primary mt-4">Login</button>
              </fieldset>
            </form>
            <div className="divider">OR</div>

            <button className="btn" onClick={handleGoogleSignIn}>
              {" "}
              <img src={googleLogo} alt="" />
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
