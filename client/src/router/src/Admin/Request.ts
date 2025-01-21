import AdminRequest from "@/views/Admin/src/Request";

//////////////////////////////////
// Start Pages Admin Request Folder

import AdminRequestAcceptor from "@/pages/Admin/Request/Acceptor";
import AdminRequestAcceptorList from "@/pages/Admin/Request/Acceptor/List";

import AdminRequestComment from "@/pages/Admin/Request/Comment";
import AdminRequestCommentList from "@/pages/Admin/Request/Comment/List";

import AdminRequestAccount from "@/pages/Admin/Request/Account";
import AdminRequestAccountList from "@/pages/Admin/Request/Account/List";

import AdminRequestDiscount from "@/pages/Admin/Request/Discount";
import AdminRequestDiscountList from "@/pages/Admin/Request/Discount/List";

//  End  Pages Admin Request Folder
//////////////////////////////////

export default [
  {
    path: "request",
    name: "AdminRequest",
    component: AdminRequest,
    redirect: "/request/",
    children: [
      {
        path: "acceptor",
        name: "AdminRequestAcceptor",
        component: AdminRequestAcceptor,
        redirect: "/acceptor/",
        children: [
          {
            path: "list",
            name: "AdminRequestAcceptorList",
            component: AdminRequestAcceptorList,
          },
        ],
      },
      {
        path: "comment",
        name: "AdminRequestComment",
        component: AdminRequestComment,
        redirect: "/comment/",
        children: [
          {
            path: "list",
            name: "AdminRequestCommentList",
            component: AdminRequestCommentList,
          },
        ],
      },
      {
        path: "account",
        name: "AdminRequestAccount",
        component: AdminRequestAccount,
        redirect: "/account/",
        children: [
          {
            path: "list",
            name: "AdminRequestAccountList",
            component: AdminRequestAccountList,
          },
        ],
      },
      {
        path: "discount",
        name: "AdminRequestDiscount",
        component: AdminRequestDiscount,
        redirect: "/discount/",
        children: [
          {
            path: "list",
            name: "AdminRequestDiscountList",
            component: AdminRequestDiscountList,
          },
        ],
      },
    ],
  }
];
