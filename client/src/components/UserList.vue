<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-autocomplete
      :disabled="isUpdating"
      :items="users"
      :loading="isUpdating"
      :label="label"
      item-text="name"
      item-value="_id"
      return-object
      :value="value"
      v-on="$listeners"
      @change="submitUser"
      :rules="[rules.required]"
      required
    />
  </v-col>
</template>

<script>
export default {
  name: "Users",

  props: {
    value: { type: String, default: null },
    label: { type: String, default: "" },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  data() {
    return {
      autoUpdate: true,
      isUpdating: false,
      users: [],
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      },
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },

  methods: {
    getUsersData() {
      return new Promise((resolve, reject) => {
        this.$http
          .get(`${this.$privateKey}/users`)
          .then((res) => {
            this.users = res.data.ASREVIRA.users;
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    submitUser(e) {
      this.$emit("input", e);
      this.$emit("submit" , this.users.find(item => item._id == e))
    //   this.users.splice(0,users.findIndex(item => item._id == e));
    },
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
  beforeMount() {
    this.getUsersData();
  },
};
</script>