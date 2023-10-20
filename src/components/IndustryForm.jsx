import React, { useState, useEffect } from "react";
import axios from "axios";

export default function IndustryForm() {
    const [content, setContent] = useState([])
    const [inputs, setInputs] = useState({})

    useEffect(() => {
        const name = window.location.href.split('?')[1];
        const studentName = name.split('=')[1]

        axios
        .get(`http://localhost:9000/teacher/send-details/${studentName}`)
        .then((res) => {
            setContent(res.data.student)
        })
        .catch((err) => {
            console.log('error : ', err);
            alert(err.response.data.message)
        })
    }, [])
    if(!content) return null;

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        console.log(inputs);
    };

    const handleSubmit = (e) => {
        const name = window.location.href.split('?')[1];
        const studentName = name.split('=')[1];
        e.preventDefault();
        axios
            .post(`http://localhost:9000/teacher/upload-industry-marks/${studentName}`, inputs)
            .then((res) => {
                alert(res.data.message);
            })
            .catch((err) => {
                console.log('error : ', err);
                alert(err.response.data.message);
            });
    }


    return(
    <>
    <link
    rel="stylesheet"
    href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
    <link
    href="https://unpkg.com/@tailwindcss/custom-forms/dist/custom-forms.min.css"
    rel="stylesheet"/>
    
    <nav className="bg-white fixed w-full z-10 top-0 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between my-4">
            <div className="pl-4 md:pl-0">
                <p
                className="flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans">
                <svg
                className="fill-current h-6 inline-block text-yellow-600 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                    <path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
                </svg>
                    Industry Mentor review
                </p>
            </div>
        </div>
    </nav>

    {/*Container*/}
    <div className="container w-full flex flex-wrap mx-auto px-2 pt-4 lg:pt-6 my-16">
        <section className="w-full lg:w-4/5">
            <h1 className="p-2 flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-6 lg:mt-0 md:text-2xl">
                Hey Industry Mentor
            </h1>
            <h4 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-2 lg:mt-0 md:text-xl">
                {content.name}
            </h4>
            <hr className="bg-gray-300 my-4" />

            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-2 text-xl">
            Mark Assessment
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="p-2 mt-1 lg:mt-0 rounded shadow bg-white">
                    <div>
                        <select required name="month" onChange={handleChanges} className="text-xl text-gray-800 px-2 py-2 rounded-lg w-small  focus:bg-gray-100 border border-gray-200 focus:outline-none ">
                            <option defaultValue >--Select Month--</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                        </select>
                    </div>

                    <br></br>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label
                            className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                            htmlFor="discipline"
                            >
                            Punctuality & Discipline
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                            max="10"
                            min="0"
                            className="form-input block w-full focus:bg-white"
                            name="discipline"
                            type="number"
                            onChange={handleChanges}
                            placeholder="Range  0-10"
                            required
                            />
                            <p className="py-2 text-sm text-gray-600">
                            *Enter the marks recieved by the student
                            </p>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label
                            className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                            htmlFor="attitude"
                            >
                            Learning intiative / Attitude
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                            max="10"
                            min="0"
                            className="form-input block w-full focus:bg-white"
                            name="attitude"
                            type="number"
                            onChange={handleChanges}
                            placeholder="Range  0-10"
                            required
                            />
                            <p className="py-2 text-sm text-gray-600">
                            *Enter the marks recieved by the student
                            </p>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label
                            className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                            htmlFor="maintenance"
                            >
                            Daily diary / Weekly diary maintainance
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                            max="10"
                            min="0"
                            className="form-input block w-full focus:bg-white"
                            name="maintenance"
                            type="number"
                            onChange={handleChanges}
                            placeholder="Range  0-10"
                            required
                            />
                            <p className="py-2 text-sm text-gray-600">
                            *Enter the marks recieved by the student
                            </p>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label
                            className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                            htmlFor="report"
                            >
                            Inplant training report writing
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                            max="10"
                            min="0"
                            className="form-input block w-full focus:bg-white"
                            name="report"
                            type="number"
                            onChange={handleChanges}
                            placeholder="Range  0-10"
                            required
                            />
                            <p className="py-2 text-sm text-gray-600">
                            *Enter the marks recieved by the student
                            </p>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label
                            className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                            htmlFor="achievement"
                            >
                            Knowledge gained / Skills achieved
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                            max="10"
                            min="0"
                            className="form-input block w-full focus:bg-white"
                            name="achievement"
                            type="number"
                            onChange={handleChanges}
                            placeholder="Range  0-10"
                            required
                            />
                            <p className="py-2 text-sm text-gray-600">
                            *Enter the marks recieved by the student
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="bg-gray-300 my-12" />

                <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-4 text-xl">
                    Student info
                </h2>

                <div className="p-2 mt-6 lg:mt-0 rounded shadow bg-white">
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                                htmlFor="my-textarea"
                            >
                                Notes about the Student
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea
                                className="form-textarea block w-full focus:bg-white"
                                name="note"
                                rows={8}
                                required
                                />
                            <p className="py-2 text-sm text-gray-600">
                                Review about the student
                            </p>
                        </div>
                    </div>
                    <div className="" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <button
                        className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        >
                        Save
                        </button>
                    </div>
                </div>
            </form>
        </section>
    </div>
    </>
    )
}