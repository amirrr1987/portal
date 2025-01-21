import Admin from '@/views/Admin/Admin.vue';
import AdminDashboard from './Admin/Dashboard';
import AdminAcceptor from "./Admin/Acceptor";
import AdminAgent from "./Admin/Agent";
import AdminCategory from "./Admin/Category"
import AdminSaleReport from "./Admin/SaleReport"
import AdminViolation from "./Admin/Violation"
import AdminRequest from "./Admin/Request"
import AdminDiscount from "./Admin/Discount"
import AdminVoucher from "./Admin/Voucher";
import AdminProfile from "./Admin/Profile"
import AdminTicket from "./Admin/Ticket"
import AdminDefaultMessage from "./Admin/DefaultMessage"

export default [
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    redirect: "/admin/",
    // meta: {
    //   requiresAuth: true,
    // },
    children: [
      ...AdminDashboard,
      ...AdminAcceptor,
      ...AdminAgent,
      ...AdminCategory,
      ...AdminSaleReport,
      ...AdminViolation,
      ...AdminRequest,
      ...AdminDiscount,
      ...AdminVoucher,
      ...AdminProfile,
      ...AdminTicket,
      ...AdminDefaultMessage,
    ],
  },
];
