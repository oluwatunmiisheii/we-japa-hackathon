<template>
  <div>
    <notifications group="foo" position="top right" :max="1" />
    <the-navigation />
    <div class="container pt-5">
      <nuxt />
    </div>
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