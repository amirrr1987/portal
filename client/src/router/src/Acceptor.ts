import Acceptor from "@/views/Acceptor/Acceptor.vue";
import AcceptorDashboard from "./Acceptor/Dashboard";
import AcceptorInvoiceIssue from "./Acceptor/InvoiceIssue";
import AcceptorInvoiceList from "./Acceptor/InvoiceList";
import AcceptorSaleReport from "./Acceptor/SaleReport";
import AcceptorWallet from "./Acceptor/Wallet";
import AcceptorAccount from "./Acceptor/Account";
import AcceptorSettlement from "./Acceptor/Settlement";
import AcceptorDiscount from "./Acceptor/Discount";
import AcceptorComment from "./Acceptor/Comment";
import AcceptorViolation from "./Acceptor/Violation";
import AcceptorTicket from "./Acceptor/Ticket";
import AcceptorVoucher from "./Acceptor/Voucher";
import AcceptorVirtualCreditCard from "./Acceptor/VirtualCreditCard";

export default [
  {
    path: "/acceptor",
    name: "Acceptor",
    component: Acceptor,
    redirect: "/acceptor/",
    meta: {
      requiresAuth: true,
    },
    children: [
      ...AcceptorDashboard,
      ...AcceptorInvoiceIssue,
      ...AcceptorInvoiceList,
      ...AcceptorSaleReport,
      ...AcceptorWallet,
      ...AcceptorAccount,
      ...AcceptorSettlement,
      ...AcceptorComment,
      ...AcceptorViolation,
      ...AcceptorTicket,
      ...AcceptorDiscount,
      ...AcceptorVoucher,
      ...AcceptorVirtualCreditCard,
    ],
  },
];
