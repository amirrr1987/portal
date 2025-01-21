<template>
  <v-app-bar
    app
    color="primary"
    class="navbar white--text vira-navbar vira-navbar--bg"
  >
    <div class="d-flex">
      <v-btn
        color="white"
        icon
        @click.stop="$parent.$parent.drawer = !$parent.$parent.drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
    <div class="d-flex justify-center align-center">
      <IconLogo width="35" height="35" />
      <span class="light--text mr-3">باشگاه مشتریان</span>
    </div>
    <div class="d-flex justify-end">
      <v-menu offset-y class="">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="transparent light--text"
            elevation="0"
            v-bind="attrs"
            v-on="on"
          >
            <span><IconDropdown width="10" height="10" /></span>
            <span class="mx-3 white--text text-lowercase vira-en">{{ username }}</span>
            <span><IconProfile width="25" height="25" /></span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-if="isLoggedIn">
            <v-list-item-title class="text-center"
              ><a @click.prevent="logout">خروج</a></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import IconLogo from "@/icons/Navbar/IconLogo";
import IconDropdown from "@/icons/Navbar/IconDropdown";
import IconProfile from "@/icons/Navbar/IconProfile";
export default {
  name: "Navbar",
  components: {
    IconLogo,
    IconDropdown,
    IconProfile,
  },
  data() {
    return {
      // usernamee: null,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    username() {
      return this.$store.state.currentUser.username;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    openMenu() {
      this.$parent.drawer = !this.$parent.drawer;
    },
  },
  mounted() {
    this.$http
      .get("/" + this.$store.state.privateKey + "/check-token")
      .then((res) => {
        this.$store.dispatch("setUserFromToken", res.data.ASREVIRA);
      })
      .catch((err) => {
        if (err.response.status == 403) {
          this.$store.dispatch("logout");
          this.$router.push("/login");
        }
      });
  },
};
</script>
<style lang="scss">
.v-app-bar {
  right: 0 !important;
}
.v-toolbar__content {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
}
.vira-navbar--bg {
  background-image: linear-gradient(to right, #3dbef1, #0d8dbf);
}
.text-lowercase {
  text-transform: lowercase;
}
</style>
