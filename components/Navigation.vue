<template>
  <nav class="navbar sticky-top  navbar-expand-lg navbar-dark bg-dark shadow main-navigation">
    <div class="container">
      <nuxt-link class="navbar-brand" :to="({path: '/dashboard'})">
        <Logo />
      </nuxt-link>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
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
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              id="navbarDropdownMenuLink" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
              <img src="~assets/images/avatar-1.png" height="40" alt="">
            </a>
            <div class="dropdown-menu pb-0" aria-labelledby="navbarDropdownMenuLink">
              <div class="dropdown-item bg-transparent">
                <img src="~assets/images/avatar-1.png" height="40" alt="">
              </div>
              <p class="dropdown-item mb-0 pb-0 bg-transparent">{{ user.name }}</p>
              <small class="dropdown-item mt-0 pt-0 bg-transparent" href="#">{{ user.email ? user.email : ''}}</small>
              <div class="dropdown-divider"></div>
              <div class="py-2">
                <nuxt-link :to="({path: '/profile'})" class="dropdown-item text-dark bg-transparent dropdown-hover" href="#">Profile</nuxt-link>
              </div>
              <a class="dropdown-item bg-light logOut__link" @click="logOut" href="#"><i class="fas fa-sign-out-alt mr-2"></i>Log out</a>
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
    },
    methods: {
      logOut() {
        localStorage.clear()
        this.$router.replace({path: '/'})
      }
    },
    mounted() {
      this.user = JSON.parse(localStorage.getItem('authUser'))
    },
    data() {
      return {
        user: {}
      }
    }
  }

</script>
