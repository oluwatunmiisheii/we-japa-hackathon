<template>
  <nav class="navbar sticky-top  navbar-expand-lg navbar-dark bg-dark shadow">
    <div class="container">
      <nuxt-link class="navbar-brand" :to="({path: '/dashboard'})">
        <Logo />
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Latest Jobs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Applied Jobs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import Logo from '@/components/Logo'
  export default {
    components: {
      Logo
    }
  }

</script>
