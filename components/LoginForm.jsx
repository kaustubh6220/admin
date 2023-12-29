"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard"); 

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="container mx-auto bg-white rounded-lg shadow-md flex">
        <form onSubmit={handleSubmit} className="login-form w-1/2 p-8">
          <div className="wrap-login100 text-center mb-4">
            <img src="assets/mit.jpg" alt="IMG" className="max-w-full" />
          </div>
          <h1 className="text-3xl text-gray-800 font-semibold">Member Login</h1>
          <div className="wrap-input100 mt-4">
            <select
              id="userRole"
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="mentor">Mentor</option>
              <option value="mentee">Mentee</option>
              <option value="admin">Admin</option>
              <option value="class_teacher">Class Teacher</option>
            </select>
          </div>
          <div className="wrap-input100 mt-4">
            <input
              className="input100 w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setEmail(e.target.value)}
              type="text" 
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="wrap-input100 mt-2">
            <input
              className="input100 w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="pass"
              placeholder="Password"
            />
          </div>
          <div className="container-login100-form-btn mt-4 text-center">
            <button className="login100-form-btn bg-gray-800 text-white p-2 rounded cursor-pointer">
              Login
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
          </div>
          <div className="text-center pt-2">
            <Link href={"#"} className="text-blue-500 text-sm no-underline">
              <span className="text-gray-600 text-sm">Forgot Password?</span>
            </Link>
          </div>
          <div className="text-center pt-8">
            <Link
              className="text-500 text-sm no-underline"
              href={"/register"}
            >
              Don't have an account?
              <span className="underline">Register</span>
            </Link>
          </div>
        </form>
        <div className="login-image w-1/2">
          <img
            src="assets/IT_Building2.jpg"
            alt="IMG"
            className="max-w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
