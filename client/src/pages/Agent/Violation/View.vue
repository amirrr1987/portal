<template>
  <v-card class="pa-16">
    <CardTitle :label="`کد تخلف : ${codenumberr}`" color="red" />
    <v-row>
      <v-col cols="12" md="4"> ثبت کننده : {{}} </v-col>
      <v-col cols="12" md="4"> پذیرنده : {{}} </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4"> وضعیت : {{}} </v-col>

      <v-col cols="12" md="4"> وضعیت تائید : {{}} </v-col>

      <v-col cols="12" md="4"> زمان ثبت تخلف : {{}} </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4"> موضوع : {{}} </v-col>
      <v-col cols="12">
        <v-card class="pa-6" elevation="6" color="#F1F1F1">
          <v-card-title>توضیحات</v-card-title>
          <v-card-text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> پاسخ </v-col>
      <v-col cols="12">
        <div class="vira-border rounded-lg-1 pa-3">
          <v-card color="#decced" class="mb-3">
            <div class="d-flex justify-space-between align-center pl-5">
              <v-card-title>ساسمونگ</v-card-title>
              <span>23/42/343</span>
            </div>
            <v-card-text>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </v-card-text>
            <v-card-text class="d-flex justify-end">
              <v-btn icon>
                <IconInfo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconUndo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconDelete width="18" height="18" fill="#3a3a3a" />
              </v-btn>
            </v-card-text>
          </v-card>

          <v-card color="#c1d8e8">
            <div class="d-flex justify-space-between align-center pl-5">
              <v-card-title>ساسمونگ</v-card-title>
              <span>23/42/343</span>
            </div>
            <v-card-text>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </v-card-text>
            <v-card-text class="d-flex justify-end">
              <v-btn icon>
                <IconInfo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconUndo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconDelete width="18" height="18" fill="#3a3a3a" />
              </v-btn>
            </v-card-text>
            <v-divider class="mx-5" />
            <div class="d-flex justify-space-between align-center pl-5">
              <v-card-title>
                <IconComment width="38" height="38" class="ml-3" />
                ساسمونگ
                </v-card-title>
              <span>23/42/343</span>
            </div>
            <v-card-text>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </v-card-text>
            <v-card-text class="d-flex justify-end">
              <v-btn icon>
                <IconInfo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconUndo width="18" height="18" fill="#3a3a3a" />
              </v-btn>
              <v-btn icon>
                <IconDelete width="18" height="18" fill="#3a3a3a" />
              </v-btn>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import IconDelete from "@/icons/Main/IconDelete";
import IconUndo from "@/icons/Main/IconUndo";
import IconInfo from "@/icons/Main/IconInfo";
import IconComment from "@/icons/Main/IconComment";
export default {
  components: { CardTitle, IconDelete, IconUndo, IconInfo, IconComment },
};
</script>

<style>
.vira-border {
  border: 2px solid #212121;
}
</style>