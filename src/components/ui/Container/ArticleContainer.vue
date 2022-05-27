<template>
  <section>
    <Container>
      <div class="content">
        <div v-click-outside="close" class="sidebar">
          <div class="nav-tablet">
            <div class="selected-title" @click="toggleDropdown">
              <div class="nav-title">Contents</div>
              <SvgIcon
                fill="#8A91A4"
                height="14"
                width="14"
                name="arrow-down" />
            </div>
          </div>

          <transition name="fade" mode="out-in">
            <div v-if="dropdownVisible" class="dropdown">
              <div
                v-for="(content, index) in sidebarContent"
                :key="index"
                class="titles-tablet"
                @click="scrollToTitle(content.ankor)">
                <span class="title-sidebar">
                  {{ content.title }}
                </span>
              </div>
            </div>
          </transition>
          <div class="content-wrap">
            <div class="content-box">
              <div class="sidebar-heading">Contents</div>
              <div class="titles-box">
                <div
                  v-for="(content, index) in sidebarContent"
                  :key="index"
                  class="titles">
                  <span
                    class="title-sidebar"
                    @click="scrollToTitle(content.ankor)">
                    {{ content.title }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="article-container">
          <slot name="article" />
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { HowToInterface } from '@/database/how-to/howTo.interfaces';
import { defineComponent, PropType } from 'vue';
import Container from './Container.vue';
import vClickOutside from 'click-outside-vue3';

interface ISidebarContent {
  title: string;
  ankor: string;
}

export default defineComponent({
  components: { Container },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    post: {
      type: Object as PropType<HowToInterface.Post>,
      required: true,
    },
  },

  data() {
    return {
      dropdownVisible: false,
      sidebarContent: [] as ISidebarContent[],
    };
  },
  mounted() {
    const titles = document.querySelectorAll<HTMLElement>('h2');
    this.sidebarContent = Array.from(titles).map(
      (el: HTMLElement, index: number) => {
        const ankor = this.$props.post.title.split(' ').join('_') + index;
        el.setAttribute('id', ankor);
        return {
          title: el.innerText,
          ankor,
        };
      },
    );
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    close() {
      this.dropdownVisible = false;
    },
    scrollToTitle(ankor: string) {
      const element = document.getElementById(ankor);
      if (element !== null)
        element.scrollIntoView({ block: 'center', behavior: 'smooth' });
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 100%;
  @include media(tablet) {
    flex-direction: column;
  }
}

.sidebar {
  position: relative;

  width: 100%;
  max-width: 236px;

  @include media(tablet) {
    position: sticky;
    top: 65px;
    z-index: 10;

    width: 100%;
    max-width: none;
  }
}

.nav-tablet {
  position: relative;

  display: none;
  width: 490px;

  margin-bottom: 40px;
  padding: 16px 0;

  color: $color-gray-dark;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  background: $color-gray-bg;
  border-radius: 5px;

  cursor: pointer;
  @include media(tablet) {
    display: block;
    width: 100%;
  }
}

.selected-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.nav-title {
  color: $color-gray-dark;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}

.dropdown {
  position: absolute;
  top: 55px;
  z-index: 1;

  width: 100%;
  height: 300px;

  overflow-y: scroll;

  border-radius: 5px;
}

.titles-tablet {
  width: 100%;
  padding: 16px 20px;

  color: $color-gray-dark;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  background: $color-gray-bg;

  cursor: pointer;

  transition: all 0.3s ease;
  &:hover {
    color: $color-blue;

    background-color: $color-blue-bg-dark;
  }
}

.title-sidebar {
  color: $color-gray-medium-dark;
  font-size: 14px;
  line-height: 17px;
}

.content-wrap {
  position: sticky;
  top: 120px;
  left: 85px;
  z-index: 4;

  display: block;
}

.titles-box::-webkit-scrollbar {
  width: 5px;
  height: 8px;
}

.titles-box::-webkit-scrollbar-thumb {
  background-color: $color-blue-gray;
  border-radius: 4px;
}

.titles-box {
  height: 400px;
  overflow-y: scroll;
}

.content-box {
  display: block;
  width: 100%;

  max-width: 236px;

  @include media(tablet) {
    display: none;
  }
}

.sidebar-heading {
  margin-bottom: 20px;

  color: $color-gray-dark;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}

.titles {
  padding: 8px 12px;

  &:last-child {
    margin-bottom: 0;
  }
  cursor: pointer;

  transition: $transition-default;

  &:hover {
    .title-sidebar {
      color: $color-blue;
    }

    background-color: $color-blue-bg-dark;
  }
}

.article-container {
  position: relative;

  width: 100%;
  max-width: 750px;
  margin: 0 auto;

  @include media(tablet) {
    max-width: 530px;
  }
}
</style>
