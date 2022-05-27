<template>
  <Head />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Head, useHead } from '@vueuse/head';
import { pageHead } from '@/utils/pageHead';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    Head,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      default: () => useRoute().path,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: false,
      default: '',
    },
    image: {
      type: String || undefined,
      required: false,
      default: '',
    },
  },
  setup(props) {
    const meta = pageHead({
      title: props.title,
      route: props.route,
      description: props.description,
      image: props.image,
      url: props.url,
    });
    useHead(meta);
  },
});
</script>
