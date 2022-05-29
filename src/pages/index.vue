<template>
  <section>
    <Welcome />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '@/components/pages/index/Welcome.vue';

export default defineComponent({
  components: {
    Welcome,
  },
});
</script>
