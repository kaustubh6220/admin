"use client";



import Link from "next/link";
import {useState} from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary.");
            return;
        }

        try {
            const resUserExists = await fetch("api/userExists", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
              setError("User already exists.");
              return;
            }


            const res=await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,

                }),
            });
            if (res.ok) {
                const form=e.target;
                form.reset();
                router.push("/");
            }
            else{
                console.log("User Registration Failed.");
            }
        } catch (error) {
            console.log("Error during Registration: ",error);
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
              <select id="userRole" className="w-full p-2 border border-gray-300 rounded">
                <option value="mentor">Mentor</option>
                <option value="mentee">Mentee</option>
                <option value="admin">Admin</option>
                <option value="class_teacher">Class Teacher</option>
              </select>
            </div>
            <div className="wrap-input100 mt-4">
              <input
                className="input100 w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                placeholder="Full Name"
              />
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
                Register
              </button>
            </div>
            {error && (
                <div className="bg-red-500 text-white w-fittext-sm py-1 px-3 rounded-md mt-2">
                    {error}
                </div>
            )}
            <div className="text-center pt-8">
              <Link className="text-sm mt-3 text-right" href={"/"}>
                Already have an account?
                <span className="underline">Login</span>
              </Link>
            </div>
          </form>
          <div className="login-image w-1/2">
            <img src="assets/IT_Building2.jpg" alt="IMG" className="max-w-full h-full" />
          </div>
        </div>
      </div>
    );
  }
  