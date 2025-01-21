<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <slot name="before" />
    <v-btn
      v-if="!iconDelete"
      :color="color"
      :class="{
        'v-btn--contained v-btn--tile': $vuetify.breakpoint.smAndDown,
        'v-btn--icon v-btn--round': $vuetify.breakpoint.smAndUp,
      }"
      v-on="$listeners"
    >
      <IconEdit
        v-if="iconEdit"
        width="18"
        height="18"
      />
      <IconDelete
        v-if="iconDelete"
        width="18"
        height="18"
      />
      <IconList
        v-if="iconList"
        width="18"
        height="18"
      />
      <IconKey
        v-if="iconKey"
        width="18"
        height="18"
      />
      <IconCheck
        v-if="iconCheck"
        width="18"
        height="18"
      />
      <IconRemove
        v-if="iconRemove"
        width="18"
        height="18"
      />
      <IconEye
        v-if="iconEye"
        width="18"
        height="18"
      />
      <IconUndo
        v-if="iconUndo"
        width="18"
        height="18"
      />
    </v-btn>

    <v-dialog
      v-model="deleteDialog"
      persistent
      max-width="440"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          v-if="iconDelete"
          v-bind="attrs"
          :color="color"
          :class="{
            'v-btn--contained v-btn--tile': $vuetify.breakpoint.smAndDown,
            'v-btn--icon v-btn--round': $vuetify.breakpoint.smAndUp,
          }"
          v-on="on"
        >
          <IconDelete
            v-if="iconDelete"
            width="18"
            height="18"
          />
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline primary white--text">
          {{ dialogTitle }}
        </v-card-title>
        <v-card-text class="font-lg-1 text-center my-9">
          {{
            dialogText
          }}
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

<script lang="ts">
import IconEdit from "@/icons/Main/IconEdit";
import IconDelete from "@/icons/Main/IconDelete";
import IconList from "@/icons/Main/IconList";
import IconKey from "@/icons/Main/IconKey";
import IconCheck from "@/icons/Main/IconCheck";
import IconRemove from "@/icons/Main/IconRemove";
import IconEye from "@/icons/Main/IconEye";
import IconUndo from "@/icons/Main/IconUndo";
export default {
  name: "ActionBtn",
  components: {
    IconEdit,
    IconUndo,
    IconDelete,
    IconList,
    IconKey,
    IconRemove,
    IconCheck,
    IconEye,
  },
  props: {
    itemId: { type: String, default: null },
    icon: { type: String, default: null },
    iconList: { type: Boolean, default: false },
    iconDelete: { type: Boolean, default: false },
    iconEdit: { type: Boolean, default: false },
    iconKey: { type: Boolean, default: false },
    iconRemove: { type: Boolean, default: false },
    iconCheck: { type: Boolean, default: false },
    iconEye: { type: Boolean, default: false },
    iconUndo: { type: Boolean, default: false },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  data() {
    return {
      dialogTitle: "اخطار",
      dialogText: "آیا از حذف اطلاعات مطمئن هستید؟",
      deleteDialog: false,
    };
  },
  computed: {
    color() {
      if (this.iconDelete) {
        return "red";
      }
      if (this.iconEdit) {
        return "warning";
      }
      if (this.iconList) {
        return "purple";
      }
      if (this.iconRemove) {
        return "red";
      }
      if (this.iconUndo) {
        return "#57cf8f";
      }
      if (this.iconCheck) {
        return "#57cf8f";
      } else {
        return "primary";
      }
    },
  },
  methods: {
    removeItem(itemId) {
      this.deleteDialog = false;
      this.$emit("delete", itemId);
    },
  },
};
</script>

<style>
</style>
