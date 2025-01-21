import AcceptorSettlement from "@/views/Acceptor/src/Settlement";

import AcceptorSettlementCreate from "@/pages/Acceptor/Settlement/Create";
import AcceptorSettlementList from "@/pages/Acceptor/Settlement/List";
import AcceptorSettlementType from "@/pages/Acceptor/Settlement/Type";
export default [
  {
    path: "settlement",
    name: "AcceptorSettlement",
    component: AcceptorSettlement,
    redirect: "/settlement/list",
    children: [
      {
        path: "create",
        name: "AcceptorSettlementCreate",
        component: AcceptorSettlementCreate,
      },
      {
        path: "list",
        name: "AcceptorSettlementList",
        component: AcceptorSettlementList,
      },
      {
        path: "type",
        name: "AcceptorSettlementType",
        component: AcceptorSettlementType,
      },
    ],
  },
];
