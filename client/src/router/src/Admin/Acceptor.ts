import AdminAcceptor from "@/views/Admin/src/Acceptor";

//////////////////////////////////
// Start Pages Admin Acceptor Folder
import AdminAcceptorCreate from "@/pages/Admin/Acceptor/Create";
import AdminAcceptorList from "@/pages/Admin/Acceptor/List";
import AdminAcceptorEdit from "@/pages/Admin/Acceptor/Edit";
import AdminAcceptorView from "@/pages/Admin/Acceptor/View";

import AdminAcceptorDiscountCreate from "@/pages/Admin/Acceptor/DiscountCreate";
import AdminAcceptorDiscountList from "@/pages/Admin/Acceptor/DiscountList";
import AdminAcceptorDiscountEdit from "@/pages/Admin/Acceptor/DiscountEdit";
import AdminAcceptorDiscountView from "@/pages/Admin/Acceptor/DiscountView";
//  End  Pages Admin Acceptor Folder
//////////////////////////////////

export default [
  {
    path: "acceptor",
    name: "AdminAcceptor",
    component: AdminAcceptor,
    redirect: "/acceptor/",
    children: [
      {
        path: "create",
        name: "AdminAcceptorCreate",
        component: AdminAcceptorCreate,
      },
      {
        path: "list",
        name: "AdminAcceptorList",
        component: AdminAcceptorList,
      },
      {
        path: ":id/edit",
        name: "AdminAcceptorEdit",
        component: AdminAcceptorEdit,
      },
      {
        path: ":id/view",
        name: "AdminAcceptorView",
        component: AdminAcceptorView,
      },
      {
        path: "discount-create",
        name: "AdminAcceptorDiscountCreate",
        component: AdminAcceptorDiscountCreate,
      },
      {
        path: "discount-list",
        name: "AdminAcceptorDiscountList",
        component: AdminAcceptorDiscountList,
      },
      {
        path: ":id/discount-edit",
        name: "AdminAcceptorDiscountEdit",
        component: AdminAcceptorDiscountEdit,
      },
      {
        path: ":id/discount-view",
        name: "AdminAcceptorDiscountView",
        component: AdminAcceptorDiscountView,
      },
    ],
  },
];
