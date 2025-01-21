import AgentDashboard from "@/views/Agent/src/Dashboard";
import AgentDashboardList from "@/pages/Agent/Dashboard/Dashboard";
export default [
  {
    path: "dashboard",
    name: "AgentDashboard",
    component: AgentDashboard,
    redirect: "/dashboard/list",
    children: [
      {
        path: "/",
        name: "AgentDashboardList",
        component: AgentDashboardList,
      },
    ],
  }
];
