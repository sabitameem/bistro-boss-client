import { Helmet } from "react-helmet-async";
import signUpPicture from "../../assets/others/authentication1.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
    const {createUser}= useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
    };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>

      <div className="hero min-h-screen">
        <div className="hero-content shadow-2xl flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <img src={signUpPicture} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="input input-bordered"
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true,minLength: 6 })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type =="required" && <span className="text-red-500">Password is required</span>}
                {errors.password?.type =="minLength" && <span className="text-red-500">Password must be 6 characters</span>}
              </div>
              <div className="form-control mt-6">
              <input  className={'bg-custom-color text-white py-2 rounded-lg px-2 '} type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="text-custom-color text-center">Already Registered?<Link to='/login'><span className="font-semibold" >Go to Login Page</span></Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
