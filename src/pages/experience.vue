<template>
    <div class="q-pa-md">
        <div class="q-gutter-md">
            <q-carousel v-model="experience" transition-prev="scale" transition-next="scale" swipeable animated
                control-color="white" navigation padding arrows height="300px"
                class="bg-warning text-white shadow-1 rounded-borders">
                <q-carousel-slide name="hakupian" class="column no-wrap flex-center">
                    <img src="https://s25.picofile.com/file/8453272500/hakupian.jpg" width="100" height="100" alt="">
                    <div class="q-mt-sm text-h5">HAKUPIAN</div>
                    <div class="q-mt-sm text-h5">یک سال دو ماه</div>
                </q-carousel-slide>
                <q-carousel-slide name="avajang" class="column no-wrap flex-center">
                    <img src="https://s24.picofile.com/file/8453272518/avajang.jpg" width="100" height="100" alt="">

                    <div class="q-mt-sm text-h4">AVAJANG</div>
                    <div class="q-mt-sm text-h5">هفت ماه </div>
                </q-carousel-slide>
                <q-carousel-slide name="layers" class="column no-wrap flex-center">
                    <img src="https://s24.picofile.com/file/8453272526/freelancer.png" width="100" height="100" alt="">
                    <div class="q-mt-sm text-h4">دوسال هفت ماه</div>
                </q-carousel-slide>
            </q-carousel>

        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            experience: ref('hakupian'),
        }
    }
}
</script>