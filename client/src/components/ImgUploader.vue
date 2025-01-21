<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <div class="subheading mb-5 mr-2" style="color: #686868">
      <slot name="header" />
    </div>

    <v-img
      ref="chooseFile"
      :src="props.imgSrc"
      :lazy-src="props.imgSrc"
      :alt="props.imgName"
      :title="props.imgName"
      transition="scale-transition"
      aspect-ratio="1.7"
      max-width="100%"
      class="img-upload rounded-lg position-relative"
      :class="props.imgSrc ? 'choose-file' : 'choose-file bordered'"
      :style="`border-color: ${changeBorderColor}`"
    >
      <template>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-btn
            v-show="!props.imgSrc"
            :color="changeColor"
            class="px-0"
            rounded
            dark
          >
            <label
              :for="props.imgName"
              class="d-flex px-4 py-6"
              style="z-index: 9"
              >انتخاب فایل</label
            >
          </v-btn>

          <v-dialog v-model="showImg" persistent max-width="590">
            <template #activator="{ on, attrs }">
              <v-btn
                v-show="props.imgSrc"
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
            <v-img :src="props.imgSrc" :lazy-src="props.imgSrc">
              <v-btn
                fixed
                icon
                small
                dark
                class="red mr-2 mt-2"
                @click="showImg = false"
              >
                <v-icon>mdi-window-close</v-icon>
              </v-btn>
            </v-img>
          </v-dialog>

          <v-file-input
            :id="props.imgName"
            v-model="value"
            accept="image/png, image/jpeg, image/bmp"
            :rules="checkValidate"
            :messages="imgSrcMessage"
            required
            @change="onFileChange($event, props.imgName)"
          />

          <v-btn
            v-if="props.remove"
            v-show="props.imgSrc"
            absolute
            icon
            small
            dark
            class="red"
            @click="removeImage(props.imgName)"
          >
            <v-icon>mdi-window-close</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-img>
    <slot name="after" />
  </v-col>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { EventBus } from "@/mixins/EventBus"; // Ensure EventBus is compatible with Vue 3
import axios from "axios"; // Replace with your HTTP composable or library

interface Props {
  cols?: string;
  required?: boolean;
  imgName?: string;
  imgSrc?: string;
  remove?: boolean;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  validated?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  cols: "12",
  required: false,
  imgName: null,
  imgSrc: "",
  remove: true,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  validated: false,
});

const showImg = ref(false);
const value = ref<File | null>(null);
const imageFile = ref<Record<string, string>>({});
const imageSrc = ref<Record<string, string>>({});

const imgSrcMessage = computed(() => {
  return props.required && !props.imgSrc ? "این تصاویر الزامی است" : "";
});

const checkValidate = computed(() => {
  return props.required ? [(v: any) => !!v || "این فیلد الزامی است"] : [];
});

const changeColor = computed(() => {
  return !value.value && props.validated ? "red" : "primary";
});

const changeBorderColor = computed(() => {
  return !value.value && props.validated ? "red" : "primary";
});

const uploadFile = async (file: File, key: string) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(
      import.meta.env.VITE_APP_API_IMG,
      formData
    ); // Replace with your environment variable
    imageFile.value[key] = response.data.data;

    EventBus.emit("selectImg", {
      name: key,
      src: response.data.data,
    });
  } catch (error) {
    console.error("Failed to upload file:", error);
  }
};

const onFileChange = (e: File, key: string) => {
  imageSrc.value[key] = URL.createObjectURL(e);
  uploadFile(e, key);
};

const removeImage = (key: string) => {
  imageSrc.value[key] = "";
  imageFile.value[key] = "";
  value.value = null;

  EventBus.emit("selectImg", {
    name: key,
    src: "",
  });
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
