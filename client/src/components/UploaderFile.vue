<template>
  <v-row>
    <v-col
      :cols="cols"
      :sm="sm"
      :md="md"
      :lg="lg"
      :xl="xl"
    >
      <div class="d-flex align-center outlined border">
        <v-file-input
          id="itemFile"
          v-model="value"
          :rules="[rules.required]"
          class="file-upload"
          @change="uploadFile($event, `itemFile`)"
          @click:clear="removeKey(`itemFile`)"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { EventBus } from "@/mixins/EventBus.js";
export default {
  name: "FileUploader",
  props: {
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  data() {
    return {
      value: null,
      itemFile: {
        name: "",
      },
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
      }
    };
  },
  methods: {
    callItBack() {
      alert("function called");
    },

    uploadFile(file, key) {
      if (file != null) {
        const formdata = new FormData();
        formdata.append("image", file);
        this.$http.post(process.env.VUE_APP_API_IMG, formdata).then((res) => {
          this.itemFile[key] = res.data.data;
          EventBus.$emit("selectFile", {
            src: res.data.data,
          });
        });
      }
    },
    removeKey() {
      EventBus.$emit("selectFile", {
        src: null,
      });
    },
  },
};
</script>

<style lang="scss">
.file-upload {
  ::placeholder {
    text-align: right !important;
  }
  .v-input__slot {
    width: 97%;
    margin-right: 3%;
    border-radius: 20px;
  }
  .v-input__prepend-outer {
    .v-icon.notranslate.v-icon--link.mdi.mdi-paperclip {
      background: #0d8dbf;
      border-radius: 50%;
      padding: 0.4rem;
    }
    .mdi-paperclip::before {
      transform: rotateZ(45deg);
      color: #fff;
      font-size: 2.4rem;
    }
  }
}
</style>
