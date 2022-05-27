<template>
  <div class="tabs" @click="toggleDropdown">
    <p v-if="title" class="tabs-title">{{ title }}</p>
    <div class="heading">
      <div class="value">
        {{ activeItemName }}
      </div>
      <SvgIcon
        :class="['icon', { icon_opened: dropdownVisible }]"
        fill="#B6BED0"
        height="12"
        name="arrow"
        width="12" />
    </div>

    <div ref="list" class="tabs-list" :class="{ visible: !dropdownVisible }">
      <router-link
        v-for="item in itemList"
        :key="item.slug || item.name || item.title"
        :to="item.slug ? `/${block}/${item.slug}` : `/${block}`"
        class="tabs-item"
        :class="{ active: item.slug === activeItem }">
        {{ item.name || item.title }}
      </router-link>
    </div>

    <div class="subscribe">
      <slot name="button" />
    </div>
    <div class="border-bottom"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { ICategory } from '@/database/baseTypes';
import { useRoute } from 'vue-router';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },

    type: {
      type: String as PropType<'heading' | 'default'>,
      default: 'default',
    },

    block: {
      type: String as PropType<'blog' | 'how-to' | 'complience'>,
      default: 'blog',
    },

    itemList: {
      type: Array as PropType<ICategory[]>,
      required: true,
    },

    activeItem: {
      type: String,
      required: true,
    },
  },
  emits: ['onSelect'],

  data: () => ({
    dropdownVisible: false,
  }),

  computed: {
    activeItemName(): string | undefined {
      const v = this.itemList.find(el => el.slug === this.activeItem);

      return v?.name || v?.title;
    },

    routeCategory(): string {
      return useRoute()?.params.category as string;
    },
  },

  methods: {
    toggleDropdown() {
      if (window.innerWidth <= 992.1)
        this.dropdownVisible = !this.dropdownVisible;
    },

    outsideCloseDropdown() {
      if (window.innerWidth <= 992.1) this.hideDropdown();
    },
    hideDropdown() {
      this.dropdownVisible = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.tabs-backdrop {
  z-index: 0;

  display: none;

  @include media(tablet) {
    display: block;
  }
}

.tabs {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @include media(tablet) {
    position: relative;

    display: block;
  }
}

.border-bottom {
  position: absolute;
  right: 0;
  bottom: 5px;
  left: 0;

  height: 1px;

  background-color: $color-disabled-background;
  box-shadow: 0px 2px 8px rgba(0, 49, 141, 0.05),
    0px 1px 0px rgba(0, 32, 92, 0.05);

  @include media(tablet) {
    display: none;
  }
}

.tabs-title {
  min-width: 60px;

  color: black;
  font-size: 12px;
  @include media(tablet) {
    margin-bottom: 10px;

    font-size: 16px;
  }
}

.heading {
  display: none;

  @include media(tablet) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 15px;

    border: 2px solid #e8e8e8;
    border-radius: 5px;
  }
}

.tabs-list {
  z-index: 2;

  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  align-items: end;
  margin-left: 10px;
  padding: 0;

  column-gap: 30px;
}

.tabs-item {
  z-index: 1;

  margin-bottom: 5px;
  padding: 25px 0;

  color: $color-text-gray;
  font-size: 14px;
  line-height: 21px;

  text-transform: capitalize;

  border-bottom: 2px solid transparent;
  cursor: pointer;

  transition: border 0.3s, color 0.3s;

  &:not(:last-child) {
    margin-right: 5px;

    @include media(tablet) {
      margin: 0;
    }
  }

  &.active {
    color: $color-primary;
    color: $color-text-black;

    border-color: $color-blue-accent;
  }

  &:hover {
    color: $color-primary;
  }

  @include media(tablet) {
    width: 100%;
    margin: 0 auto;

    padding: 8px 10px;

    color: #393939;
    font-size: 16px;
    line-height: 21px;

    border: 0;
    &:hover {
      background-color: rgba($color: #f6f6f6, $alpha: 0.4);
    }
    &.active {
      color: $color-primary;
      font-weight: bold;

      background-color: rgba($color: $color-primary, $alpha: 0.03);
    }
  }
}

.icon {
  @include media(tablet) {
    transform: rotate(90deg);

    transition: transform 0.2s ease;
    &_opened {
      transform: rotate(270deg);
    }
  }
}

.tabs-list {
  @include media(tablet) {
    position: absolute;
    top: calc(100% + 5px);
    z-index: 1;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 500px;
    max-height: 200px;

    margin: 0;
    padding: 15px;

    overflow-y: scroll;

    background: $color-white;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(9, 19, 55, 0.05);

    transition: 3s;
    animation: opacity 0.2s ease-in;
    &.visible {
      display: none;
    }
  }

  @include media(mobile) {
    max-width: 350px;
  }
}

@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.subscribe {
  @include media(tablet) {
    display: none;
  }
}
</style>
