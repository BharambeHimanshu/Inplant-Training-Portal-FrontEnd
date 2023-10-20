import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TeacherDashboard() {
  const [content, setContent] = useState({})
  const token = JSON.parse(sessionStorage.getItem("token"))
  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      axios
      .get("http://localhost:9000/teacher", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then((res) => {
        setContent(JSON.parse(sessionStorage.getItem("info")))
      })
      .catch((err) => {
        navigate("/login");
      })
    }
  }, [])

  return(
  <>
  <section className="bg-gradient-to-r from-indigo-300 to-red-200 md:text-gray-300 h-[77.4rem] md:h-[55.5rem] md:pt-10 md:pb-10">
    <div className=" md:mx-[8rem] md:bg-gray-900">
      <div className="flex flex-col min-w-0 break-words w-full mb-6  -lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-transparent md:text-white md:bg-gray-900 mb-0 px-6 py-6">
          <div className="text-center  flex justify-between">
            <h6 className="text-xl md:text-purple-500 font-bold">Dashboard</h6>
          </div>
            <hr className="mt-6 border-b-1 border-black md:border-gray-300" />
        </div>
        
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div>
            <h6 className="text-blueGray-400 md:text-white text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600  text-xs font-bold mb-2">
                    Username
                  </label>
                  <p
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-red-200 rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.username}
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Full Name
                  </label>
                  <p
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-red-200 rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.name}
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Email Address
                  </label>
                  <p
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-red-200 rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.email}
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Mobile No
                  </label>
                  <p
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm md:text-red-200  focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.mobile_no}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}