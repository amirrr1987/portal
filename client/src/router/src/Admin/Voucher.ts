import AdminVoucher from "@/views/Admin/src/Voucher";
//////////////////////////////////
// Start Pages Admin BenCard Folder

import AdminVoucherCreate from "@/pages/Admin/Voucher/Create";
import AdminVoucherList from "@/pages/Admin/Voucher/List";
import AdminVoucherEdit from "@/pages/Admin/Voucher/Edit";
import AdminVoucherView from "@/pages/Admin/Voucher/View";

//  End  Pages Admin BenCard Folder
//////////////////////////////////
export default [
  {
    path: "voucher",
    name: "Admin‌‌Voucher",
    component: AdminVoucher,
    redirect: "/voucher/",
    children: [
      {
        path: "create",
        name: "AdminVoucherCreate",
        component: AdminVoucherCreate,
      },
      {
        path: "list",
        name: "AdminVoucherList",
        component: AdminVoucherList,
      },
      {
        path: ":id/view",
        name: "AdminVoucherView",
        component: AdminVoucherView,
      },
      {
        path: ":id/edit",
        name: "AdminVoucherEdit",
        component: AdminVoucherEdit,
      },
    ],
  },
];
