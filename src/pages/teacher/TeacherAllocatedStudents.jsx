import React, {useState,useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AllocateMentor(){
  const [content,setContent] = useState(null);
  const bulkInputs = [];
  const token = JSON.parse(sessionStorage.getItem("token"))
  const navigate = useNavigate()
  
  useEffect(()=>{
    axios.get('http://localhost:9000/teacher/allocated-students', {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then((res)=>{
      setContent(res.data.students)
    })
    .catch((err) => {
      navigate("/login");
    })
  },[])
  
  if(!content) return null;
  
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

  const handleIndustrySubmit = (studentRoll) => {
    const input = {
      studentRoll: studentRoll
    }
    axios
    .post("http://localhost:9000/teacher/send-email", input, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then((res) => {
      alert(res.data.message);
    })
    .catch((err) => {
      console.log('error : ',err);
      alert(err.response.data.message);
    });
  }

  const handleBulkMail = (e) => {
    axios
    .post("http://localhost:9000/teacher/send-bulk-email", bulkInputs, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then((res) => {
      alert(res.data.message);
    })
    .catch((err) => {
      console.log('error : ',err);
      alert(err.response.data.message);
    });
  }
  
  return(
  <>
  <section className="bg-gradient-to-r from-indigo-300 to-red-200 md:h-[55.5rem] md:px-[10rem] md:py-[4rem] md:w-auto">
    <div className="p-2 md:rounded">
      <div className="p-6 m-auto w-full">
        <form>
          <label htmlFor="default-search" className="text-sm font-medium text-gray-100 bg-gray-900 sr-only ">
            Search
          </label>
          <input type="search" onKeyUp={Search} id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 " placeholder="Search by Roll number..."/>
        </form>
      </div>

      <div className="py-2" style={{
          display: "flex",
          justifyContent: "end",
          alignContent: "end"
        }} >
        <button onClick={handleBulkMail} className="bg-gray-900 border border-gray-900 text-white hover:bg-white hover:text-black  p-1 rounded">
          ASK ASSESSMENT
        </button>
      </div>
      
      <table className="md:table w-full" >
        <thead className="md:block md:table-header-group hidden">
          <tr className="border md:border-none block md:table-row -top-full md:top-auto -left-full md:left-auto">
            <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
              Roll No.
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
            <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
              Action
            </th>
          </tr>
        </thead>
        <tbody id="table-body" className="block md:table-row-group">
        {
          content.map((element) => {
            bulkInputs.push(element.name)
            return(
              <tr id="tr" 
              onClick={() => {
                sessionStorage.setItem("studentInfo", element.name)
                navigate("/teacher/student-profile")
                }}className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Roll No.
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
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Allocate
                    </span>
                    <NavLink to={`/give-assessment/?enrollment_no=${element.enrollment_no}`} target="__blank">
                      <button className="bg-purple-800 border-purple-800 text-white hover:bg-white hover:text-purple-800 font-bold py-1 px-2 border rounded mr-2">
                        GIVE
                      </button>
                    </NavLink>
                    <button onClick={() => {
                      handleIndustrySubmit(element.enrollment_no)
                    }} className="bg-gray-900 border-gray-900 text-white hover:bg-white hover:text-gray-900 font-bold py-1 px-2 border rounded ml-2">
                      ASK
                    </button>
                  </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  </section>
  </>
  )
}
