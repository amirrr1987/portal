<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template #activator="{ on, attrs }">
      <Btn
        label="تائید نهایی"
        :color="props.color"
        dark
        :class="props.btnClass"
        :type="props.btnType"
        v-bind="attrs"
        v-on="on"
      >
        <template #after>
          <Checked width="25" height="25" />
        </template>
      </Btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        Use Google's location service?
      </v-card-title>
      <v-card-text>
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="green darken-1" text @click="dialog = false">
          Disagree
        </v-btn>
        <v-btn color="green darken-1" text @click="dialog = false">
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Btn from '@/components/Btn.vue';
import Checked from '@/icons/Main/IconCheckedCircle.vue';

interface Props {
  color?: string;
  btnClass?: string;
  btnType?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: '',
  btnClass: '',
  btnType: '',
});

const dialog = ref(false);
</script>

<style>
/* Add your styles here */
</style>