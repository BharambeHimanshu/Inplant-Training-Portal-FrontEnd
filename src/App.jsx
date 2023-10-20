import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

import { Token } from "./context"

// hero components
import HeroNavBar from "./components/Navbar/HeroNavBar/HeroNavbar"
import HeroSection from "./pages/HeroSection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./components/Login"

// admin components
import AdminNavbar from "./components/Navbar/AdminNavBar/AdminNavbar"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AddTeacher from "./pages/admin/AddTeacher"
import DeleteTeacher from "./pages/admin/DeleteTeacher"
import ViewTeachers from "./pages/admin/ViewTeachers"
import AddStudent from "./pages/admin/AddStudent"
import DeleteStudent from "./pages/admin/DeleteStudent"
import ViewStudents from "./pages/admin/ViewStudents"
import AllocateMentor from "./pages/admin/AllocateMentor"
import ViewMentors from "./pages/admin/ViewMentors"
import AdminChangeInfo from "./pages/admin/AdminChangeInfo"
import AdminChangePassword from "./pages/admin/AdminChangePassword"
import AStudentProfile from "./pages/admin/AStudentProfile"

// teacher components
import TeacherNavbar from "./components/Navbar/TeacherNavBar/TeacherNavbar"
import TeacherDashboard from "./pages/teacher/TeacherDashboard"
import TeacherStudent from "./pages/teacher/TeacherStudent"
import TeacherAllocatedStudents from "./pages/teacher/TeacherAllocatedStudents"
import TStudentProfile from "./pages/teacher/TStudentProfile"

// student components
import StudentNavbar from "./components/Navbar/StudentNavBar/StudentNavBar"
import StudentDashboard from "./pages/student/StudentDashboard"
import StudentUploadDocuments from "./pages/student/StudentUploadDocuments"
import StudentDocuments from "./pages/student/StudentDocuments"
import TeacherChangeInfo from "./pages/teacher/TeacherChangeInfo"
import TeacherChangePassword from "./pages/teacher/TeacherChangePassword"
import IndustryForm from "./components/IndustryForm"
import FacultyForm from "./components/FacultyForm"
import StudentChangeInfo from "./pages/student/StudentChangeInfo"
import StudentChangePassword from "./pages/student/StudentChangePassword"

export default function App() {

  const [token, setToken] = useState('')

  return (
    <>
    <div className="font-serif">
    <Token.Provider value={[token, setToken]}>
    <Routes>
      {/* Hero Section */}
      <Route exact path="/" element={[<HeroNavBar />, <HeroSection />]} />
      <Route exact path="/about" element={[<HeroNavBar />, <About />]} />
      <Route exact path="/contact" element={[<HeroNavBar />, <Contact />]} />
      <Route exact path="/login" element={[<HeroNavBar />, <Login />]} />

      {/* Admin Section */}
      <Route exact path="/admin/dashboard" element={[<AdminNavbar />, <AdminDashboard />]} />
      <Route exact path="/admin/add-teacher" element={[<AdminNavbar />, <AddTeacher />]} />
      <Route exact path="/admin/delete-teacher" element={[<AdminNavbar />, <DeleteTeacher />]} />
      <Route exact path="/admin/view-teachers" element={[<AdminNavbar />, <ViewTeachers />]} />
      <Route exact path="/admin/add-student" element={[<AdminNavbar />, <AddStudent />]} />
      <Route exact path="/admin/delete-student" element={[<AdminNavbar />, <DeleteStudent />]} />
      <Route exact path="/admin/view-students" element={[<AdminNavbar />, <ViewStudents />]} />
      <Route exact path="/admin/allocate-mentors" element={[<AdminNavbar />, <AllocateMentor />]} />
      <Route exact path="/admin/view-mentors" element={[<AdminNavbar />, <ViewMentors />]} />
      <Route exact path="/admin/update-info" element={[<AdminNavbar />, <AdminChangeInfo />]} />
      <Route exact path="/admin/change-password" element={[<AdminNavbar />, <AdminChangePassword />]} />
      <Route exact path="/admin/student-profile" element={[<AdminNavbar />, <AStudentProfile />]} />

      {/* Teacher Section */}
      <Route exact path="/teacher/dashboard" element={[<TeacherNavbar />, <TeacherDashboard />]} />
      <Route exact path="/teacher/students" element={[<TeacherNavbar />, <TeacherStudent />]} />
      <Route exact path="/teacher/allocated-students" element={[<TeacherNavbar />, <TeacherAllocatedStudents />]} />
      <Route exact path="/teacher/update-info" element={[<TeacherNavbar />, <TeacherChangeInfo />]} />
      <Route exact path="/teacher/change-password" element={[<TeacherNavbar />, <TeacherChangePassword />]} />
      <Route exact path="/teacher/student-profile" element={[<TeacherNavbar />, <TStudentProfile />]} />

      {/* Student Section */}
      <Route exact path="/student/dashboard" element={[<StudentNavbar />, <StudentDashboard />]} />
      <Route exact path="/student/upload-documents" element={[<StudentNavbar />, <StudentUploadDocuments />]} />
      <Route exact path="/student/documents" element={[<StudentNavbar />, <StudentDocuments />]} />
      <Route exact path="/student/update-info" element={[<StudentNavbar />, <StudentChangeInfo />]} />
      <Route exact path="/student/change-password" element={[<StudentNavbar />, <StudentChangePassword />]} />

      {/* Form Section */}
      <Route exact path="/ask-assessment" element={<IndustryForm />} />
      <Route exact path="/give-assessment" element={<FacultyForm />} />

    </Routes>
    </Token.Provider>
    </div>
    </>
  )
}