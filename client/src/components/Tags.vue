<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="3"
          class="d-flex align-center justify-space-around"
        >
          <v-text-field
            outlined
            :value="tempTag"
            :rules="[rules.tags]"
            @input="onInputTag"
            @keypress.enter.prevent="pushTag"
          />
        </v-col>
        <v-col cols="12" md="2">
          <v-btn
            color="primary"
            class="mt-2"
            rounded
            block
            medium
            @click.prevent="pushTag"
          >
            ثبت تگ
          </v-btn>
        </v-col>
        <v-col cols="12" lg="5">
          <div v-show="tagIsMax" class="error--text mt-2">
            {{ tagMessage }}
          </div>
          <div v-show="tagIsRepeat" class="error--text mt-2">
            {{ repeatMessage }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="border border-gray3 border-size-2 rounded px-3 py-2 py-md-2 mb-2 ml-2 d-inline-block"
          >
            <v-btn icon @click="removeTag(index)">
              <IconRemoveCircle width="20" height="20" />
            </v-btn>
            {{ tag }}
            <v-btn icon disabled>
              <IconTag width="20" height="20" />
            </v-btn>
          </span>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconTag from "@/icons/Main/IconTag.vue";
import IconRemoveCircle from "@/icons/Main/IconRemoveCircle.vue";

interface Props {
  value?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
});

const emit = defineEmits<{
  (event: "update:value", value: string): void;
  (event: "update:tags", tags: string[]): void;
}>();

const tags = ref<string[]>([]);
const tempTag = ref<string>("");
const tagIsMax = ref<boolean>(false);
const tagIsRepeat = ref<boolean>(false);
const repeatMessage = "تگ وارد شده تکراری میباشد";
const tagMessage = "حداکثر ۶ عدد تگ مجاز است.";

const rules = {
  tags: () => tags.value.length > 0 || "این فیلد الزامی است",
};

const pushTag = () => {
  tagIsRepeat.value = false;
  tagIsMax.value = false;

  if (tags.value.length > 5) {
    tagIsMax.value = true;
    return;
  }

  if (tags.value.includes(tempTag.value)) {
    tagIsRepeat.value = true;
    return;
  }

  if (tempTag.value && !tags.value.includes(tempTag.value)) {
    tags.value.push(tempTag.value);
    emit("update:tags", tags.value);
  }

  tempTag.value = "";
};

const removeTag = (index: number) => {
  tags.value.splice(index, 1);
  emit("update:tags", tags.value);
};

const onInputTag = (value: string) => {
  tempTag.value = value;
  emit("update:value", value);
};
</script>
