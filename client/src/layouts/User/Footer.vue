<template>
  <v-footer color="#0d5591" class="white--text pt-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h1 class="mb-8 text-center" style="color: #108bdd">لینک های مفید</h1>
          <hr class="mb-8 mt-1" />
          <div class="links">
            <a href="" class="links__item">سوالات متداول</a>
            <a href="" class="links__item">درباره ما</a>
            <a href="" class="links__item">قوانین</a>
            <a href="" class="links__item">پشتیبانی</a>
            <a href="" class="links__item">عصر ویرا</a>
            <a href="" class="links__item">حریم خصوصی</a>
            <a href="" class="links__item">تماس با ما</a>
            <a href="" class="links__item">دریافت اپلیکیشن</a>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <h1 class="mb-8 text-center" style="color: #108bdd">ارتباط با ما</h1>
          <hr class="mb-8 mt-1" />
          <div class="mx-16 contact-cards">
            <ContactCard class="" title="تلفن شرکت" value="0218421844" />
            <ContactCard
              class=""
              title="واحد پشتیبانی"
              value="support@asrevira.com"
            />
            <ContactCard
              class=""
              title="واحد فروش و حسابداری"
              value="billing@asrevira.com"
            />
            <ContactCard
              class=""
              title="واحد روابط عمومی"
              value="info@asrevira.com"
            />
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <h1 class="text-center" style="color: #108bdd">شبک های اجتماعی</h1>
          <hr class="mb-8 mt-1 mx-16 px-16" />
          <div class="d-flex justify-space-around mx-16 mb-6">
            <div
              class="white rounded-circle pa-2"
              :style="`width: ${size}px; height: ${size}px; border-radius: ${size/2}; padding: ${size/4}px `"
            >
              <IconAparat />
            </div>
            <div
              class="white rounded-circle"
              :style="`width: ${size}px; height: ${size}px; border-radius: ${size/2}; padding: ${size/4}px `"
            >
              <IconInstagram />
            </div>
            <div
              class="white"
              :style="`width: ${size}px; height: ${size}px; border-radius: ${size/2}; padding: ${size/4}px `"
            >
              <IconTelegram />
            </div>
          </div>
          <p class="subscrip">
            <span class="text-center mb-6"
              >از آخرین اطلاعیه ها و تخفیفات با خبر شوید</span
            >
            <v-text-field
              placeholder="ایمیل خود را وارد کنید"
              class="white py-1 px-4 rounded-lg-1"
              color="white"
              hide-details
            />
            <v-btn color="#54b1f8" dark rounded width="90">ثبت</v-btn>
          </p>
        </v-col>
        <v-col cols="12">
          <p class="text-center mt-10 mb-0" style="color: #108bdd">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            حال
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import ContactCard from "@/components/Layout/ContactCard";
import IconAparat from "@/icons/Footer/IconAparat";
import IconInstagram from "@/icons/Footer/IconInstagram";
import IconTelegram from "@/icons/Footer/IconTelegram";
export default {
  name: "TheFooter",
  components: {
    ContactCard,
    IconAparat,
    IconInstagram,
    IconTelegram,
  },
  data() {
    return {
      size: 60,
    };
  },
};
</script>

<style lang="scss">
.contact-cards {
  display: grid;
}
.links {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 1.7rem;
  &__item {
    color: #fff !important;
  }
}
.subscrip {
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 1rem;
  align-items: center;
  span {
    grid-column: 1/3;
  }
  .v-input__slot {
    &::after {
      display: none !important;
    }
    &::before {
      display: none !important;
    }
  }
}
</style>
