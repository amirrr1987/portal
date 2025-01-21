import AgentAcceptor from "@/views/Admin/src/Acceptor";

//////////////////////////////////
// Start Pages Admin Acceptor Folder
import AgentAcceptorCreate from "@/pages/Agent/Acceptor/Create";
import AgentAcceptorList from "@/pages/Agent/Acceptor/List";
import AgentAcceptorEdit from "@/pages/Agent/Acceptor/Edit";
import AgentAcceptorView from "@/pages/Agent/Acceptor/View";

import AgentAcceptorDiscountCreate from "@/pages/Agent/Acceptor/DiscountCreate";
import AgentAcceptorDiscountList from "@/pages/Agent/Acceptor/DiscountList";
import AgentAcceptorDiscountEdit from "@/pages/Agent/Acceptor/DiscountEdit";
import AgentAcceptorDiscountView from "@/pages/Agent/Acceptor/DiscountView";
//  End  Pages Admin Acceptor Folder
//////////////////////////////////

export default [
  {
    path: "acceptor",
    name: "AgentAcceptor",
    component: AgentAcceptor,
    redirect: "/acceptor/",
    children: [
      {
        path: "create",
        name: "AgentAcceptorCreate",
        component: AgentAcceptorCreate,
      },
      {
        path: "list",
        name: "AgentAcceptorList",
        component: AgentAcceptorList,
      },
      {
        path: ":id/edit",
        name: "AgentAcceptorEdit",
        component: AgentAcceptorEdit,
      },
      {
        path: ":id/view",
        name: "AgentAcceptorView",
        component: AgentAcceptorView,
      },
      {
        path: "discount-create",
        name: "AgentAcceptorDiscountCreate",
        component: AgentAcceptorDiscountCreate,
      },
      {
        path: "discount-list",
        name: "AgentAcceptorDiscountList",
        component: AgentAcceptorDiscountList,
      },
      {
        path: ":id/discount-edit",
        name: "AgentAcceptorDiscountEdit",
        component: AgentAcceptorDiscountEdit,
      },
      {
        path: ":id/discount-view",
        name: "AgentAcceptorDiscountView",
        component: AgentAcceptorDiscountView,
      },
    ],
  },
];
