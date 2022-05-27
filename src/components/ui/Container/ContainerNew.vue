<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  position: relative;

  width: 100%;
  // max-width: 1100px;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @include media(desktop) {
    max-width: 920px;
  }

  @include media(tablet) {
    max-width: 728px;
  }

  @include media(mobile) {
    width: 100%;
    padding: 0 20px;
  }
}
</style>
