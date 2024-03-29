import React, { useState } from 'react';
import { FaEnvelope, FaTimes, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useInnerSize } from '../../../hook/useInnerSize';
import SignUpWithSocialMedia from '../shared/SignUpWithSocailMedia';

const Login = ({ handleClose }) => {
  const { width } = useInnerSize();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div>
      <div className='my-4'>
        <div className='py-2  px-5 pb-6 border-b-2 relative text-black flex justify-between items-center'>
          <div></div>
          <h2 className='text-center text-3xl font-medium'>Sign In</h2>
          {width > 768 ? (
            <FaTimes
              className='text-2xl font-light text-primary-black  cursor-pointer'
              onClick={handleClose}
            />
          ) : (
            <div />
          )}
        </div>
        <div className='w-11/12 mx-auto  mt-8 '>
          <form className='mb-3' onSubmit={submitHandler}>
            <div className='pb-2 mb-2 border px-4 py-3 rounded'>
              <p className='font-normal text-xs text-gray-900 '>Email</p>

              <div className='flex justify-between items-center text-lg'>
                <input
                  type='email'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='w-full pr-2 py-1 outline-none font-medium'
                />
                <div className='flex items-center gap-x-1 text-sm text-black cursor-pointer'>
                  <FaEnvelope />
                </div>
              </div>
            </div>

            <div className='mb-2 pb-3 border px-4 py-3 rounded'>
              <p className='font-normal text-xs text-gray-900 '>Password</p>

              <div className='flex justify-between items-center text-lg'>
                <input
                  type='email'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className='w-full pr-2 py-1 outline-none font-medium'
                />
                <div className='flex items-center gap-x-1 text-base text-red-500 cursor-pointer'>
                  <FaTimesCircle />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between mt-4'>
              <div className='flex gap-x-2 items-center text-black font-medium'>
                <label className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 bg-gray-600  border-gray-300 focus:ring-3 focus:ring-red-300 rounded'
                  />
                  <span className='ml-2 text-gray-700'>Remember me</span>
                </label>
              </div>
              <Link
                to='/auth/password-recover'
                className='text-red-500 cursor-pointer'
              >
                Recover password
              </Link>
            </div>
            <div className='mt-5'>
              <button
                type='submit'
                className='w-full text-lg font-medium py-3 rounded-lg bg-primary text-white'
              >
                Sign In
              </button>
            </div>
          </form>
          <div>
            <SignUpWithSocialMedia />
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-1 bg-gray-200 py-4 text-primary-black'>
        <p>You don't have a account? </p>
        <Link to='/auth/register-1' className='font-medium cursor-pointer'>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
