<template>
  <transition
    enter-active-class="enter-active"
    leave-active-class="leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    beforeEnter(element: Element) {
      const el = element as HTMLElement;

      el.style.height = '0';
    },
    enter(element: Element) {
      const el = element as HTMLElement;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.height = `${element.scrollHeight}px`;
        });
      });
    },
    beforeLeave(element: Element) {
      const el = element as HTMLElement;

      el.style.height = `${el.offsetHeight}px`;
    },
    leave(element: Element) {
      const el = element as HTMLElement;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.height = '0';
        });
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.enter-active,
.leave-active {
  overflow: hidden;

  transition: height 0.3s;
}
</style>
