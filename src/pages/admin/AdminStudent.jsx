import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminStudent(){
    return(
        <>
        <h1 className="text-3xl p-10 font-bold text-center">
            STUDENT SECTION
        </h1>
        <div className="mx-auto py-6 rounded-md w-1/4 shadow-xl bg-gray-100">
            <button className="mx-28 w-3/6 p-4 text-white font-semibold my-4 shadow-xl rounded-md bg-gray-900">
                <NavLink to="/admin/student/add-student">ADD STUDENT</NavLink>
            </button>
            <button className="mx-28 w-3/6 p-4 text-white font-semibold my-4 shadow-xl rounded-md bg-gray-900">
                <NavLink to="/admin/student/delete-student">DELETE STUDENT</NavLink>
            </button>
            <button className="mx-28 w-3/6 p-4 text-white font-semibold my-4 shadow-xl rounded-md bg-gray-900">
                <NavLink to="/admin/student/student-list">VIEW STUDENTS</NavLink>
            </button>
        </div>
        </>
    )
}