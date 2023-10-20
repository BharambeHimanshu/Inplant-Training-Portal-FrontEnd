import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StudentUploadDocuments() {
    const [data,setData] = useState()
    const token = JSON.parse(sessionStorage.getItem("token"))
    const navigate = useNavigate()

    useEffect(() => {
        return () => {
          axios
          .get("http://localhost:9000/student", {
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
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', data)
      const url = `http://localhost:9000/student/file/upload`
        axios.post(url,formData, {
            headers: {
                Authorization: "Bearer " + token
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
        <>
        <section className="bg-gradient-to-r from-indigo-300 to-red-200 md:text-gray-300 h-[77.4rem] md:h-[55rem] md:pt-10 md:pb-10">
        <p className="text-3xl p-10 text-gray-900 font-semibold text-center">
             UPLOAD DOCUMENT
        </p>
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center w-full">
                <label for="dropzone-file" className="flex flex-col justify-center items-center w-3/5 h-64 bg-gray-900 rounded-lg border-2 border-gray-900 border-dashed cursor-pointer">
                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg aria-hidden="true" className="mb-3 w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-white "><span className="font-semibold">Click to upload</span></p>
                        <p className="text-xs text-white">(ENROLLMENT_NO-<i>filename</i>).pdf</p>
                    </div>
                    <input required id="dropzone-file" onChange={(e)=>{setData(e.target.files[0])}} name="file" type="file" accept="application/pdf"/>
                    <button type="submit" className="bg-purple-800 px-3 py-1 mt-4 rounded-lg border-2 border-purple-800 hover:bg-white hover:text-gray-900">Upload</button>
                </label>
            </div>
        </form>
        </section>
        </>
    );
}
