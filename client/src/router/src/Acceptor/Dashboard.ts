import AcceptorDashboard from "@/views/Acceptor/src/Dashboard";

import AcceptorDashboardList from "@/pages/Acceptor/Dashboard/Dashboard";
export default [
  {
    path: "dashboard",
    name: "AcceptorDashboard",
    component: AcceptorDashboard,
    redirect: "/dashboard/list",
    children: [
      {
        path: "/",
        name: "AcceptorDashboardList",
        component: AcceptorDashboardList,
      },
    ],
  },
];
