<template>
  <v-card class="pa-lg-16">
    <Choose v-show="step == 1" />
    <Owner v-show="step == 2" />
    <Acceptor v-show="step == 3" />
    <Images v-show="step == 4" />
  </v-card>
</template>

<script>
import Choose from "@/pages/Agent/Acceptor/create/Choose";
import Owner from "@/pages/Agent/Acceptor/create/Owner";
import Acceptor from "@/pages/Agent/Acceptor/create/Acceptor";
import Images from "@/pages/Agent/Acceptor/create/Images";
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
