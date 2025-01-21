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
            :value="value"
            @input="$emit('input', v)"
            v-on="$listeners"
            @keypress.enter.prevent="pushTag"
            :rules="[rules.tags]"
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
          <div class="error--text mt-2" v-show="tagIsMax">
            {{ tagMessage }}
          </div>
          <div class="error--text mt-2" v-show="tagIsRepeat">
            {{ repeatMasseage }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <span
            class="border border-gray3 border-size-2 rounded px-3 py-2 py-md-2 mb-2 ml-2 d-inline-block"
            v-for="(tag, index) in acceptor.tags"
            :key="index"
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

<script>
import IconTag from "@/icons/Main/IconTag";
import IconRemoveCircle from "@/icons/Main/IconRemoveCircle";
export default {
  name: "Tags",
  components: {
    IconTag,
    IconRemoveCircle,
  },
  props: {
    value: { type: String, default: null },
  },
  data() {
    return {
      acceptor: {
        tags: [],
      },
      tag: "",
      tempTag: "",
      tagIsMax: false,
      tagIsRepeat: false,
      repeatMasseage: "تگ وارد شده تکراری میباشد",
      tagMessage: "حداکثر ۶ عدد تگ مجاز است.",
      rules: {
        required: (value) => !!value || "این فیلد الزامی است",
        tags: () => this.acceptor.tags.length > 0 || "این فیلد الزامی است",
      },
    };
  },
  methods: {
    //////////////////////////////////
    // Start Tag methods
    pushTag() {
      this.tagIsRepeat = false;
      this.tagIsMax = false;

      if (this.acceptor.tags.length > 5) {
        this.tagIsMax = true;
        return;
      }

      if (this.acceptor.tags.includes(this.tempTag)) {
        this.tagIsRepeat = true;
        return;
      }

      if (this.tempTag != "" && !this.acceptor.tags.includes(this.tempTag))
        this.acceptor.tags.push(this.tempTag);

      this.tempTag = "";

    },
    removeTag(index) {
      this.acceptor.tags.splice(index, 1);
    },
    //  End  Tag methods
  },
};
</script>

<style></style>
