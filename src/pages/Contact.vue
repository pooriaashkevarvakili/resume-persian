<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="contact"
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
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <img
            src="https://s24.picofile.com/file/8454111476/phone.png"
            width="80"
            height="80"
          />
          <div class="q-mt-sm text-h4">09376720694</div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 30 30"
            width="80px"
            height="80px"
          >
            <path
              d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"
            />
          </svg>
          <a
            class="text-h5 text-white q-mt-sm"
            style="text-decoration: none"
            href="https://www.linkedin.com/in/pooria-ashkevar-vakili-6457a917a"
          >
            linkedin
          </a>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="80px"
            height="80px"
          >
            <path fill="#e53935" d="M24 43L16 20 32 20z" />
            <path fill="#ff7043" d="M24 43L42 20 32 20z" />
            <path fill="#e53935" d="M37 5L42 20 32 20z" />
            <path fill="#ffa726" d="M24 43L42 20 45 28z" />
            <path fill="#ff7043" d="M24 43L6 20 16 20z" />
            <path fill="#e53935" d="M11 5L6 20 16 20z" />
            <path fill="#ffa726" d="M24 43L6 20 3 28z" />
          </svg>
          <a
            class="text-h5 text-white q-mt-sm"
            style="text-decoration: none"
            href="https://gitlab.com/pooriaashkevarvakili"
          >
            gitlab
          </a>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <img src="mail.png" alt="" />
          <div class="q-mt-sm text-h4">pooriavakili09@gmail.com</div>
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
      contact: ref("style"),
    };
  },
};
</script>