import Dashboard from "@/views/Admin/src/Dashboard.vue";
import List from "@/pages/Admin/Dashboard/Dashboard.vue";

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
