import AcceptorAccount from "@/views/Acceptor/src/Account";

import AcceptorAccountCreate from "@/pages/Acceptor/Account/Create";
import AcceptorAccountList from "@/pages/Acceptor/Account/List";
export default [
  {
    path: "account",
    name: "AcceptorAccount",
    component: AcceptorAccount,
    redirect: "/account/list",
    children: [
      {
        path: "create",
        name: "AcceptorAccountCreate",
        component: AcceptorAccountCreate,
      },
      {
        path: "list",
        name: "AcceptorAccountList",
        component: AcceptorAccountList,
      },
    ],
  },
];
