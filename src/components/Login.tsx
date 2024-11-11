import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

interface LoginProps {
  onSubmit?: (email: string) => void;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const Login: React.FC<LoginProps> = ({ onSubmit, setUser }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
    setUser({ user: true });
    navigate("/home");
  };

  const handleGoogleSuccess = (response: any) => {
    const { credential } = response;
    // You can send the credential to your backend server to validate
    // and get more user details (like the access token)
    console.log("Google login successful!", credential);
    setUser({ credential });
    navigate("/home");
  };

  const handleGoogleFailure = (error: any) => {
    console.error("Google login failed", error);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
        <div className="relative w-96 h-96">
          {/* Main green square with glow */}
          <div className="absolute inset-0 bg-green-400 rounded-lg transform rotate-12 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 opacity-50 rounded-lg"></div>
          </div>

          {/* Blue platform base */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-16 bg-blue-600 rounded-lg shadow-xl"></div>

          {/* Floating elements */}
          <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-black rounded-sm transform rotate-45 shadow-lg"></div>
          <div className="absolute bottom-24 right-24 w-8 h-8 bg-blue-600 rounded-sm transform -rotate-12 shadow-md"></div>
          <div className="absolute bottom-32 right-32 w-6 h-6 bg-blue-600 rounded-sm transform rotate-12 shadow-md"></div>

          {/* Sparkles */}
          <div className="absolute top-12 right-12 w-3 h-3 bg-white transform rotate-45"></div>
          <div className="absolute bottom-24 left-12 w-2 h-2 bg-white transform rotate-45"></div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-xl font-extrabold text-gray-900 text-center">
              Create a free account to discover your personalized learning path
            </h2>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Social Login Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleFailure}
                useOneTap
              />

              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="flex items-center">
                  <img
                    className="h-5 w-5 mr-2"
                    src="https://www.facebook.com/favicon.ico"
                    alt=""
                  />
                  <span>Facebook</span>
                </span>
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Email Input */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Login
              </button>
            </div>

            <div className="text-xs text-center text-gray-600">
              By clicking above, I agree to Brilliant's{" "}
              <Link
                to="/terms"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Privacy Policy
              </Link>
            </div>
          </form>

          <div className="text-sm text-center">
            Doesn't have account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
