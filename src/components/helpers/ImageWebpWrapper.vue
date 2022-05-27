<template>
  <picture>
    <source
      :srcset="imageWebp"
      v-bind="$attrs"
      type="image/webp"
      class="image lazyload" />
    <img :src="imageDefault" v-bind="$attrs" class="image lazyload" />
  </picture>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageWebpWrapper',
  props: {
    imageDefault: {
      type: String,
      required: true,
    },
    imageWebp: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.image {
  @include media(desktop) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
