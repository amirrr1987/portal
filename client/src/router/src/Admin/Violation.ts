import AdminViolation from "@/views/Admin/src/Violation";
//////////////////////////////////
// Start Pages Admin Violation Folder
import AdminViolationCreate from "@/pages/Admin/Violation/Create";
import AdminViolationList from "@/pages/Admin/Violation/List";
import AdminViolationEdit from "@/pages/Admin/Violation/Edit";
import AdminViolationView from "@/pages/Admin/Violation/View";
//  End  Pages Admin Violation Folder
//////////////////////////////////

export default [
  {
    path: "violation",
    name: "AdminViolation",
    component: AdminViolation,
    redirect: "/violation/",
    children: [
      {
        path: "create",
        name: "AdminViolationCreate",
        component: AdminViolationCreate,
      },
      {
        path: "list",
        name: "AdminViolationList",
        component: AdminViolationList,
      },
      {
        path: ":id/edit",
        name: "AdminViolationEdit",
        component: AdminViolationEdit,
      },
      {
        path: "view",
        name: "AdminViolationView",
        component: AdminViolationView,
      },
    ],
  },
];
