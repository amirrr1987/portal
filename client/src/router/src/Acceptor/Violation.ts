import AcceptorViolation from "@/views/Acceptor/src/Violation";

import AcceptorViolationList from "@/pages/Acceptor/Violation/List";


export default [
  {
    path: "violation",
    name: "AcceptorViolation",
    component: AcceptorViolation,
    redirect: "/violation/list",
    children: [
      {
        path: "list",
        name: "AcceptorViolationList",
        component: AcceptorViolationList,
      },
    ],
  },
];