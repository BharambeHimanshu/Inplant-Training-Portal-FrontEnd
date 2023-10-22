import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TStudentProfile() {
  const [content, setContent] = useState({})
  const [files, setFiles] = useState({})
  const token = JSON.parse(sessionStorage.getItem("token"))
  const studentName = sessionStorage.getItem("studentInfo")
  const navigate = useNavigate()
  console.log(studentName);

  useEffect(() => {
    return () => {
      axios
      .get("https://portal-k7lh.onrender.com/teacher", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        navigate("/login");
      })

      axios
      .get(`https://portal-k7lh.onrender.com/teacher/student-info/${studentName}`, {
        headers: {
            Authorization: "Bearer " + token
        }
      })
      .then((res) => {
        if(res.data.documents) {
            setContent(res.data.student)
            setFiles(res.data.documents)
        }
        else {
            setContent(res.data.student)
        }
      })
    }
  }, [])
  if(!content) return null
  if(!files) return null

//   console.log(content);
//   console.log(files);

  return(
  <>
  <section className="bg-gradient-to-r from-indigo-300 to-red-200 md:text-gray-300 h-auto md:h-auto md:pt-10 md:pb-10">
    <div className=" md:mx-[8rem] md:bg-gray-900">
      <div className="flex flex-col min-w-0 break-words w-full mb-6  -lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-transparent md:text-white md:bg-gray-900 mb-0 px-6 py-6">
          <div className="text-center  flex justify-between">
            <button onClick={() => {
                navigate("/teacher/view-students")
            }} className="text-xl md:text-purple-500 font-bold">Back</button>
          </div>
            <hr className="mt-6 border-b-1 border-black md:border-gray-300" />
        </div>
        
        <div className="flex-auto px-4 lg:px-10 py-10">
          <div>
            <h6 className="text-blueGray-400 md:text-white text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600  text-xs font-bold mb-2">
                    Roll No.
                  </label>
                  <p
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-red-200 rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.enrollment_no}
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
            
            <hr className="mt-6 border-b-1 border-black md:border-white" />
            
            <h6 className="text-blueGray-400 md:text-white text-sm mt-3 mb-6 font-bold uppercase">
              Faculty Mentor Information
            </h6>
            
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Faculty Mentor Name
                  </label>
                  <p 
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-red-200 rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.faculty_mentor_name || "NA"}
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Email Address
                  </label>
                  <p
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-red-200 rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.faculty_mentor_email || "NA"}
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Mobile Number
                  </label>
                  <p
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm md:text-red-200  focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.faculty_mentor_mobile_no || "NA"}
                  </p>
                </div>
              </div>
            </div>
            
            <hr className="mt-6 border-b-1 border-black md:border-white border-blueGray-300" />
            
            <h6 className="text-blueGray-400 md:text-white text-sm mt-3 mb-6 font-bold uppercase">
              Industry Mentor Information
            </h6>
            
            <div className="flex flex-wrap ">
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Organisation Name
                  </label>
                  <p
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-red-200 rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.organization_name}
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Industry mentor name
                  </label>
                  <p
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-red-200 rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.organization_mentor_name}
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    email address
                  </label>
                  <p
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-red-200 rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {content.organization_mentor_email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-50">Attachments</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul role="list" className="rounded-md border border-gray-200">
                      {
                        files.files?.map((file) => (
                          <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                            <div className="flex w-0 flex-1 items-center">
                              <div className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                <span className="ml-2 w-0 flex-1 truncate text-gray-50">{file.name}</span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a href="#" className="font-medium text-gray-50 hover:text-indigo-500">
                                Download
                              </a>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a href={file.url} target="_blank" className="font-medium text-gray-50  hover:text-indigo-500">
                                View
                              </a>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <button onClick={() => {
                                handleDelete(file.fileId)
                              }} className="font-medium text-gray-50  hover:text-indigo-500">
                                Delete
                              </button>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </dd>
              </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}