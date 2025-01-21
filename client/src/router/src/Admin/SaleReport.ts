import AdminSaleReport from "@/views/Admin/src/SaleReport";

//////////////////////////////////
// Start Pages Admin Sale Report Folder
import AdminSaleReportList from "@/pages/Admin/SaleReport/List";
import AdminSaleReportChart from "@/pages/Admin/SaleReport/Chart";
//  End  Pages Admin Sale Report Folder
//////////////////////////////////


export default [
  {
    path: "sale-report",
    name: "AdminSaleReport",
    component: AdminSaleReport,
    redirect: "/sale-report/",
    children: [
      {
        path: "chart",
        name: "AdminSaleReportChart",
        component: AdminSaleReportChart,
      },
      {
        path: "list",
        name: "AdminSaleReportList",
        component: AdminSaleReportList,
      },
    ],
  },
];
