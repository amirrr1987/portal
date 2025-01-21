import AgentSaleReport from "@/views/Admin/src/SaleReport";

//////////////////////////////////
// Start Pages Admin Sale Report Folder
import AgentSaleReportList from "@/pages/Agent/SaleReport/List";
import AgentSaleReportChart from "@/pages/Agent/SaleReport/Chart";
//  End  Pages Admin Sale Report Folder
//////////////////////////////////


export default [
  {
    path: "sale-report",
    name: "AgentSaleReport",
    component: AgentSaleReport,
    redirect: "/sale-report/",
    children: [
      {
        path: "chart",
        name: "AgentSaleReportChart",
        component: AgentSaleReportChart,
      },
      {
        path: "list",
        name: "AgentSaleReportList",
        component: AgentSaleReportList,
      },
    ],
  },
];
