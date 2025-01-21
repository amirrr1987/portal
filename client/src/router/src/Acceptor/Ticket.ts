import AcceptorTicket from "@/views/Acceptor/src/Ticket";

import AcceptorTicketCreate from "@/pages/Acceptor/Ticket/Create";
import AcceptorTicketList from "@/pages/Acceptor/Ticket/List";
import AcceptorTicketEdit from "@/pages/Acceptor/Ticket/Edit";
import AcceptorTicketView from "@/pages/Acceptor/Ticket/View";
import AcceptorTicketME from "@/pages/Acceptor/Ticket/MyList";


export default [
  {
    path: "ticket",
    name: "AcceptorTicket",
    component: AcceptorTicket,
    redirect: "/ticket/list",
    children: [
      {
        path: "create",
        name: "AcceptorTicketCreate",
        component: AcceptorTicketCreate,
      },
      {
        path: "list",
        name: "AcceptorTicketList",
        component: AcceptorTicketList,
      },
      {
        path: ":id/view",
        name: "AcceptorTicketView",
        component: AcceptorTicketView,
      },
      {
        path: ":id/edit",
        name: "AcceptorTicketEdit",
        component: AcceptorTicketEdit,
      },
      {
        path: "me",
        name: "AcceptorTicketME",
        component: AcceptorTicketME
      },
    ],
  },
];
