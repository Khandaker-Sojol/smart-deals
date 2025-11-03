import React, { use } from "react";
import googleLogo from "/images/icon-google.png";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Registration = () => {
  const { signInWithGoogle, createUser } = use(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        // create user in database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after user save", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    console.log({ name, email, password, photo });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-[92vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-[300px] md:w-[500px] shrink-0 shadow-2xl md:py-10">
            <div className="card-body">
              <div className="text-center space-y-2">
                <h1 className=" text-4xl md:text-5xl font-bold">Register </h1>
                <p className="text-[16px]">
                  Already have an account?{" "}
                  <Link to="/auth/login" className="text-gradient ">
                    Login Now
                  </Link>
                </p>
              </div>
              <form onSubmit={handleSignUp}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    placeholder="Enter Your Name"
                  />
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
                  <label className="label">Image-URL</label>
                  <input
                    type="text"
                    name="photo"
                    className="input w-full"
                    placeholder="Enter Your image URL"
                  />
                  <button className="btn btn-primary mt-4">Register</button>
                </fieldset>
              </form>
              <div className="divider">OR</div>

              <button className="btn" onClick={handleGoogleSignIn}>
                {" "}
                <img src={googleLogo} alt="" />
                Sign Up With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
