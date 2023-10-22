import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user == "admin") {
      axios
        .post("https://portal-k7lh.onrender.com/admin/login", inputs)
        .then((res) => {
          sessionStorage.setItem("token", JSON.stringify(res.data.token));
          sessionStorage.setItem("info", JSON.stringify(res.data.user));
          alert(res.data.message);
          navigate("/admin/dashboard");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else if (user == "teacher") {
      axios
        .post("https://portal-k7lh.onrender.com/teacher/login", inputs)
        .then((res) => {
          sessionStorage.setItem("token", JSON.stringify(res.data.token));
          sessionStorage.setItem("info", JSON.stringify(res.data.user));
          alert(res.data.message);
          navigate("/teacher/dashboard");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else if (user == "student") {
      axios
        .post("https://portal-k7lh.onrender.com/student/login", inputs)
        .then((res) => {
          sessionStorage.setItem("token", JSON.stringify(res.data.token));
          sessionStorage.setItem("info", JSON.stringify(res.data.user));
          alert(res.data.message);
          navigate("/student/dashboard");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      alert("Please select user");
    }
  };

  return (
    <>
      <div className="md:h-[55rem] h-[47rem] bg-gradient-to-r from-indigo-300 to-red-200 grid justify-center shadow-xl">
        

            <div className="flex justify-center self-center">
              <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
                <div className="mb-2">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    Sign In{" "}
                  </h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="text-sm py-5">
                    <select
                      onChange={(e) => {
                        setUser(e.target.value);
                      }}
                      className="text-sm text-gray-800 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                    >
                      <option selected>Select User</option>
                      <option value="admin">Admin</option>
                      <option value="teacher">Teacher</option>
                      <option value="student">Student</option>
                    </select>
                  </div>

                  <div className="space-y-6">
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      onChange={handleChanges}
                      className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      onChange={handleChanges}
                      className="text-sm text-gray-800 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                    />
                    {/* <div className="flex items-center justify-between">
                                <div className="text-sm ml-auto">
                                <a href="#" className="text-purple-700 hover:text-purple-600">
                                Forgot your password?
                                </a>
                                </div>
                                </div> */}
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          
        
      </div>
    </>
  );
}
