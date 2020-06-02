<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-7 text-center">
      <img src="~/assets/images/illustration-4.png" alt="">
      <h4 class="h4">OOps! No Jobs </h4>
      <p class="text-muted">You havent applied for any job at the moment, click on the button below to view available jobs</p>
      <nuxt-link :to="({path: '/jobs'})" class="btn btn-secondary">View jobs</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth'
}
</script>