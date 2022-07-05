<template>
  <section class="header">
    <div class="header-box">
      <router-link to="/" class="logo-box">
        <SvgIcon
          name="logo"
          class="logo"
          fill="currentColor"
          width="24"
          height="24" />
        <div class="text-header">
          Folderly <span class="thin">Messenger</span>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 72px;

  box-shadow: 0px 1px 1px rgba(30, 60, 114, 0.05);
}

.header-box {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  color: #262d40;

  &:hover {
    color: #195ee6;
    .text-header {
      color: #195ee6;
    }

    .thin {
      color: #195ee6;
    }
  }
}

.logo-box {
  display: flex;
  align-items: center;
  height: 72px;
}

.logo {
  transition: $transition-default;
}

.text-header {
  margin-left: 8px;

  color: #262d40;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  transition: $transition-default;
}

.thin {
  color: #5b6171;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;

  transition: $transition-default;
}
</style>
