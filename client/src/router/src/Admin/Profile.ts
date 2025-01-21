import AdminProfileEdit from "@/views/Admin/src/ProfileEdit";
import AdminProfileEditCard from "@/pages/Admin/ProfileEdit/ProfileEditCard";

export default [
  {
    path: "profile",
    name: "AdminProfileEdit",
    component: AdminProfileEdit,
    redirect: "/profile/",
    children: [
      {
        path: "edit",
        name: "AdminProfileEditCard",
        component: AdminProfileEditCard,
      },
    ],
  },
];
