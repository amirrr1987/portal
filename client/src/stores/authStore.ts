import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    status: "",
    token: localStorage.getItem("_tk") || "",
    privateKey: localStorage.getItem("_pv") || "",
    publicKey: localStorage.getItem("_pb") || "",
    accessUser: localStorage.getItem("_au") || "",
    auth: {
      message: "",
    },
    currentUser: "",
    isLoggedIn: false,
    acceptor: null as any,
  }),
  actions: {
    // تنظیم کلیدهای احراز هویت
    setAuthKeys(payload: { privateKey: string; publicKey: string; token: string }) {
      this.privateKey = payload.privateKey;
      this.publicKey = payload.publicKey;
      this.token = payload.token;
      localStorage.setItem("_tk", payload.token);
      localStorage.setItem("_pv", payload.privateKey);
      localStorage.setItem("_pb", payload.publicKey);
    },

    // موفقیت در احراز هویت
    authSuccess(auth: any) {
      this.status = "success";
      this.currentUser = auth.user;
      this.isLoggedIn = true;
      this.accessUser = auth.access_user;
      this.acceptor = auth.accepter;
      localStorage.setItem("_au", auth.access_user);
    },

    // خطا در احراز هویت
    authError(payload: { error: string; statusCode: string }) {
      this.status = payload.statusCode;
      this.auth.message = payload.error;
    },

    // خروج کاربر
    logout() {
      this.status = "";
      this.token = "";
      this.publicKey = "";
      this.privateKey = "";
      localStorage.removeItem("_tk");
      localStorage.removeItem("_pv");
      localStorage.removeItem("_pb");
      localStorage.removeItem("_au");
      delete axios.defaults.headers.common["token"];
      delete axios.defaults.headers.common["key_public"];
    },

    // دریافت توکن
    async getToken(user: any) {
      try {
        const response = await axios.post("token", { l: import.meta.env.VITE_APP_LICENCE });
        const { token, privateKey, publicKey } = response.data?.ASREVIRA || {};
        this.setAuthKeys({ privateKey, publicKey, token });

        axios.defaults.headers.common["token"] = token;
        axios.defaults.headers.common["key_public"] = publicKey;
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

        const loginResponse = await this.login({ privateKey, user });
        return loginResponse.data;
      } catch (err: any) {
        const error = err.response?.data?.ASREVIRA?.message;
        const statusCode = err.response?.status;
        this.authError({ error, statusCode });
        localStorage.removeItem("_tk");
        throw err;
      }
    },

    // ورود کاربر
    async login(payload: { privateKey: string; user: any }) {
      try {
        const response = await axios.post(`${payload.privateKey}/login`, payload.user);
        const accessUser = response.data?.ASREVIRA?.access_user;
        this.authSuccess(response.data.ASREVIRA);
        axios.defaults.headers.common["access_user"] = accessUser;
        return response;
      } catch (err: any) {
        const error = err.response?.data?.ASREVIRA?.message;
        const statusCode = err.response?.status;
        this.authError({ error, statusCode });
        localStorage.removeItem("_tk");
        throw err;
      }
    },

    // تنظیم کاربر از توکن
    setUserFromToken(data: any) {
      this.authSuccess(data);
    },
  },
  getters: {
    // بررسی وضعیت ورود کاربر
    isLoggedIn: (state) => !!state.token && !!state.publicKey && !!state.privateKey,
  },
});
