<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({ components: {} });
</script>

<style lang="scss" scoped></style>
