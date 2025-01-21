import AgentWage from "@/views/Agent/src/Wage";
import AgentWageList from "@/pages/Agent/Wage/List";


export default [
  {
    path: "wage",
    name: "AgentWage",
    component: AgentWage,
    redirect: "/wage/",
    children: [
      {
        path: "list",
        name: "AgentWageList",
        component: AgentWageList,
      },
    ],
  },
];
