<template>
  <section class="banner">
    <div class="wrap">
      <div class="content-box">
        <div class="content">
          <div class="title">Inbox should be your only Destination Folder.</div>
          <div class="button-box">
            <VButton icon-right="arrow" size="big">Run Folderly</VButton>
            <div class="text">
              No subscriptions. <br />No annual fees. No lock-ins.
            </div>
          </div>
        </div>
        <ImageWebpWrapper
          width="635"
          class="img"
          height="357"
          :image-default="img.png"
          :image-webp="img.webp" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import bannerPng from '@/assets/img/pictures/global/banner.png';
import bannerWebp from '@/assets/img/pictures/global/banner.webp';
import VButton from '@/components/ui/VButton/VButton.vue';
import ImageWebpWrapper from '@/components/helpers/ImageWebpWrapper.vue';

export default defineComponent({
  components: {
    VButton,
    ImageWebpWrapper,
  },

  data() {
    return {
      img: {
        png: bannerPng,
        webp: bannerWebp,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
// .banner {
//   padding: 80px 0 0;

//   @include media(tablet) {
//     padding: 50px 0 0;
//   }
// }

.wrap {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 0 0 60px;
  overflow: hidden;

  background: linear-gradient(64.43deg, #2c374b 16.13%, #42506b 83.78%);
  border-radius: 20px;

  @include media(tablet) {
    padding: 50px 0;
  }
}

.content-box {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include media(tablet) {
    flex-direction: column-reverse;
    justify-content: center;
  }
}

.content {
  max-width: 550px;
  padding: 10px;
}

.title {
  margin-bottom: 40px;

  color: $color-white;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;

  @include media(tablet) {
    font-size: 30px;
    line-height: 36px;
    text-align: center;
  }
}

.button-box {
  display: flex;
  align-items: center;

  @include media(tablet) {
    flex-direction: column;
  }
}

.text {
  margin-left: 25px;

  color: $color-gray-silver;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  @include media(tablet) {
    margin-top: 10px;
    margin-left: 0;

    text-align: center;
  }
}

.img {
  @include media(tablet) {
    display: none;
  }
}
</style>
