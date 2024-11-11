import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

interface SignUpFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: string;
}

interface SignUpPageProps {
  onSubmit?: (data: SignUpFormData) => void;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const SignUp: React.FC<SignUpPageProps> = ({ onSubmit, setUser }) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
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
          <div className="absolute inset-0 bg-green-400 rounded-lg transform rotate-12">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 opacity-50 rounded-lg"></div>
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-black rounded-sm transform rotate-45"></div>
          </div>

          {/* Blue platform base */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-16 bg-blue-600 rounded-lg"></div>

          {/* Floating elements */}
          <div className="absolute bottom-24 right-24 w-8 h-8 bg-blue-600 rounded-sm transform -rotate-12"></div>
          <div className="absolute bottom-32 right-32 w-6 h-6 bg-blue-600 rounded-sm transform rotate-12"></div>

          {/* Sparkles */}
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white transform rotate-45"></div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Create a free account to discover your personalized learning path
            </h2>
          </div>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
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
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="alexsmith.mobbin@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ?
                </button>
              </div>

              {/* Password Input */}
              <input
                type="password"
                name="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              {/* Name Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Age Input */}
              <div className="relative">
                <input
                  type="number"
                  name="age"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                Sign up
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

            <div className="text-sm text-center">
              Existing user?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
