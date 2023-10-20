import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminTeacher(){
    return(
        <>
        <h1 className="text-3xl p-10 font-bold text-center">
            TEACHER SECTION
        </h1>
        <div className="mx-auto py-6 rounded-md w-1/4 shadow-xl bg-gray-100">
            <form>
                <button className="mx-28 w-3/6 p-4 text-white font-semibold my-4 shadow-xl rounded-md bg-gray-900">
                    <NavLink to="/admin/teacher/add-teacher">ADD TEACHER</NavLink>
                </button>
            </form>
            <form>
                <button className="mx-28 w-3/6 p-4 text-white font-semibold my-4 shadow-xl rounded-md bg-gray-900">
                    <NavLink to="/admin/teacher/delete-teacher">DELETE TEACHER</NavLink>
                </button>
            </form>
            <form>
                <button className="mx-28 w-3/6 p-4 text-white font-semibold my-4 shadow-xl rounded-md bg-gray-900">
                    <NavLink to="/admin/teacher/teacher-list">VIEW TEACHERS</NavLink>
                </button>
            </form>
        </div>
        </>
    )
}