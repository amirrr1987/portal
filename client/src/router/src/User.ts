import User from "@/views/User/User.vue";
import UserLanding from "@/router/src/User/Landing";

export default [
  {
    path: "/",
    name: "User",
    component: User,
    redirect: "/user/",
    // meta: {
    //   requiresAuth: true,
    // },
    children: [...UserLanding],
  },
];
