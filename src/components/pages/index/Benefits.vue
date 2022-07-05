<template>
  <section class="benefits">
    <ContainerNew>
      <div class="content">
        <div class="heading">
          <span class="blue">Benefits</span> to make perfect communication and
          interaction
        </div>
        <div class="text">
          Folderly Messenger brings more efficiency to your communication, time
          management and email management. Keep your day-to-day conversations as
          productive as possible!
        </div>
        <div class="items">
          <div v-for="(item, index) in items" :key="index" class="item">
            <div class="icon-box">
              <SvgIcon
                :name="item.icon"
                width="32"
                height="32"
                fill="#195EE6" />
            </div>

            <div class="title">{{ item.title }}</div>
            <div class="subtitle">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </ContainerNew>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContainerNew from '@/components/ui/Container/ContainerNew.vue';

export default defineComponent({
  components: {
    ContainerNew,
  },

  data() {
    return {
      items: [
        {
          icon: 'briefcase',
          title: 'Made for business',
          text: 'Can sync up with your email provider of choice',
        },
        {
          icon: 'user',
          title: 'Respects your privacy',
          text: 'Provides multiple privacy settings to help you manage private data ',
        },
        {
          icon: 'shield',
          title: 'Prioritizes data safety',
          text: 'Protects your chats and calls with strong encryption',
        },
        {
          icon: 'plane',
          title: 'Smart and fast',
          text: 'Use it on any device, anytime, anywhere',
        },
        {
          icon: 'grid',
          title: 'Best of UX design',
          text: 'Turns you into an experienced user starting Day 1 thanks to intuitive layout',
        },
        {
          icon: 'money',
          title: 'Free to use',
          text: 'No paid subscription required. Enjoy the best features, free of charge',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.benefits {
  padding: 80px 0;

  background: #f8f9fc;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  width: 100%;
  max-width: 670px;
  margin-bottom: 32px;

  color: #14171f;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  text-align: center;

  @include media(tablet) {
    text-align: left;
  }
}

.blue {
  color: #195ee6;
}

.text {
  width: 100%;
  max-width: 840px !important;

  color: #1b2132;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  @include media(tablet) {
    text-align: left;
  }
}

.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 170px;
  margin-top: 80px;
  @include media(tablet) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }

  @include media(mobile) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

  background: #e6eefe;

  border-radius: 200px;
}

.title {
  margin-top: 20px !important;
  margin-bottom: 10px;

  color: #14171f;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  text-align: left !important;
}

.subtitle {
  color: #1b2132;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
</style>
