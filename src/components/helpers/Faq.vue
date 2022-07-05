<template>
  <section class="faq">
    <ContainerNew>
      <div class="content">
        <div class="text-box">
          <div class="title">
            <slot name="title">Frequently Asked Questions</slot>
          </div>
          <div class="text">
            <slot name="text"
              >Want to know more about our email SPF record?</slot
            >
          </div>
        </div>

        <VAccordion
          v-for="(question, index) in questions"
          :key="index"
          :active-tab="activeTab"
          :current-index="index"
          type="white"
          @click="setActiveTab(index)">
          <template #title>
            {{ question.title }}
          </template>

          <template #markedText>
            <!-- eslint-disable vue/no-v-html -->
            <div v-html="question.text" />
            <!--eslint-enable-->
          </template>
        </VAccordion>
      </div>
    </ContainerNew>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ContainerNew from '@/components/ui/Container/ContainerNew.vue';
import VAccordion from '@/components/ui/VAccordion/VAccordion.vue';
import { IQuestion } from '@/components/helpers';

export default defineComponent({
  components: {
    ContainerNew,
    VAccordion,
  },

  props: {
    questions: {
      type: Array as PropType<IQuestion[]>,
      required: true,
    },
  },

  data: () => ({
    activeTab: 0,
  }),

  methods: {
    setActiveTab(tabIndex: number) {
      if (this.activeTab === tabIndex) {
        this.activeTab = -1;

        return;
      }

      this.activeTab = tabIndex;
    },
  },
});
</script>

<style lang="scss" scoped>
.faq {
  margin-top: 80px;
  margin-bottom: 100px;
  @include media(tablet) {
    margin-top: 50px;
  }
}

.content {
  max-width: 900px;
  margin: 0 auto;
}

.text-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-bottom: 20px;

  font-weight: bold;
  font-size: 36px;
  line-height: 50px;
  text-align: center;

  @include media(tablet) {
    font-size: 30px;
    line-height: 36px;
  }

  @include media(mobile) {
    font-size: 24px;
    line-height: 29px;
  }
}

.text {
  max-width: 640px;
  margin-bottom: 30px;

  color: $color-gray-medium-dark;
  font-size: 16px;
  line-height: 22px;

  text-align: center;

  @include media(mobile) {
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
