import { computed } from "vue";
import { useAuthStore } from "@/stores/authStore"; // Import Pinia store

export default {
  setup() {
    const authStore = useAuthStore();

    // محاسبه‌گر برای دریافت privateKey
    const privateKey = computed(() => authStore.privateKey);

    return {
      privateKey,
    };
  },
};
