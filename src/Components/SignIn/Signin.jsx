import React from 'react';

const Signin = () => {
    const handlesignin=event=>{
        event.preventDefault()
      const form=event.target;
      const name=form.name.value;
      const email=form.email.value;
      const password=form.password.value;
      const newsignin={name,email,password}
      console.log(newsignin)
    }
    return (
        <div className='flex flex-col  justify-center items-center space-y-7'>
            <div>
                <h1 className='text-black text-xl font-bold'>Sign In</h1>
            </div>
           <div className="card bg-base-100 flex justify-center items-center w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlesignin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
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
    );
};

export default Signin;