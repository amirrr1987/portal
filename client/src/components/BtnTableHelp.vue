<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="350"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        class="vira-data-table-help white--text"
        tile
        elevation="0"
        v-bind="attrs"
        v-on="on"
      >
        راهنما
      </v-btn>
    </template>
    <template #default="dialog">
      <v-card>
        <v-toolbar
          color="primary"
          dark
        >
          راهنمای آیکن ها
        </v-toolbar>
        <v-card-text class="pt-6">
          <v-row
            v-show="hasView"
            align="center"
          >
            <ActionBtn
              icon-key
              cols="2"
            />
            <v-col
              cols="12"
              md="10"
            >
              ورود به پنل پذیرنده
            </v-col>
          </v-row>
          <v-row
            v-show="hasList"
            align="center"
          >
            <ActionBtn
              icon-list
              md="2"
            />
            <v-col
              cols="12"
              md="10"
            >
              مشاهده لیست فروش پذیرنده
            </v-col>
          </v-row>
          <v-row
            v-show="hasEdit"
            align="center"
          >
            <ActionBtn
              icon-edit
              md="2"
            />
            <v-col
              cols="12"
              md="10"
            >
              اصلاح اطلاعات پذیرنده
            </v-col>
          </v-row>
          <v-row
            v-show="hasDelete"
            align="center"
          >
            <ActionBtn
              icon-delete
              md="2"
            />
            <v-col
              cols="12"
              md="10"
            >
              حذف پذیرنده
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center pb-6">
          <v-btn
            color="primary"
            rounded
            class="px-10"
            @click="dialog.value = false"
          >
            بستن
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script lang="ts">
import ActionBtn from "@/components/ActionBtn";
export default {
  name: "BtnTableHelp",
  components: {
    ActionBtn,
  },
  props: {
    hasDelete: { type: Boolean, default: false },
    hasEdit: { type: Boolean, default: false },
    hasList: { type: Boolean, default: false },
    hasView: { type: Boolean, default: false },
  },
};
</script>
