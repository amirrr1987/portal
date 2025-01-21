<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <div
      class="subheading mb-5 mr-2"
      style="color: #686868"
    >
      <slot name="header" />
    </div>

    <v-img
      ref="chooseFile"
      :src="imgSrc"
      :lazy-src="imgSrc"
      :v-show="imageSrc.imgName"
      :alt="imgName"
      :title="imgName"
      transition="scale-transition"
      aspect-ratio="1.7"
      max-width="100%"
      class="img-upload rounded-lg position-relative"
      :class="imgSrc ? 'choose-file' : `choose-file bordered`"
      :style="`border-color : ${changeBorderColor}`"
    >
      <template>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-btn
            v-show="!imgSrc"
            :color="changeColor"
            class="px-0"
            rounded
            dark
          >
            <label
              :for="imgName"
              class="d-flex px-4 py-6"
              style="z-index: 9"
            >انتخاب فایل</label>
          </v-btn>

          <v-dialog
            v-model="ShowImg"
            persistent
            max-width="590"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                v-show="imgSrc"
                style="z-index: 1"
                class="px-6 py-5"
                color="primary"
                rounded
                dark
                v-bind="attrs"
                v-on="on"
              >
                مشاهده
              </v-btn>
            </template>
            <v-img
              :src="imgSrc"
              :lazy-src="imgSrc"
              :v-show="imageSrc.imgName"
            >
              <v-btn
                fixed
                icon
                small
                dark
                :alt="imgName"
                :title="imgName"
                class="red mr-2 mt-2"
                @click="ShowImg = false"
              >
                <v-icon>mdi-window-close</v-icon>
              </v-btn>
            </v-img>
          </v-dialog>

          <v-file-input
            :id="imgName"
            v-model="value"
            accept="image/png, image/jpeg, image/bmp"
            :rules="checkValidate"
            :messages="imgSrcMessage"
            required
            @change="onFileChange($event, `${imgName}`)"
          />

          <v-btn
            v-if="remove"
            v-show="imgSrc"
            absolute
            icon
            small
            dark
            class="red"
            @click="removeImage(`${imgName}`)"
          >
            <v-icon>mdi-window-close</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-img>
    <slot name="after" />
  </v-col>
</template>

<script lang="ts">
import { EventBus } from "@/mixins/EventBus";

export default {
  name: "ImageUploader",
  props: {
    cols: { type: String, default: "12" },
    required: { type: Boolean, default: false },
    imgName: { type: String, default: null },
    imgSrc: { type: String, default: "" },
    remove: { type: Boolean, default: true },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
    validated: { type: Boolean, default: false },
  },
  data() {
    return {
      hasImage: false,
      ShowImg: false,
      value: null,
      imageFile: {
        imgName: "",
      },
      imageSrc: {
        imgName: "",
      },

      rules: {
        imgSrc: () => !this.imgSrc == "",
      },
    };
  },
  computed: {
    imgSrcMessage() {
      if (this.required == true) {
        return !this.imgSrc ? "این تصاویر الزامی است" : "";
      } else {
        return "";
      }
    },
    checkValidate() {
      if (this.required == true) {
        return [this.rules.imgSrc];
      } else {
        return [];
      }
    },

    changeColor() {
      return !this.value && this.validated ? "red" : "primary";
    },
    changeBorderColor() {
      return !this.value && this.validated ? "red" : "primary";
    },
  },

  methods: {
    //////////////////////////////////
    // Start Upload File
    uploadFile(file, key) {
      const formdata = new FormData();
      formdata.append("image", file);
      this.$http.post(process.env.VUE_APP_API_IMG, formdata).then((res) => {
        this.imageFile[key] = res.data.data;

        EventBus.$emit("selectImg", {
          name: `${this.imgName}`,
          src: res.data.data,
        });
        this.rules.imgSrc = true;
      });
    },
    onFileChange(e, key) {
      this.imageSrc[key] = URL.createObjectURL(e);
      this.uploadFile(e, key);
    },
    removeImage(key) {
      this.imageSrc[key] = "";
      this.imageFile[key] = "";

      this.value = null;

      this.rules.imgSrc = false;
      EventBus.$emit("selectImg", {
        name: `${this.imgName}`,
        src: "",
      });
      this.rules.imgSrc = false;
    },
    //  End  Upload File
    //////////////////////////////////
  },
};
</script>
<style lang="scss">
.img-upload {
  overflow: hidden;

  .v-input.v-file-input {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 75px;

    .v-input__slot {
      display: none;
    }
    .v-input__prepend-outer {
      display: none;
    }

    .v-text-field__details {
      position: absolute;
      bottom: 10px;
      margin: auto;
      left: 0;
      right: 0;
    }
    .v-messages {
      text-align: center;
    }
  }
  .v-responsive__content {
    width: 100% !important;
  }
  .v-btn.v-btn--absolute {
    right: 10px;
    top: 10px;
  }
}
.bordered {
  border: 2px dashed #999;
  border-radius: 7px;
}
.choose-file-name {
  background-color: #003;
}
</style>
