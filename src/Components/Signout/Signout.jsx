import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Authprovider';

const Signout = () => {
    const {createuser}=useContext(Authcontext)
    const handlesigninout=event=>{
        event.preventDefault()
      const form=event.target;
      const email=form.email.value;
      const password=form.password.value;
      const newsignin={email,password}
      console.log(newsignin)
      createuser(email,password)
    }
    return (
        <div>
                   <div className='flex flex-col  justify-center items-center space-y-7'>
            <div>
                <h1 className='text-black text-xl font-bold'>Sign In</h1>
            </div>
           <div className="card bg-base-100 flex justify-center items-center w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlesigninout} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
      
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignIn</button>
        </div>
      </form>
    </div>
        </div>

           
            <NavLink className="btn" to="/signin">Signin</NavLink>
        </div>
    );
};

export default Signout;