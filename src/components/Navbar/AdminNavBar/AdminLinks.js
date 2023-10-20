export const links = [
  {
    name: "Teacher",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "View Teachers", link: "/admin/view-teachers" },
          { name: "Add Teacher", link: "/admin/add-teacher" },
          { name: "Delete Teacher", link: "/admin/delete-teacher" }
        ]
      }
    ]
  },
  {
    name: "Student",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "View Students", link: "/admin/view-students" },
          { name: "Add Student", link: "/admin/add-student" },
          { name: "Delete Student", link: "/admin/delete-student" }
        ]
      }
    ]
  },
  {
    name: "Mentor",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "View Mentors", link: "/admin/view-mentors" },
          { name: "Allocate Mentor", link: "/admin/allocate-mentors" },
        ]
      }
    ]
  },
  {
    name: "Settings",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "Update Information", link: "/admin/update-info" },
          { name: "Change Passowrd", link: "/admin/change-password" },
        ]
      }
    ]
  }
];
