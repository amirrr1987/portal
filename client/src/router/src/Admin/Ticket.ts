import AdminTicket from "@/views/Admin/src/Ticket";
import AdminTicketCreate from "@/pages/Admin/Ticket/Create";
import AdminTicketList from "@/pages/Admin/Ticket/List";
import AdminTicketEdit from "@/pages/Admin/Ticket/Edit";
import AdminTicketView from "@/pages/Admin/Ticket/View";
export default [
  {
    path: "ticket",
    name: "AdminTicket",
    component: AdminTicket,
    redirect: "/ticket/",
    children: [
      {
        path: "create",
        name: "AdminTicketCreate",
        component: AdminTicketCreate,
      },
      {
        path: "list",
        name: "AdminTicketList",
        component: AdminTicketList,
      },
      {
        path: ":id/view",
        name: "AdminTicketView",
        component: AdminTicketView,
      },
      {
        path: ":id/edit",
        name: "AdminTicketEdit",
        component: AdminTicketEdit,
      },
    ],
  },
];
