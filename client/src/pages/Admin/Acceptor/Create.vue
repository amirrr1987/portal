<template>
  <v-card
    class="pa-lg-16"
    :class="{
      'elevation-0': $vuetify.breakpoint.smAndDown,
    }"
  >
    <Choose v-show="step == 1" />
    <Owner v-show="step == 2" />
    <Acceptor v-show="step == 3" />
    <Images v-show="step == 4" />
  </v-card>
</template>

<script>
import Choose from "@/pages/Admin/Acceptor/create/Choose";
import Owner from "@/pages/Admin/Acceptor/create/Owner";
import Acceptor from "@/pages/Admin/Acceptor/create/Acceptor";
import Images from "@/pages/Admin/Acceptor/create/Images";
export default {
  name: "Create",
  components: {
    Choose,
    Owner,
    Acceptor,
    Images,
  },
  data() {
    return {
      step: 2,
      create: {},
    };
  },
};
</script>
