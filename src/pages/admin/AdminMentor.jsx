import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminMentor(){
    return(
        <>
        <h1 className="text-3xl p-10 font-bold text-center">
            MENTOR SECTION
        </h1>
        <div className="mx-auto py-6 rounded-md w-1/4 shadow-xl bg-gray-100">
            <form>
                <button className="mx-28 w-3/6 p-4 text-white font-semibold my-4 shadow-xl rounded-md bg-gray-900">
                    <NavLink to="/admin/mentor/allocate-mentor">ALLOCATE MENTOR</NavLink>
                </button>
            </form>
            <form>
                <button className="mx-28 w-3/6 p-4 text-white font-semibold my-4 shadow-xl rounded-md bg-gray-900">
                    <NavLink to="/admin/mentor/mentor-list">VIEW MENTORS</NavLink>
                </button>
            </form>
        </div>
        </>
    )
}