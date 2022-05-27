<template>
  <component
    :is="tag"
    ref="button"
    :class="classes"
    :style="styles"
    class="v-button"
    v-bind="$attrs"
    :disabled="loading"
    @click="buttonClick">
    <template v-if="!loading">
      <SvgIcon
        v-if="iconLeft"
        :key="iconLeft"
        :height="iconSizes[size]"
        :name="iconLeft"
        :width="iconSizes[size]"
        class="v-button__icon-left"
        fill="currentColor" />

      <span v-if="!isIcon">
        <slot></slot>
      </span>

      <SvgIcon
        v-if="iconRight"
        :key="iconRight"
        :height="iconSizes[size]"
        :name="iconRight"
        :width="iconSizes[size]"
        class="v-button__icon-right"
        fill="currentColor" />
    </template>
    <template v-else>
      <div class="loading">
        <span> Loading</span>
        <div class="dot-flashing"></div>
      </div>
    </template>
  </component>
</template>

<script lang="ts">
import { getUtm } from '@/utils/utm';
import { defineComponent, PropType } from 'vue';

import { VButtonInterface } from './VButton.interfaces';

export default defineComponent({
  props: {
    type: {
      type: String as PropType<VButtonInterface.Props.Type>,
      required: false,
      default: 'primary',
    },

    size: {
      type: String as PropType<VButtonInterface.Props.Size>,
      default: 'medium',
    },

    justify: {
      type: String,
      default: 'center',
      validator(s: string) {
        return [
          'center',
          'space-between',
          'space-around',
          'flex-start',
          'flex-end',
        ].includes(s);
      },
    },
    gtagEvent: { default: '', type: String, required: false },
    to: { default: '', type: [String, Object] },
    tag: { type: String, default: 'button' },
    fluid: { type: Boolean, default: false },
    maxWidth: { type: String, default: 'auto' },
    rounded: { type: Boolean, default: false },
    noBorder: { type: Boolean, default: false },
    isIcon: { type: Boolean, default: false },
    iconLeft: { type: String, default: '' },
    iconRight: { type: String, default: '' },
    loading: { type: Boolean, default: false },
  },

  emits: ['click'],

  data: () => ({
    iconSizes: {
      large: '14',
      big: '14',
      medium: '14',
      small: '12',
    },
  }),

  computed: {
    classes(): VButtonInterface.Class {
      return [
        this.size,
        this.type,
        {
          'is-icon': this.isIcon,
          'no-border': this.noBorder,
          rounded: this.rounded,
          fluid: this.fluid,
        },
      ];
    },
    styles(): VButtonInterface.Style {
      return {
        justifyContent: this.justify,
        maxWidth: this.maxWidth,
      };
    },
  },

  mounted() {
    // @ts-ignore: Unreachable code error
    if (this.$refs.button.href) this.$refs.button.href += getUtm();
  },

  methods: {
    buttonClick(this: any, e: Event) {
      if (this.gtagEvent) this.$gtag('event', this.gtagEvent);

      if (this.to) this.$router.push(this.to);

      this.$emit('click', e);
    },
  },
});
</script>

<style lang="scss" scoped>
.v-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: $color-white;
  font-weight: 600;
  letter-spacing: 0.3px;

  border: 1px solid;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  transition: color 0.3s ease, border-color 0.3s ease,
    background-color 0.3s ease;

  &:not(.is-icon) {
    .v-button__icon-left {
      margin-right: 12px;
    }

    .v-button__icon-right {
      margin-left: 12px;
    }
  }

  /** Props => Disabled */
  &:disabled {
    color: $color-text-gray-lighter;

    background-color: $color-basic-disabled;
    border-color: $color-basic-disabled;

    pointer-events: none;
  }
}

.is-icon.rounded {
  border-radius: 50%;
}

// Props => Size
.large {
  font-size: 18px;
  line-height: 22px;

  &:not(.is-icon) {
    min-height: 58px;
    padding: 0 24px;
  }

  &.is-icon {
    width: 58px;
    height: 58px;
  }
}

.big {
  font-size: 14px;
  line-height: 18px;

  &:not(.is-icon) {
    min-height: 46px;
    padding: 0 20px;
  }

  &.is-icon {
    width: 46px;
    height: 46px;
  }
}

.medium {
  font-size: 14px;
  line-height: 16px;

  &:not(.is-icon) {
    min-height: 36px;
    padding: 0 18px;
  }

  &.is-icon {
    width: 36px;
    height: 36px;
  }
}

.small {
  font-size: 12px;
  line-height: 14px;

  &:not(.is-icon) {
    min-height: 26px;
    padding: 0 12px;
  }

  &.is-icon {
    width: 26px;
    height: 26px;
    min-height: 20px;
  }
}

// Props => Type
.primary {
  background-color: $color-primary;
  border-color: $color-primary;

  &:hover {
    background-color: $color-primary-hover;
    border-color: $color-primary-hover;
  }

  &:active {
    background-color: $color-blue-dark;
    border-color: $color-blue-dark;
  }
}

.success {
  background-color: $color-success;
  border-color: $color-success;

  &:hover {
    background-color: #51b166;
    border-color: #51b166;
  }

  &:active {
    background-color: #2a883e;
    border-color: #2a883e;
  }
}

.warning {
  background-color: $color-orange;
  border-color: $color-orange;

  &:hover {
    background-color: #ffd6b0;
    border-color: #ffd6b0;
  }

  &:active {
    background-color: #e07919;
    border-color: #e07919;
  }
}

.danger {
  background-color: $color-red;
  border-color: $color-red;

  &:hover {
    background-color: #f67d85;
    border-color: #f67d85;
  }

  &:active {
    background-color: #ae131c;
    border-color: #ae131c;
  }
}

.info {
  background-color: $color-info;
  border-color: $color-info;

  &:hover {
    background-color: $color-info-hover;
    border-color: $color-info-hover;
  }

  &:active {
    background-color: $color-info-active;
    border-color: $color-info-active;
  }
}

.basic {
  color: $color-text-gray;

  background-color: $color-gray-light;
  border-color: $color-gray-light;
}

.gray {
  color: $color-white;

  background: #45516b;
  border: none;

  &:hover {
    color: #45516b;

    background: $color-white;
  }

  &:active {
    color: #45516b;

    background: $color-white;
  }
}

.white {
  color: #656a85;

  background-color: $color-white;
  border-color: transparent;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(43, 56, 81, 0.15);

  transition: 0.3s ease box-shadow;

  .v-button__icon-right,
  .v-button__icon-left {
    color: $color-gray-silver;

    transition: 0.3s ease color;
  }

  &:hover {
    color: $color-text-black;
    // box-shadow: 0px 2px 5px transparent;
    background-color: $color-blue-bg;

    .v-button__icon-right,
    .v-button__icon-left {
      color: $color-text-black;
    }
  }

  &:active {
    // box-shadow: 0px 2px 5px transparent;
    color: $color-text-black;

    background-color: #f2f6fc;

    .v-button__icon-right,
    .v-button__icon-left {
      color: $color-text-black;
    }
  }
}

.transparent {
  color: $color-gray;

  background-color: transparent;
  border-color: transparent;

  &:hover {
    color: $color-text-gray-lighter;

    background-color: $color-disabled-background;
  }

  &:active {
    color: $color-blue;

    background-color: $color-disabled-background;
  }
}

.ghost {
  padding: 0 !important;

  color: $color-blue;

  background-color: transparent;
  border: none;

  &:hover {
    color: #1a4e9b;
  }

  &:active {
    color: #1a4e9b;
  }
}

.border {
  color: $color-gray-dark;

  background: $color-white;
  border: 1px solid $color-gray-border-light;

  &:hover {
    background: $color-gray-bg;
  }

  &:active {
    background: $color-gray-bg;
  }
}
$gradient: linear-gradient(
  45deg,
  #0038a4,
  #4c89ff,
  #144cb8,
  #4684ff,
  #112b5e,
  #206bff
);

.gradient {
  color: #ffffff;

  background-image: $gradient;
  background-size: 400%;

  border: none;
  border-radius: 4px;
  outline: none;
  box-shadow: 0px 20px 16px -16px rgba(45, 117, 255, 0.4),
    inset 32px 16px 42px rgba(20, 76, 184, 0.2);

  opacity: 1;
  backdrop-filter: blur(4px);

  transition: $transition-default;

  animation: glowing 20s infinite;

  &:hover {
    background-image: none;

    animation: stop-glowing 0.7s linear forwards;
  }
}

@keyframes glowing {
  0% {
    background-position: left;
  }

  100% {
    background-position: right;
  }
}

@keyframes stop-glowing {
  0% {
    background-color: #4c89ff;
  }

  50% {
    background-color: #4684ff;
  }

  100% {
    background-color: #144cb8;
  }
}

.loading {
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.dot-flashing {
  position: relative;

  width: 5px;
  height: 5px;
  margin-left: 20px;

  color: $color-primary;

  background-color: $color-primary;
  border-radius: 5px;

  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: 0.5s;
}

.dot-flashing::before,
.dot-flashing::after {
  position: absolute;
  top: 0;

  display: inline-block;

  content: '';
}

.dot-flashing::before {
  left: -10px;

  width: 5px;
  height: 5px;

  color: $color-primary;

  background-color: $color-primary;
  border-radius: 5px;

  animation: dotFlashing 1s infinite alternate;
  animation-delay: 0s;
}

.dot-flashing::after {
  left: 10px;

  width: 5px;
  height: 5px;

  color: $color-primary;

  background-color: $color-primary;
  border-radius: 5px;

  animation: dotFlashing 1s infinite alternate;
  animation-delay: 1s;
}

@keyframes dotFlashing {
  0% {
    background-color: $color-primary;
  }
  50%,
  100% {
    background-color: $color-blue-medium;
  }
}
</style>
