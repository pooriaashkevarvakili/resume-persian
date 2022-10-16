<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="portfolio"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-warning text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide
          name="shoppingcart"
          class="column no-wrap flex-center"
        >
          <q-img
            src="https://s25.picofile.com/file/8453272450/shopping.JPG"
            width="20"
            height="20"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              <a
                class="text-h5 text-white"
                style="text-decoration: none"
                href="https://dist-pooriavakili.vercel.app"
              >
                ecommerice
              </a>
            </div>
          </q-img>
        </q-carousel-slide>
        <q-carousel-slide name="hakupian" class="column no-wrap flex-center">
          <q-img
            src="https://s25.picofile.com/file/8453272476/hakupianportfolio.jpg"
            width="20"
            height="20"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              <a
                class="text-h5 text-white q-mt-sm"
                style="text-decoration: none"
                href="https://spa-6eq8433jg-pooriavakili.vercel.app/#/"
              >
                hakupian
              </a>
            </div>
          </q-img>
        </q-carousel-slide>
        <q-carousel-slide
          name="portfolioenglish"
          class="column no-wrap flex-center"
        >
          <q-img
            src="https://s25.picofile.com/file/8453272442/resumeenglish.JPG"
            width="20"
            height="20"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              <a
                class="text-h5 text-white"
                style="text-decoration: none"
                href="http://resumeenglish.surge.sh/#/"
              >
                resumeenglish
              </a>
            </div>
          </q-img>
        </q-carousel-slide>
        <q-carousel-slide name="totdoapp" class="column no-wrap flex-center">
          <a
            class="text-h4 text-white"
            style="text-decoration: none"
            href="http://todoappsmall.surge.sh/"
          >
            TODO
          </a>
        </q-carousel-slide>
        <q-carousel-slide
          name="smallecommerice"
          class="column no-wrap flex-center"
        >
          <q-img
            src="https://s24.picofile.com/file/8453272468/shoppingcart.JPG"
            width="20"
            height="20"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              <a
                class="text-h5 text-white q-mt-sm"
                style="text-decoration: none"
                href="https://shopping-cart-green-rho.vercel.app/"
              >
                shoppingcart
              </a>
            </div>
          </q-img>
          <img />
        </q-carousel-slide>
        <q-carousel-slide name="nuxt" class="column no-wrap flex-center">
          <q-img
            src="https://s25.picofile.com/file/8453272434/portfolionuxt.JPG"
            width="200"
            height="200"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              <a
                class="text-h5 text-white"
                style="text-decoration: none"
                href="http://portfoliodashboard.surge.sh/"
              >
                portfolionuxt-js
              </a>
            </div>
          </q-img>
        </q-carousel-slide>
        <q-carousel-slide
          name="weblogpersonal"
          class="column no-wrap flex-center"
        >
          <q-img
            src="https://s24.picofile.com/file/8454113226/weblog_personal.png"
            width="200"
            height="200"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              <a
                class="text-h5 text-white"
                style="text-decoration: none"
                href="https://weblogpersonal.vercel.app/#/"
              >
                weblog-personal
              </a>
            </div>
          </q-img>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      portfolio: ref("shoppingcart"),
    };
  },
};
</script>