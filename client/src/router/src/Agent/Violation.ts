import AgentViolation from "@/views/Admin/src/Violation";
//////////////////////////////////
// Start Pages Admin Violation Folder
import AgentViolationCreate from "@/pages/Agent/Violation/Create";
import AgentViolationList from "@/pages/Agent/Violation/List";
import AgentViolationEdit from "@/pages/Agent/Violation/Edit";
import AgentViolationView from "@/pages/Agent/Violation/View";
//  End  Pages Admin Violation Folder
//////////////////////////////////

export default [
  {
    path: "violation",
    name: "AgentViolation",
    component: AgentViolation,
    redirect: "/violation/",
    children: [
      {
        path: "create",
        name: "AgentViolationCreate",
        component: AgentViolationCreate,
      },
      {
        path: "list",
        name: "AgentViolationList",
        component: AgentViolationList,
      },
      {
        path: ":id/edit",
        name: "AgentViolationEdit",
        component: AgentViolationEdit,
      },
      {
        path: "view",
        name: "AgentViolationView",
        component: AgentViolationView,
      },
    ],
  },
];
