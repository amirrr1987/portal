import AdminActivityMonitor from "@/views/Admin/src/ActivityMonitor";
//////////////////////////////////
// Start Pages Admin ActivityMonitor Folder
import AdminActivityMonitorList from "@/pages/Admin/ActivityMonitor/List";
//  End  Pages Admin ActivityMonitor Folder
//////////////////////////////////

export default [
  {
    path: "activity-monitor",
    name: "AdminActivityMonitor",
    component: AdminActivityMonitor,
    redirect: "/activity-monitor",
    children: [
      {
        path: "list",
        name: "AdminActivityMonitorList",
        component: AdminActivityMonitorList,
      },
    ],
  },
];
