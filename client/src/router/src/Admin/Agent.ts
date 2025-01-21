import AdminAgent from "@/views/Admin/src/Agent";

//////////////////////////////////
// Start Pages Admin Agent Folder
import AdminAgentCreate from "@/pages/Admin/Agent/Create";
import AdminAgentList from "@/pages/Admin/Agent/List";
import AdminAgentEdit from "@/pages/Admin/Agent/Edit";
import AdminAgentView from "@/pages/Admin/Agent/View";
//  End  Pages Admin Agent Folder
//////////////////////////////////
export default [
  {
    path: "agent",
    name: "AdminAgent",
    component: AdminAgent,
    redirect: "/agent/",
    children: [
      {
        path: "create",
        name: "AdminAgentCreate",
        component: AdminAgentCreate,
      },
      {
        path: "list",
        name: "AdminAgentList",
        component: AdminAgentList,
      },
      {
        path: ":id/view",
        name: "AdminAgentView",
        component: AdminAgentView,
      },
      {
        path: ":id/edit",
        name: "AdminAgentEdit",
        component: AdminAgentEdit,
      },
    ],
  },
];
