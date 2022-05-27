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
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (max-width: 992px) {
    max-width: 575px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 0 20px;
  }
}
</style>
