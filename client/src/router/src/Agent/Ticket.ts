import AgentTicket from "@/views/Admin/src/Ticket";
import AgentTicketCreate from "@/pages/Agent/Ticket/Create";
import AgentTicketList from "@/pages/Agent/Ticket/List";
import AgentTicketEdit from "@/pages/Agent/Ticket/Edit";
import AgentTicketView from "@/pages/Agent/Ticket/View";
export default [
  {
    path: "ticket",
    name: "AgentTicket",
    component: AgentTicket,
    redirect: "/ticket/",
    children: [
      {
        path: "create",
        name: "AgentTicketCreate",
        component: AgentTicketCreate,
      },
      {
        path: "list",
        name: "AgentTicketList",
        component: AgentTicketList,
      },
      {
        path: ":id/view",
        name: "AgentTicketView",
        component: AgentTicketView,
      },
      {
        path: ":id/edit",
        name: "AgentTicketEdit",
        component: AgentTicketEdit,
      },
    ],
  },
];
