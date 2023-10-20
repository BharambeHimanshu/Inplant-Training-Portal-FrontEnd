import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function TeacherStudents(){
  
  const [content,setContent] = useState(null);
  const [info, setInfo] = useState();
  const [model, setModel] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"))
  const navigate = useNavigate()
  
  useEffect(()=>{
    axios.get('http://localhost:9000/teacher/students/list', {
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
    var input, filter, tBody,tRow,tData, i, txtValue;
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
  
  return(
  <>
  <section className="bg-gradient-to-r from-indigo-300 to-red-200 md:h-[55.5rem] md:px-[10rem] md:py-[4rem] md:w-auto">
    <div className="p-2 md:rounded">
      <div className="p-6 m-auto w-full">
        <form>  
          <label htmlFor="default-search" className="text-sm font-medium text-gray-100 bg-gray-900 sr-only ">
            Search
          </label>
          <input type="search" onKeyUp={Search} id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 " placeholder="Search by Enrollemtent number..."/>
        </form>
      </div>
      
      <div>
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
                <tr 
                id="tr"
                onClick={() => {
                  sessionStorage.setItem("studentInfo", element.name)
                  navigate("/teacher/student-profile")
                }}
                className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
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
      </div>
    </div>
  </section>
  </>
  )
}

