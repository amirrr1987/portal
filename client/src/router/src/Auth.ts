import Login from "@/views/Auth/Login.vue";
import Forget from "@/views/Auth/Forget.vue";
import Register from "@/views/Auth/Register.vue";
import NotFound from "@/views/Auth/Page404.vue";

export default [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forget",
    name: "Forget",
    component: Forget,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/404",
    component: NotFound,
  },
];
