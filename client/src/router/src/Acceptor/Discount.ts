import AcceptorDiscount from "@/views/Acceptor/src/Discount";
import AcceptorDiscountCreate from "@/pages/Acceptor/Discount/Create";
import AcceptorDiscountList from "@/pages/Acceptor/Discount/List";
import AcceptorDiscountEdit from "@/pages/Acceptor/Discount/Edit";
import AcceptorDiscountView from "@/pages/Acceptor/Discount/View";
import AcceptorDiscountCategory from "@/pages/Acceptor/Discount/Category";
export default [
  {
    path: "discount",
    name: "AcceptorDiscount",
    component: AcceptorDiscount,
    redirect: "/discount/list",
    children: [
      {
        path: "create",
        name: "AcceptorDiscountCreate",
        component: AcceptorDiscountCreate,
      },
      {
        path: "list",
        name: "AcceptorDiscountList",
        component: AcceptorDiscountList,
      },
      {
        path: ":id/view",
        name: "AcceptorDiscountView",
        component: AcceptorDiscountView,
      },
      {
        path: ":id/edit",
        name: "AcceptorDiscountEdit",
        component: AcceptorDiscountEdit,
      },
      {
        path: "category",
        name: "AcceptorDiscountCategory",
        component: AcceptorDiscountCategory,
      },
    ],
  },
];
