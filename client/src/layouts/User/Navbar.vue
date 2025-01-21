<template>
  <v-app-bar class="user-navbar" height="170">
    <div class="top-user-menu">
    <IconLogo width="35" height="35" />


        <div class="d-flex justify-space-between align-center">
      <IconLogo width="35" height="35" />
      <span class="white--text mr-3">باشگاه مشتریان</span>
    </div>
      <v-btn color="#F1f1f1" rounded>ورود یا عضویت</v-btn>
    </div>
    <div class="">
    <v-row>
      <v-col cols="12" md="6">

      <v-text-field placeholder="جستجو" class="white rounded-lg px-3 py-1" hide-details  append-icon="mdi-magnify"/>
      </v-col>
    </v-row>
    </div>

    <nav class="navbar">
      <ul class="navbar__menu">
        <li class="navbar__item">
          <router-link to="/user" class="navbar__link">
          <IconLogo class="ml-2" width="20" height="20" />
          لیست اصناف
          </router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/user" class="navbar__link">
          <IconLogo class="ml-2" width="20" height="20" />
          لیست پذیرندگان</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/amir" class="navbar__link">
          <IconLogo class="ml-2" width="20" height="20" />
          درباره ما</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/dfg" class="navbar__link">
          <IconLogo class="ml-2" width="20" height="20" />
          تماس با ما</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/123" class="navbar__link">
          <IconLogo class="ml-2" width="20" height="20" />
          ثبت نام پذیرندگان</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/3453" class="navbar__link">
          <IconLogo class="ml-2" width="20" height="20" />
          دریافت اپلیکیشن</router-link>
        </li>
      </ul>
    </nav>
  </v-app-bar>
</template>

<script lang="ts">
import IconLogo from "@/icons/Navbar/IconLogo";
export default {
  name: "Navbar",
  components: {
    IconLogo
  }
};
</script>

<style lang="scss">
.top-user-menu{
  display: grid;
  grid-template-columns: max-content max-content max-content;
  justify-content: space-between
}
.user-navbar {
  background: rgb(61, 190, 241);
  background: linear-gradient(
    90deg,
    rgba(61, 190, 241, 1) 25%,
    rgba(13, 141, 191, 1) 75%
  );
  .v-toolbar__content{

    grid-template-columns: 1fr !important;
  }
}
.navbar {

  &__item {
    list-style-type: none;
    margin-left: 6rem;
  }
  &__link {
    color: #FFF !important;
    display: flex;
    align-items: center;
  }
  &__menu {
    display: grid;
    grid-template-columns: repeat(6, max-content);
  }
}
.v-input__slot{

  &::before{
    display: none !important;
  }
  &::after{
    display: none !important;
  }
}
</style>
