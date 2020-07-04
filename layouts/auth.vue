<template>
  <div :key="key">
    <notifications group="foo" position="top right" :max="1" />
    <the-navigation />
    <transition mode="out-in" name="fade">
      <div class="container pt-5 pt-md-150 pb-5">
        <nuxt />
      </div>
    </transition>

    <!-- show theme switcher on web -->
    <div class="customizer-desktop d-none d-md-block">
      <template v-if="$colorMode.preference === 'dark'">
        <button 
          @click="toggle"
          type="button" 
          id="btnSwitchModeLight" 
          class="btn btn-primary btn-sm rounded-circle"
        >
          <i class="fas fa-sun"></i>
        </button>
      </template>

      <!-- switch to light mode -->
      <template v-if="$colorMode.preference === 'light' || $colorMode.preference === 'system'">
        <button 
          @click="toggle"
          type="button" 
          id="btnSwitchModeDark" 
          class="btn btn-secondary btn-sm rounded-circle"
        >
          <i class="fas fa-moon"></i>
        </button>
      </template>
    </div>

    <!-- show theme switcher on mobile -->
    <div class="customizer-mobile d-block d-md-none">
      <template v-if="$colorMode.preference === 'dark'">
        <button 
          @click="toggle"
          type="button" 
          id="btnSwitchModeLight" 
          class="btn btn-primary btn-sm rounded-circle"
        >
          <i class="fas fa-sun"></i>
        </button>
      </template>

      <!-- switch to light mode -->
      <template v-if="$colorMode.preference === 'light' || $colorMode.preference === 'system'">
        <button 
          @click="toggle"
          type="button" 
          id="btnSwitchModeDark" 
          class="btn btn-secondary btn-sm rounded-circle"
        >
          <i class="fas fa-moon"></i>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import TheNavigation from '@/components/Navigation'
export default {
  middleware: ['check-auth-status', 'auth-guard'],
  components: {
    TheNavigation
  },
  data() {
    return {
      key: 1
    }
  },
  mounted() {
    const colorMode = localStorage.getItem('nuxt-color-mode')
    this.$colorMode.preference = colorMode !== null ? colorMode : 'light'
  },
  methods: {
    toggle() {
      this.$colorMode.preference = this.$colorMode.value == "light" ? "dark" : "light";
    }
  }
}
</script>

<style scoped>
  @media(min-width:768px) {
    .pt-md-150 {
      padding-top: 150px !important;
    }
  }
  .customizer-desktop {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    width: 300px;
    height: 60px;
    z-index: 200;
  }

  .customizer-mobile {
    position: fixed;
    top: 2rem;
    left: 90%;
    width: 300px;
    height: 60px;
    z-index: 200;
  }
</style>