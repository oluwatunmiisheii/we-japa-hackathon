<template>
  <div>
    <!-- web navigation -->
    <nav class="navbar fixed-top  navbar-expand-lg navbar-light main-nav shadow d-none d-md-block">
      <div class="container">
        <nuxt-link class="navbar-brand" :to="({path: '/dashboard'})">
          <!-- <Logo /> -->
          <img src="~assets/images/logo.png" height="40" alt="weJapa logo">
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
              <nuxt-link :to="({path: '/jobs/applications'})" class="nav-link" href="#">Applications</nuxt-link>
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
                <img src="~assets/images/user-avartar.png" height="40" alt="">
              </a>
              <div class="dropdown-menu pb-0 bg-white" aria-labelledby="navbarDropdownMenuLink">
                <div class="dropdown-item bg-transparent">
                  <img src="~assets/images/user-avartar.png" height="40" alt="">
                </div>
                <p class="dropdown-item mb-0 pb-0 bg-transparent user--name text-dark">{{ user.name }}</p>
                <small class="dropdown-item mt-0 pt-0 bg-transparent user--email text-muted" href="#">{{ user.email ? user.email : ''}}</small>
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

    <!-- mobile navigation -->
    <nav class="navbar fixed-bottom navbar-light shadow-lg main-nav d-flex justify-content-around align-items-center text-center py-3 d-md-none">
      <nuxt-link :to="({path: '/dashboard'})" class="nav-link px-0">
        <i class="fa fa-home"></i>
        <small class="d-block">Home</small>
      </nuxt-link>
      <nuxt-link :to="({path: '/jobs/applications'})" class="nav-link px-0">
        <i class="fa fa-file"></i>
        <small class="d-block">Applications</small>
      </nuxt-link>
      <nuxt-link :to="({path: '/jobs/applications'})" class="nav-link px-0">
        <i class="fa fa-thumbtack"></i>
        <small class="d-block">Saved Jobs</small>
      </nuxt-link>
      <nuxt-link :to="({path: '/profile'})" class="nav-link px-0">
        <i class="fa fa-user"></i>
        <small class="d-block">Profile</small>
      </nuxt-link>
    </nav>
  </div>
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
