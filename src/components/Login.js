import { checkValidData } from '../utils/validate';
import Header from './Header';
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  function handleButtonClick() {
    const message = checkValidData(email.current.value, password.current.value)

    if (message) {
      setErrorMessage(message);
      return;
    }

    if (isSignInForm) {

      signInWithEmailAndPassword(auth, email.current.value, password.current.value);
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid,
                email,
                displayName
              })
            );
          });
        })
        .catch((error) => {
          setErrorMessage(`${error.code} : ${error.message}`)
        });
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/background-img.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Login Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <div className="bg-black bg-opacity-75 rounded-md px-16 py-16">
            <h1 className="text-white text-3xl font-bold mb-8">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {!isSignInForm && (
                <div>
                  <input
                    ref={name}
                    type="text"
                    placeholder="Full Name"
                    name="full_name"
                    autoComplete='off'
                    className="w-full px-4 py-4 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-white focus:outline-none placeholder-gray-400"
                  />
                </div>
              )}

              <div>
                <input
                  ref={email}
                  type="email"
                  placeholder="Email or phone number"
                  name="email"
                  className="w-full px-4 py-4 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-white focus:outline-none placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full px-4 py-4 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-white focus:outline-none placeholder-gray-400"
                />
              </div>

              <p className='text-red-500'>{errorMessage}</p>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-md transition duration-200"
                onClick={handleButtonClick}
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-3 accent-gray-400 bg-gray-700 border-gray-600 rounded focus:ring-0 focus:ring-offset-0"
                  />
                  <span className="text-gray-400">Remember me</span>
                </label>
                <button className="text-gray-400 hover:underline hover:text-white transition duration-200">
                  Need help?
                </button>
              </div>
            </div>

            <div className="mt-8 text-gray-400 text-sm">
              <p>
                {isSignInForm ? "New to Netflix?" : "Already a member"}
                <button className="text-white hover:underline ml-1 transition duration-200" onClick={toggleSignInForm}>
                  {isSignInForm ? "Sign Up now" : "Sign In"}
                </button>
              </p>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <button className="text-blue-500 hover:underline ml-1 transition duration-200">
                  Learn more
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;