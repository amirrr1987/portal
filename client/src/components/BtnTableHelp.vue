<template>
  <v-dialog transition="dialog-bottom-transition" max-width="350">
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
    <template #default="{ value: dialog }">
      <v-card>
        <v-toolbar color="primary" dark> راهنمای آیکن ها </v-toolbar>
        <v-card-text class="pt-6">
          <v-row v-show="props.hasView" align="center">
            <ActionBtn icon-key cols="2" />
            <v-col cols="12" md="10"> ورود به پنل پذیرنده </v-col>
          </v-row>
          <v-row v-show="props.hasList" align="center">
            <ActionBtn icon-list md="2" />
            <v-col cols="12" md="10"> مشاهده لیست فروش پذیرنده </v-col>
          </v-row>
          <v-row v-show="props.hasEdit" align="center">
            <ActionBtn icon-edit md="2" />
            <v-col cols="12" md="10"> اصلاح اطلاعات پذیرنده </v-col>
          </v-row>
          <v-row v-show="props.hasDelete" align="center">
            <ActionBtn icon-delete md="2" />
            <v-col cols="12" md="10"> حذف پذیرنده </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center pb-6">
          <v-btn color="primary" rounded class="px-10" @click="dialog = false">
            بستن
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import ActionBtn from "@/components/ActionBtn.vue";

interface Props {
  hasDelete?: boolean;
  hasEdit?: boolean;
  hasList?: boolean;
  hasView?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hasDelete: false,
  hasEdit: false,
  hasList: false,
  hasView: false,
});
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>