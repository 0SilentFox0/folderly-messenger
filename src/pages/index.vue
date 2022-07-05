<template>
  <section>
    <Welcome />
    <Benefits />
    <Faq :questions="questions" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '@/components/pages/index/Welcome.vue';
import Benefits from '@/components/pages/index/Benefits.vue';
import Faq from '@/components/helpers/Faq.vue';
import { questions } from '@/components/pages/index/questions';
export default defineComponent({
  components: {
    Welcome,
    Benefits,
    Faq,
  },

  data: () => ({
    questions,
  }),
});
</script>
