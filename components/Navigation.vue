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
        <ul class="navbar-nav ml-auto d-flex align-items-center">
          <li class="nav-item">
            <nuxt-link :to="({path: '/jobs'})" class="nav-link" href="#">All Jobs</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="({path: '/jobs/applied-jobs'})" class="nav-link" href="#">Applied Jobs</nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="~assets/images/avatar-1.png" height="40" alt="">
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
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
