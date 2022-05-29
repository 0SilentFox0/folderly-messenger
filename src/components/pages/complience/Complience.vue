<template>
  <section class="complience">
    <div>
      <router-link class="back-button" to="/">
        <SvgIcon name="arrow-left" width="16" height="16" fill="#195EE6" />
        <div class="button-text">Go Home</div>
      </router-link>
    </div>

    <!-- <ContainerNew> -->
    <!-- <TabList block="complience" :item-list="items" :active-item="activeItem">
      </TabList> -->
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: isSelected(index) }"
        class="tab"
        @click="selectTab(index)">
        <div class="title">{{ tab.heading }}</div>
      </div>
    </div>
    <ContainerNew>
      <div class="border-bottom"></div>
    </ContainerNew>
    <transition name="fade" mode="out-in">
      <component :is="tabs[selectedTab].component" />
    </transition>
    <!-- </ContainerNew> -->
  </section>
</template>

<script lang="ts">
import { defineComponent, shallowRef, ref } from 'vue';
import ContainerNew from '@/components/ui/Container/ContainerNew.vue';
// import TabList from '@/components/ui/TabList/TabList.vue';
import Terms from './Terms.vue';
import Privacy from './Privacy.vue';
export default defineComponent({
  components: {
    ContainerNew,
    // TabList,
    Privacy,
    Terms,
  },

  setup() {
    const PrivacyComponent = shallowRef(Privacy);
    const TermsComponent = shallowRef(Terms);

    const tabs = ref([
      {
        heading: 'Privacy Policy',
        component: PrivacyComponent,
      },
      {
        heading: 'Terms & Conditions',
        component: TermsComponent,
      },
    ]);

    return {
      tabs,
    };
  },

  data() {
    return {
      selectedTab: 0,
    };
  },

  methods: {
    selectTab(index: number) {
      this.selectedTab = index;
    },

    isSelected(index: number) {
      return index === this.selectedTab;
    },
  },
});
</script>

<style lang="scss" scoped>
.back-button {
  display: flex;
  align-items: center;
}

.button-text {
  margin-left: 8px;

  color: #195ee6;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}
.tabs {
  position: relative;

  display: flex;
  align-items: center;
  overflow: auto;

  @include media(tablet) {
    position: relative;

    display: block;
  }
}

.border-bottom {
  position: absolute;
  right: 0;
  bottom: 5px;
  left: 0;

  height: 1px;

  background-color: $color-disabled-background;
}
.tab {
  z-index: 1;

  margin-right: 30px;

  margin-bottom: 5px;
  padding: 25px 0;

  color: $color-text-gray;
  font-size: 14px;
  line-height: 21px;

  text-transform: capitalize;

  border-bottom: 2px solid transparent;
  cursor: pointer;

  transition: border 0.3s, color 0.3s;
  &:last-child {
    margin-right: 0;
  }

  &.active {
    color: $color-primary;
    color: $color-text-black;

    border-color: $color-blue-accent;
  }

  &:hover {
    color: $color-primary;
  }

  @include media(tablet) {
    width: 100%;
    margin: 0 auto;

    padding: 8px 10px;

    color: #393939;
    font-size: 16px;
    line-height: 21px;

    border: 0;
    &:hover {
      background-color: rgba($color: #f6f6f6, $alpha: 0.4);
    }
    &.active {
      color: $color-primary;
      font-weight: bold;

      background-color: rgba($color: $color-primary, $alpha: 0.03);
    }
  }
}
</style>
