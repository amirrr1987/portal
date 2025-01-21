import AcceptorVoucher from "@/views/Acceptor/src/Voucher";
import AcceptorVoucherCreate from "@/pages/Acceptor/Voucher/Create";
import AcceptorVoucherList from "@/pages/Acceptor/Voucher/List";
import AcceptorVoucherEdit from "@/pages/Acceptor/Voucher/Edit";
import AcceptorVoucherView from "@/pages/Acceptor/Voucher/View";
export default [
  {
    path: "voucher",
    name: "Acceptor‌‌Voucher",
    component: AcceptorVoucher,
    redirect: "/voucher/list",
    children: [
      {
        path: "create",
        name: "‌‌AcceptorVoucherCreate",
        component: AcceptorVoucherCreate,
      },
      {
        path: "list",
        name: "‌‌AcceptorVoucherList",
        component: AcceptorVoucherList,
      },
      {
        path: ":id/view",
        name: "‌‌AcceptorVoucherView",
        component: AcceptorVoucherView,
      },
      {
        path: ":id/edit",
        name: "Acceptor‌‌VoucherEdit",
        component: AcceptorVoucherEdit,
      },
    ],
  },
];
