import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AdminChangePassword(){
    const [inputs, setInputs] = useState("");
    const token = JSON.parse(sessionStorage.getItem("token"))
    const navigate = useNavigate()

    useEffect(() => {
        return () => {
          axios
          .get("http://localhost:9000/admin", {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:9000/admin/update/password`, inputs, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            .then((res) => {
                alert(res.data.message);
                sessionStorage.removeItem("token")
                sessionStorage.removeItem("info")
                navigate("/login");
            })
            .catch((err) => {
                console.log('error : ',err);
                alert(err.response.data.message);
            });
    };

    return(
        <>
        <section className="bg-gradient-to-r from-indigo-300 to-red-200 md:text-gray-300 h-[77.4rem] md:h-[55.5rem] md:pt-10 md:pb-10">
            <div className=" md:mx-[8rem] md:bg-gray-900">
                <div className="flex flex-col min-w-0 break-words w-full mb-6  -lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-transparent md:text-white md:bg-gray-900 mb-0 px-6 py-6">
                        <div className="text-center  flex justify-between">
                            <h6 className="text-xl md:text-purple-500 font-bold">Change Password</h6>
                        </div>
                        <hr className="mt-6 border-b-1 border-black md:border-gray-300" />
                    </div>
                    
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h6 className="text-blueGray-400 md:text-white text-sm mt-3 mb-6 font-bold uppercase">
                                    Password Information
                                </h6>

                                <div className="flex">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="w-full mb-3">
                                            <label
                                            className="block uppercase text-blueGray-600  text-xs font-bold mb-2">
                                            Old Password
                                            </label>
                                            <input
                                            name="oldPassword"
                                            onChange={handleChanges}
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                    
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="  w-full mb-3">
                                            <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                            New Password
                                            </label>
                                            <input
                                            name="newPassword"
                                            onChange={handleChanges}
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                        
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="  w-full mb-3">
                                            <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                            Confirm Password
                                            </label>
                                            <input
                                            name="confirmPassword"
                                            onChange={handleChanges}
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 md:text-black rounded text-sm   focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{
                                marginTop: 5,
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center"}}>
                                    <button className="text-lg font-semibold border-2 border-purple-800 bg-purple-700 text-white rounded-lg px-6 py-2 block shadow-xl hover:text-purple-700 hover:bg-white" >
                                        Update
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