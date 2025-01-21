<template>
  <v-row>
    <v-col
      :cols="props.cols"
      :sm="props.sm"
      :md="props.md"
      :lg="props.lg"
      :xl="props.xl"
    >
      <div class="d-flex align-center outlined border">
        <v-file-input
          id="itemFile"
          v-model="value"
          :rules="[rules.required]"
          class="file-upload"
          @change="uploadFile($event, 'itemFile')"
          @click:clear="removeKey('itemFile')"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHttp } from "@/composables/useHttp"; // Replace with your HTTP composable or library
import { EventBus } from "@/mixins/EventBus"; // Ensure EventBus is compatible with Vue 3

interface Props {
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const value = ref<File | null>(null);
const itemFile = ref({
  name: "",
});

const rules = {
  required: (value: any) => !!value || "این فیلد الزامی است",
};

const uploadFile = async (file: File, key: string) => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const { post } = useHttp();
      const response = await post(import.meta.env.VITE_APP_API_IMG, formData); // Replace with your environment variable
      itemFile.value[key] = response.data.data;
      EventBus.emit("selectFile", {
        src: response.data.data,
      });
    } catch (error) {
      console.error("Failed to upload file:", error);
    }
  }
};

const removeKey = () => {
  EventBus.emit("selectFile", {
    src: null,
  });
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
