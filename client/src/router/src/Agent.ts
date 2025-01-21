import Agent from "@/views/Agent/Agent.vue";
import AgentDashboard from "./Agent/Dashboard";
import AgentAcceptor from "./Agent/Acceptor";
import AgentSaleReport from "./Agent/SaleReport";
import AgentViolation from "./Agent/Violation";
import AgentTicket from "./Agent/Ticket";
import AgentDiscount from "./Agent/Discount";
import AgentWage from "./Agent/Wage";

export default [
  {
    path: "/agent",
    name: "Agent",
    component: Agent,
    redirect: "/agent/",
    meta: {
      requiresAuth: true,
    },
    children: [
      ...AgentDashboard,
      ...AgentAcceptor,
      ...AgentSaleReport,
      ...AgentViolation,
      ...AgentTicket,
      ...AgentDiscount,
      ...AgentWage,
    ],
  },
];
