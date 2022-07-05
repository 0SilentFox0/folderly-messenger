<template>
  <section class="welcome">
    <ContainerNew>
      <div class="content">
        <ImageWebpWrapper
          class="img"
          width="640"
          height="348"
          :image-default="img.default"
          :image-webp="img.webp" />
        <div class="title"><span class="blue">Folderly</span> Messenger</div>
        <div class="text">
          Fast and secure desktop app, perfectly synced with your mobile phone.
        </div>
        <VButton
          class="button"
          justify="space-between"
          size="large"
          icon-right="arrow-right">
          Get Folderly Messenger
        </VButton>

        <div class="text">
          This software is available under
          <a class="blue bold" href="">GPL v3</a> license.
        </div>

        <div class="text">
          Source code is available on <a class="blue bold" href="">GitHub.</a>
        </div>

        <div class="complience">
          <router-link to="/privacy-policy" class="text-light">
            Privacy Policy
          </router-link>
          <router-link to="/terms-of-use" class="text-light">
            Terms & Conditions
          </router-link>
        </div>
      </div>
    </ContainerNew>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageWebpWrapper from '@/components/helpers/ImageWebpWrapper.vue';
import ContainerNew from '@/components/ui/Container/ContainerNew.vue';
import VButton from '@/components/ui/VButton/VButton.vue';
import welcomePng from '@/assets/img/welcome.png';
import welcomeWebp from '@/assets/img/welcome.webp';
export default defineComponent({
  components: {
    ImageWebpWrapper,
    ContainerNew,
    VButton,
  },

  data() {
    return {
      img: {
        default: welcomePng,
        webp: welcomeWebp,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.welcome {
  padding: 65px 0;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-top: 63px;
  margin-bottom: 20px;

  color: #262d40;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;

  text-align: center;
}

.blue {
  color: #195ee6;
}

.bold {
  font-weight: 600;
}

.text {
  width: 100%;
  max-width: 422px;
  margin-bottom: 20px;

  color: #1b2132;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
}

.button {
  margin: 10px 0 95px 0;
}

.text-light {
  margin-right: 24px;

  color: #5b6171;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
