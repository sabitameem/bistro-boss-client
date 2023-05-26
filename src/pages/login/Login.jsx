import { Helmet } from "react-helmet-async";
import loginPicture from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'




const Login = () => {
  const [disabled,setDisabled]=useState(true)
  const {signIn}=useContext(AuthContext)
  const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])



    const handleLogin =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        console.log(email, password)
        
        signIn(email,password)
        .then(result =>{
            const user =result.user;
            console.log(user)
            Swal.fire({
                title: 'Login Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, { replace: true });
        })
    }



    const handleValidateCaptcha = (e) => {
        const user_captcha_value=e.target.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)
        }
   
        else {
            
            setDisabled(true);
        }
    }



  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content shadow-2xl flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
         
            <img src={loginPicture} alt="" />
          </div>
          <div className="card  md:w-1/2 max-w-sm  bg-base-100">
            <h2 className="text-3xl font-bold text-center">Login</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate  />
                </label>
                <input
                 onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
               
                
              </div>
              <div className="form-control mt-6">
                
                <input disabled={disabled}  className={`bg-custom-color text-white py-2 rounded-lg px-2 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`} type="submit" value="Sign In" />
              </div>
            </form>
            <p className="text-custom-color text-center">New here?<Link to='/signUp'><span className="font-semibold" >Create a New Account</span></Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
