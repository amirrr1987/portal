import AcceptorInvoiceIssue from "@/views/Acceptor/src/InvoiceIssue";

import AcceptorInvoiceIssueCreate from "@/pages/Acceptor/InvoiceIssue/Create";
import AcceptorInvoiceIssueList from "@/pages/Acceptor/InvoiceIssue/List";
export default [
  {
    path: "invoice-issue",
    name: "AcceptorInvoiceIssue",
    component: AcceptorInvoiceIssue,
    redirect: "/invoice-issue/list",
    children: [
      {
        path: "create",
        name: "AcceptorInvoiceIssueCreate",
        component: AcceptorInvoiceIssueCreate,
      },
      {
        path: "list",
        name: "AcceptorInvoiceIssueList",
        component: AcceptorInvoiceIssueList,
      },
    ],
  },
];
