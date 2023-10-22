import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AddStudent(){
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState();
  const token = JSON.parse(sessionStorage.getItem("token"))
  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      axios
      .get("https://portal-k7lh.onrender.com/admin", {
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
  
  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  
  const handleManSubmit = (e) => {
    e.preventDefault();
    axios
    .post("https://portal-k7lh.onrender.com/admin/add-student", inputs, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then((res) => {
      alert(res.data.message);
    })
    .catch((err) => {
      // console.log('error : ',err);
      alert(err.response.data.message);
    });
    // e.target.reset();
  };
  
  const handleFileSubmit = (e) => {
    e.preventDefault();
    {console.log(data)}
    let formData = new FormData();
    formData.append('file', data);
    const url = `https://portal-k7lh.onrender.com/admin/add-student/excel`
    // console.log(url,formData);
    axios.post(url,formData, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then((res)=>{
      alert(res.data.message)
      // console.log(res)
    })
    .catch((err)=>{
      alert(err.response.data.message)
    })
    // e.target.reset();
  }
  
  return(
  <>
  <section className="bg-gradient-to-r from-indigo-300 to-red-200 md:text-gray-300 h-[77.4rem] md:h-[67rem] md:pt-10 md:pb-10">
    <div className=" md:mx-[8rem] md:bg-gray-900">
      <div className="flex flex-col min-w-0 break-words w-full mb-6  -lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-transparent md:text-white md:bg-gray-900 mb-0 px-6 py-6">
          <div className="text-center  flex justify-between">
            <h6 className="text-xl md:text-purple-500 font-bold">Add Student</h6>
          </div>
            <hr className="mt-6 border-b-1 border-black md:border-gray-300" />
        </div>
        
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleManSubmit}>
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
                    <input
                    name="enrollment_no"
                    onChange={handleChanges}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                
                <div className="w-full lg:w-6/12 px-4">
                  <div className="  w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Full Name
                    </label>
                    <input
                    name="name"
                    onChange={handleChanges}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                
                <div className="w-full lg:w-6/12 px-4">
                  <div className="  w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Email Address
                    </label>
                    <input
                    name="email"
                    onChange={handleChanges}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                
                <div className="w-full lg:w-6/12 px-4">
                  <div className="  w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Mobile No
                    </label>
                    <input
                    name="mobile_no"
                    onChange={handleChanges}
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <div className="  w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Password
                    </label>
                    <input
                    name="password"
                    onChange={handleChanges}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                    <input
                      name="organization_name"
                      onChange={handleChanges}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                
                <div className="w-full lg:w-6/12 px-4">
                  <div className="  w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Industry mentor name
                    </label>
                    <input
                      name="organization_mentor_name"
                      onChange={handleChanges}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                
                <div className="w-full lg:w-6/12 px-4">
                  <div className="  w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      email address
                    </label>
                    <input
                      name="organization_mentor_email"
                      onChange={handleChanges}
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: 5,
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
              }}>
                <button type="submit" className="text-lg font-semibold border-2 border-purple-800 bg-purple-700 text-white rounded-lg px-6 py-2 block shadow-xl hover:text-purple-700 hover:bg-white" >
                  Add
                </button>
              </div>
            </div>
          </form>

          <hr className="my-6 border-b-1" />
          
          <p className="font-semibold text-center md:text-2xl">Import Data from Excel</p>
          <form
          onSubmit={handleFileSubmit}
          method="post"
          encType="multipart/form-data">
            <div className="flex justify-center">
              <div className="my-5 w-96 ">
                <label htmlFor="formFile" className="form-label inline-block mb-2 md:text-white sm:text-black">Upload excel (.xlsx) file</label>
                <input
                onChange={(e) => {
                  setData(e.target.files[0]);
                  }}
                name="excel-file"
                id="dropzone-file"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition 
                ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" />
              </div>
            </div>
            
            <div style={{
              marginTop: 5,
              display: "flex",
              justifyContent: "center",
              alignContent: "center"
            }}>
              <button className="text-lg font-semibold border-2 border-purple-800 bg-purple-700 text-white rounded-lg px-6 py-2 block shadow-xl hover:text-purple-700 hover:bg-white" >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}