import AcceptorWallet from "@/views/Acceptor/src/Wallet";

import AcceptorWalletCreate from "@/pages/Acceptor/Wallet/Create";
import AcceptorWalletEdit from "@/pages/Acceptor/Wallet/Edit";
import AcceptorWalletList from "@/pages/Acceptor/Wallet/List";
export default [
  {
    path: "wallet",
    name: "AcceptorWallet",
    component: AcceptorWallet,
    redirect: "/wallet/list",
    children: [
      {
        path: "create",
        name: "AcceptorWalletCreate",
        component: AcceptorWalletCreate,
      },
      {
        path: ":id/edit",
        name: "AcceptorWalletEdit",
        component: AcceptorWalletEdit,
      },
      {
        path: "list",
        name: "AcceptorWalletList",
        component: AcceptorWalletList,
      },
    ],
  },
];
