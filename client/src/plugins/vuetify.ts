/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/scss/materialdesignicons.scss";
import "vuetify/styles";
import fa from "vuetify/lib/locale/fa.mjs";
// Composables
import { createVuetify, type VuetifyOptions } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    locale: {
      rtl: true,
      locale: "fa",
    },
    themes: {
      colors: {
        primary: "#4fc7db",
        secondary: "#0d8dbf",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      light: {},
    },
  },
} as VuetifyOptions);
