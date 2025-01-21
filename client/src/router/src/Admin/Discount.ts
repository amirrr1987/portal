import AdminDiscount from "@/views/Admin/src/Discount";

//////////////////////////////////
// Start Pages Admin Discount Folder

import AdminDiscountCreate from "@/pages/Admin/Discount/Create";
import AdminDiscountList from "@/pages/Admin/Discount/List";
import AdminDiscountEdit from "@/pages/Admin/Discount/Edit";
import AdminDiscountView from "@/pages/Admin/Discount/View";
import AdminDiscountCategory from "@/pages/Admin/Discount/Category";

//  End  Pages Admin Discount Folder
//////////////////////////////////

export default [
  {
    path: "discount",
    name: "AdminDiscount",
    component: AdminDiscount,
    redirect: "/discount/",
    children: [
      {
        path: "create",
        name: "AdminDiscountCreate",
        component: AdminDiscountCreate,
      },
      {
        path: "list",
        name: "AdminDiscountList",
        component: AdminDiscountList,
      },
      {
        path: ":id/view",
        name: "AdminDiscountView",
        component: AdminDiscountView,
      },
      {
        path: ":id/edit",
        name: "AdminDiscountEdit",
        component: AdminDiscountEdit,
      },
      {
        path: "category",
        name: "AdminDiscountCategory",
        component: AdminDiscountCategory,
      },
    ],
  }
]
