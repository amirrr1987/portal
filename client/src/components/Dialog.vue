<template>
  <v-dialog
    persistent
    max-width="490"
  >
    <template #activator="{ on, attrs }">
      <Btn
        label="تائید نهایی"
        color="#57cf8f"
        dark
        class="mt-16"
        type="submit"
        v-bind="attrs"
        v-on="$listeners"
      >
        <template #after>
          <Checked
            width="25"
            height="25"
          />
        </template>
      </Btn>
    </template>
    <v-card class="pt-6">
      <v-img
        width="180"
        class="mx-auto"
        src="@/assets/img/like.svg"
      />
      <v-card-text class="py-6 text-center">
        ثبت نام شما با موفیت انجام شد و پس از تایید اپراتور به شما پیامک ارسال
        می‌گردد. با تشکر
      </v-card-text>
      <v-card-actions class="pb-6">
        <v-spacer />
        <Btn
          label="تایید"
          color="#4fc7db"
          dark
          @click="dialog = false"
        />

        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import Btn from "@/components/Btn.vue";
import Checked from "@/icons/Main/IconCheckedCircle.vue";
export default {
  name: "TheDialog",
  components: {
    Btn,
    Checked,
  },
};
</script>
