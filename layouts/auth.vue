<template>
  <div>
    <notifications group="foo" position="top right" :max="1" />
    <the-navigation />
    <transition mode="out-in" name="fade">
      <div class="container pt-5">
        <nuxt />
      </div>
    </transition>
  </div>
</template>

<script>
import TheNavigation from '@/components/Navigation'
export default {
  middleware: ['check-auth-status', 'auth-guard'],
  components: {
    TheNavigation
  }
}
</script>