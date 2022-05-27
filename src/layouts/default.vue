<template>
  <div class="default-layout">
    <div class="layout-content">
      <router-view v-slot="{ Component, route }">
        <template v-if="Component">
          <transition name="fade" mode="out-in" appear>
            <suspense>
              <component :is="Component" :key="route" />
              <template #fallback> Loading... </template>
            </suspense>
          </transition>
        </template>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { setUtmParamsToSession } from '@/utils/utm';

import { useCommonStore } from '@/store/common';

export default defineComponent({
  name: 'DefaultLayout',
  components: {},

  setup() {
    const commonStore = useCommonStore();

    return {
      commonStore,
    };
  },

  mounted() {
    this.commonStore.setIsClient(true);
    setUtmParamsToSession(this.$route.query);
  },
});
</script>

<style lang="scss">
html {
  &.popup-open {
    overflow-y: hidden;
  }
}
</style>
