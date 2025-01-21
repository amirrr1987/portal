import AdminDefaultMessage from "@/views/Admin/src/DefaultMessage";
import AdminDefaultMessageCreate from "@/pages/Admin/DefaultMessage/Create";
import AdminDefaultMessageList from "@/pages/Admin/DefaultMessage/List";
import AdminDefaultMessageEdit from "@/pages/Admin/DefaultMessage/Edit";
import AdminDefaultMessageView from "@/pages/Admin/DefaultMessage/View";
export default [
  {
    path: "default-message",
    name: "AdminDefaultMessage",
    component: AdminDefaultMessage,
    redirect: "/default-message/",
    children: [
      {
        path: "create",
        name: "AdminDefaultMessageCreate",
        component: AdminDefaultMessageCreate,
      },
      {
        path: "list",
        name: "AdminDefaultMessageList",
        component: AdminDefaultMessageList,
      },
      {
        path: ":id/view",
        name: "AdminDefaultMessageView",
        component: AdminDefaultMessageView,
      },
      {
        path: ":id/edit",
        name: "AdminDefaultMessageEdit",
        component: AdminDefaultMessageEdit,
      },
    ],
  },
];
