import Dashboard from "@/views/Admin/src/Dashboard";
import List from "@/pages/Admin/Dashboard/Dashboard";

export default [
  {
    path: "dashboard",
    name: "Dashboard",
    component: Dashboard,
    redirect: "/dashboard/",
    children: [
      {
        path: "/",
        name: "List",
        component: List,
      },
    ],
  }
];
