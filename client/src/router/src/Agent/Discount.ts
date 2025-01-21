import AgentDiscount from "@/views/Admin/src/Discount";

//////////////////////////////////
// Start Pages Admin Discount Folder

import AgentDiscountCreate from "@/pages/Agent/Discount/Create";
import AgentDiscountList from "@/pages/Agent/Discount/List";
import AgentDiscountEdit from "@/pages/Agent/Discount/Edit";
import AgentDiscountView from "@/pages/Agent/Discount/View";
import AgentDiscountCategory from "@/pages/Agent/Discount/Category";

//  End  Pages Admin Discount Folder
//////////////////////////////////

export default [
  {
    path: "discount",
    name: "AgentDiscount",
    component: AgentDiscount,
    redirect: "/discount/",
    children: [
      {
        path: "create",
        name: "AgentDiscountCreate",
        component: AgentDiscountCreate,
      },
      {
        path: "list",
        name: "AgentDiscountList",
        component: AgentDiscountList,
      },
      {
        path: ":id/view",
        name: "AgentDiscountView",
        component: AgentDiscountView,
      },
      {
        path: ":id/edit",
        name: "AgentDiscountEdit",
        component: AgentDiscountEdit,
      },
      {
        path: "category",
        name: "AgentDiscountCategory",
        component: AgentDiscountCategory,
      },
    ],
  },
];
