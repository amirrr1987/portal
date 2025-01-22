<template>
  <v-col v-bind="colProps">
    <slot name="before" />
    <v-btn v-if="!iconDelete" :color="color" :class="btnClass" v-on="listeners">
      <IconEdit v-if="iconEdit" width="18" height="18" />
      <IconDelete v-if="iconDelete" width="18" height="18" />
      <IconList v-if="iconList" width="18" height="18" />
      <IconKey v-if="iconKey" width="18" height="18" />
      <IconCheck v-if="iconCheck" width="18" height="18" />
      <IconRemove v-if="iconRemove" width="18" height="18" />
      <IconEye v-if="iconEye" width="18" height="18" />
      <IconUndo v-if="iconUndo" width="18" height="18" />
    </v-btn>

    <v-dialog
      v-if="iconDelete"
      v-model="deleteDialog"
      persistent
      max-width="440"
    >
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" :color="color" :class="btnClass" v-on="on">
          <IconDelete width="18" height="18" />
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline primary white--text">
          {{ dialogTitle }}
        </v-card-title>
        <v-card-text class="font-lg-1 text-center my-9">
          {{ dialogText }}
        </v-card-text>
        <v-divider class="mx-3" />
        <v-card-actions class="d-flex justify-space-around py-5">
          <v-btn
            color="primary"
            dark
            width="140"
            height="45"
            rounded
            @click="removeItem(itemId)"
          >
            تائید
          </v-btn>
          <v-btn
            color="red"
            dark
            width="140"
            height="45"
            rounded
            @click="deleteDialog = false"
          >
            انصراف
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <slot name="after" />
  </v-col>
</template>

<script setup lang="ts">
import { ref, computed, useAttrs } from "vue";
import { useDisplay } from "vuetify";
import IconEdit from "@/icons/Main/IconEdit.vue";
import IconDelete from "@/icons/Main/IconDelete.vue";
import IconList from "@/icons/Main/IconList.vue";
import IconKey from "@/icons/Main/IconKey.vue";
import IconCheck from "@/icons/Main/IconCheck.vue";
import IconRemove from "@/icons/Main/IconRemove.vue";
import IconEye from "@/icons/Main/IconEye.vue";
import IconUndo from "@/icons/Main/IconUndo.vue";

interface Props {
  itemId?: string;
  iconList?: boolean;
  iconDelete?: boolean;
  iconEdit?: boolean;
  iconKey?: boolean;
  iconRemove?: boolean;
  iconCheck?: boolean;
  iconEye?: boolean;
  iconUndo?: boolean;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  itemId: null,
  iconList: false,
  iconDelete: false,
  iconEdit: false,
  iconKey: false,
  iconRemove: false,
  iconCheck: false,
  iconEye: false,
  iconUndo: false,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const emit = defineEmits(["delete"]);

const { smAndUp: isSmAndUp } = useDisplay();
const deleteDialog = ref(false);
const dialogTitle = "اخطار";
const dialogText = "آیا از حذف اطلاعات مطمئن هستید؟";
const attrs = useAttrs();

const colProps = computed(() => ({
  cols: props.cols,
  sm: props.sm,
  md: props.md,
  lg: props.lg,
  xl: props.xl,
}));

const color = computed(() => {
  if (props.iconDelete) return "red";
  if (props.iconEdit) return "warning";
  if (props.iconList) return "purple";
  if (props.iconRemove) return "red";
  if (props.iconUndo) return "#57cf8f";
  if (props.iconCheck) return "#57cf8f";
  return "primary";
});

const btnClass = computed(() => ({
  "v-btn--contained v-btn--tile": !isSmAndUp.value,
  "v-btn--icon v-btn--round": isSmAndUp.value,
}));

const listeners = computed(() => ({
  ...attrs,
  click: (event: Event) => emit("delete", props.itemId),
}));

const removeItem = (itemId: string) => {
  deleteDialog.value = false;
  emit("delete", itemId);
};
</script>
