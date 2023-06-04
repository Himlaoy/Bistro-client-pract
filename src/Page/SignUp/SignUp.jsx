import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold">sign up now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="URL" name='photo' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            
                            <input type="submit" className="btn btn-primary" value="SignUp" />
                        </div>
                    </form>
                    <div className='w-2/3 mx-auto py-4'>
                        <p className='text-center'>Already have an account? please <Link className='text-purple-400' to={'/login'}>Login</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;