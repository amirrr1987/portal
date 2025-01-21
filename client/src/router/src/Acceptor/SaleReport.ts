import AcceptorSaleReport from "@/views/Acceptor/src/SaleReport";
import AcceptorSaleReportList from "@/pages/Acceptor/SaleReport/List";
import AcceptorSaleReportChart from "@/pages/Acceptor/SaleReport/Chart";
export default [
  {
    path: "sale-report",
    name: "AcceptorSaleReport",
    component: AcceptorSaleReport,
    redirect: "/sale-report/list",
    children: [
      {
        path: "chart",
        name: "AcceptorSaleReportChart",
        component: AcceptorSaleReportChart,
      },
      {
        path: "list",
        name: "AcceptorSaleReportList",
        component: AcceptorSaleReportList,
      },
    ],
  },
];
