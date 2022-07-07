<template>
  <div class="grid">
    <div role="button" class="accordion" :class="[{ active: isActive }, type]">
      <div :class="['title', { active: isActive }]" class="head">
        <div class="title-box" :class="['title', { active: isActive }]">
          <div :class="{ active: isActive }" class="icon">
            <slot name="icon" />
          </div>
          <slot name="title" />
        </div>
        <SvgIcon
          name="arrow"
          width="15"
          height="15"
          fill="currentColor"
          class="head-icon" />
      </div>
      <AccordionTransition>
        <div v-if="isActive" :class="['text', { active: isActive }]">
          <slot name="text" />
          <slot name="markedText" />
        </div>
      </AccordionTransition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import AccordionTransition from './AccordionTransition.vue';

export default defineComponent({
  components: { AccordionTransition },
  props: {
    activeTab: {
      type: Number,
      required: true,
    },

    currentIndex: {
      type: Number,
      required: true,
    },

    type: {
      type: String as PropType<'dark' | 'white' | 'noBorder'>,
      required: false,
      default: 'noBorder',
    },
  },

  computed: {
    isActive() {
      return this.activeTab === this.currentIndex;
    },
  },
});
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: column;
}

.title-box {
  display: flex;
  align-items: center;
}

.title {
  color: #8c93a6;

  font-weight: 600;
  font-size: 20px;
  line-height: 26px;

  transition: $transition-default;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #5b6171;
  &.white {
    &:hover {
      color: #195ee6;
    }
  }

  &.dark {
    &:hover {
      color: #fff;
    }
  }
}

.head-icon {
  margin-left: 10px;


  transition: 0.15s ease-in-out;
}

.text {
  font-size: 14px;
  line-height: 24px;

  transform: translateY(10px);
}

.arrow {
  margin-left: 17px;
}

.accordion {
  box-sizing: border-box;

  margin: 20px 0 20px;
  padding: 20px 20px 35px 0;

  text-align: left;

  border-radius: 5px;
  cursor: pointer;

  transition: 0.3s ease border, 0.3s ease background-color;

  &:nth-of-type {
    margin-top: 25px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.white {
    // color: #195ee6;

    background: $color-background-primary;
    border-bottom: 1px solid rgba(115, 122, 140, 0.1);

    transition: $transition-default;
    &:hover {
      .title {
        color: #195ee6;
      }
    }
    &.active {
      .title {
        color: #262d40;
      }
      .data-arrow {
        transform: rotate(270deg);
      }
    }
  }

  &.dark {
    box-sizing: border-box;
    padding: 20px;

    color: $color-white !important;
    text-align: left;

    background-color: rgba(76, 94, 135, 0.1);
    border: 1px solid rgba(53, 67, 102, 0.3);
    border-radius: 5px;
    cursor: pointer;

    transition: border 0.3s ease, background-color 0.3s ease,
      padding-bottom 0.2s ease-in-out;

    .title {
      color: #a7adbe;
    }

    &:hover,
    &.active {
      color: #fff;

      background-color: rgba(76, 94, 135, 0.3);
      border: 1px solid rgba(53, 67, 102, 0.3);
    }
  }

  &.active {
    padding-bottom: 30px;

    .head-icon {
      transform: rotate(180deg);
    }
  }
}
</style>
