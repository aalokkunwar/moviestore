import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Loginpage = () => {
  const [signState, setSignState] = useState('Login');
  const [passType, setPassType] = useState('password');
  const [cpassType, setCpassType] = useState('password');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isCPasswordVisible, setIsCPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((now) => !now);
    setPassType((now) => (now === 'password' ? 'text' : 'password'));
    
  };

  const toggleCPasswordVisibility = () => {
    setIsCPasswordVisible((now) => !now);
   
    setCpassType((now) => (now === 'password' ? 'text' : 'password'));
  };

  return (
    <div className="h-[81vh] text-5xl text-blue-900">
      <div className="mt-1 pt-14">
        <form className="max-w-md mx-auto rounded-md shadow-2xl shadow-purple-900 p-5">
          <div>
            <h5 className="text-center text-4xl font-semibold py-2 mb-4">{signState}</h5>
            <hr />
          </div>

          <InputField
            type="text"
            name="floating_username"
            id="floating_username"
            label="Username"
            required
          />

          {signState === 'Signup' && (
            <InputField
              type="email"
              name="floating_email"
              id="floating_email"
              label="Email address"
              required
            />
          )}

          <div className="relative z-0 w-full mb-5 group">
            <input
              type={passType}
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <span
              className="text-[22px] absolute end-1 cursor-pointer top-3"
              onClick={togglePasswordVisibility}
              role="button"
              aria-label={isPasswordVisible ? 'Hide Password' : 'Show Password'}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {signState === 'Signup' && 
            <div className="relative z-0 w-full mb-5 group">
            <input
              type={cpassType}
              name="con_floating_password"
              id="con_floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="con_floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Confirm Password
            </label>
            <span
              className="text-[22px] absolute end-1 cursor-pointer top-3"
              onClick={toggleCPasswordVisibility}
              role="button"
              aria-label={isCPasswordVisible ? 'Hide Password' : 'Show Password'}
            >
              {isCPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          }

          <div className="w-full">
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {signState}
            </button>
          </div>

          <div className="text-[14px] py-2 mt-3">
            {signState === 'Signup' ? (
              <p>
                Already have an account?{' '}
                <span
                  className="font-semibold cursor-pointer underline"
                  onClick={() => setSignState('Login')}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                New to MovieStore?{' '}
                <span
                  className="cursor-pointer underline font-semibold"
                  onClick={() => setSignState('Signup')}
                >
                  Signup
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ type, name, id, label, required }) => (
  <div className="relative z-0 w-full mt-4 mb-5 group">
    <input
      type={type}
      name={name}
      id={id}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required={required}
    />
    <label
      htmlFor={id}
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

export default Loginpage;
