import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ViewMentors(){
  const [teacherName, setTeacherName] = useState("")
  const [teacher, setTeacher] = useState(null)
  const [content,setContent] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("token"))
  const navigate = useNavigate()
  
  useEffect(()=>{
    axios.get('http://localhost:9000/admin/teachers/list', {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then((res)=>{
      setTeacher(res.data.teachers)
    })
    .catch((err) => {
      navigate("/login");
    })
  }, [])
  
  if(!teacher) return null;
  
  function Search() {
    var input, filter, tBody, tRow, tData, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    tBody = document.getElementById('table-body');
    tRow = tBody.getElementsByTagName('tr');
    
    for (i = 0; i < tRow.length; i++) {
      tData = tRow[i].getElementsByTagName("td")[1];
      txtValue = tData.textContent || tData.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tRow[i].style.display = "";
      } else {
        tRow[i].style.display = "none";
      }
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .get(`http://localhost:9000/admin/allocated-students/${teacherName}`, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then((res) => {
      setContent(res.data.students)
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
  };
  
  return(
    <>
    <section className="bg-gradient-to-r from-indigo-300 to-red-200 md:h-[55.5rem] md:px-[10rem] md:py-[4rem] md:w-auto">
      <div className="text-sm flex justify-center ">
        <select id="teacherUserName" onChange={(e) => {
          setTeacherName(e.target.value)
        }} className="text-sm text-gray-800 px-4 py-3 rounded bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400">
          <option>Select Teacher</option>
          {
            teacher.map((element)=>{
              return(
                <option value={element.username}>{element.name}</option>
                )
            })}
        </select>
      </div>

      <div className="p-2 md:rounded">
        <div className="p-6 m-auto w-full">
          <form>
            <label htmlFor="default-search" className="text-sm font-medium text-gray-100 bg-gray-900 sr-only ">
              Search
            </label>
            <input type="search" onKeyUp={Search} id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 " placeholder="Search by Enrollemtent number..."/>
          </form>
        </div>
        
        <form onSubmit={handleSubmit}>
          <table className="md:table w-full" >
            <thead className="md:block md:table-header-group hidden">
              <tr className="border md:border-none block md:table-row -top-full md:top-auto -left-full md:left-auto">
                <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
                  Enrollment No.
                </th>
                <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
                  Full Name
                </th>
                <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
                  Email Id
                </th>
                <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
                  Mobile No.
                </th>
              </tr>
            </thead>
            <tbody id="table-body" className="block md:table-row-group">
            {
              content.map((element) => {
                return(
                  <tr id="tr" className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">
                          Enrollment No
                        </span>
                        {element.enrollment_no}
                      </td>
                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">
                          Name
                        </span>
                        {element.name}
                      </td>
                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">
                          Email Id
                        </span>
                        {element.email}
                      </td>
                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">
                          Mobile Number
                        </span>
                        {element.mobile_no}
                      </td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
          <div style={{
                marginTop: 10,
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
              }}>
                <button type="submit" className="text-lg font-semibold border-2 border-purple-800 bg-purple-700 text-white rounded-lg px-6 py-2 block shadow-xl hover:text-purple-700 hover:bg-white" >
                  Get
                </button>
          </div>
        </form>
      </div>
    </section>
  </>
  )
}