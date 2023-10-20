import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function StudentDocuments() {
    const [files, setFiles] = useState({})
    const token = JSON.parse(sessionStorage.getItem("token"))
    const navigate = useNavigate()
    
    useEffect(() => {
        axios
        .get("http://localhost:9000/student/file/map", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((res) => {
          if(res.data.documents) {
            setFiles(res.data.documents)
          }
        })
        .catch((err) => {
          navigate("/login");
        })
    }, [])
    if(!files) return null

    const handleDelete = (fileId) => {
      const input = {
        fileId: fileId
      }
      axios.post("http://localhost:9000/student/file/delete", input, {
        headers: {
          Authorization: token
        }
      })
      .then((result)=>{
          alert(result.data.message)
          console.log(result)
      })
      .catch((err)=>{
          alert(err.data.message||"Something went wrong")
      })
    }
    return (
      <section className="bg-gradient-to-r from-indigo-300 to-red-200 md:text-gray-300 h-[77.4rem] md:h-[55rem] md:pt-10 md:pb-10">
        <div className="section flex justify-center md:my-[10rem]" >
          <div className="container ">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Documents</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Download this documents</p>
              </div>
              
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                      {
                        files.files?.map((file) => (
                          <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                            <div className="flex w-0 flex-1 items-center">
                              <div className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <span className="ml-2 w-0 flex-1 truncate">{file.name}</span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Download
                              </a>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a href={file.url} target="_blank" className="font-medium text-indigo-600 hover:text-indigo-500">
                                View
                              </a>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <button onClick={() => {
                                handleDelete(file.fileId)
                              }} className="font-medium text-indigo-600 hover:text-indigo-500">
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
    )
  }