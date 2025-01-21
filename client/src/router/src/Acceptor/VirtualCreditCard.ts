import AcceptorVirtualCreditCard from "@/views/Acceptor/src/VirtualCreditCard";

import AcceptorVirtualCreditCardCreate from "@/pages/Acceptor/VirtualCreditCard/Create";
import AcceptorVirtualCreditCardList from "@/pages/Acceptor/VirtualCreditCard/List";
import AcceptorVirtualCreditCardCardModel from "@/pages/Acceptor/VirtualCreditCard/CardModel";
export default [
  {
    path: "virtual-credit-card",
    name: "AcceptorVirtualCreditCard",
    component: AcceptorVirtualCreditCard,
    redirect: "/virtual-credit-card/list",
    children: [
      {
        path: "create",
        name: "AcceptorVirtualCreditCardCreate",
        component: AcceptorVirtualCreditCardCreate,
      },
      {
        path: "list",
        name: "AcceptorVirtualCreditCardList",
        component: AcceptorVirtualCreditCardList,
      },
      {
        path: "card-model",
        name: "AcceptorVirtualCreditCardCardModel",
        component: AcceptorVirtualCreditCardCardModel,
      },
    ],
  },
];
