<template>
  <div>
    <template v-if="!loadingPage">
      <section class="page-title pb-5"> 
        <div class="row">
          <div class="col-md-8">
            <h1 class="h4 mb-0 page-title">Hi! {{ user.name ? user.name.split(' ')[0] : '' }}</h1>
            <p class="text-muted">Are you ready to japa?</p>
          </div>
          <div class="col-md-4 text-right">
            <client-only placeholder="Loading...">
              {{ new Date() | moment('MMMM Do, YYYY') }}
            </client-only>
          </div>
        </div>
      </section>
  
      <!-- dashboard analytivs -->
      <section class="pb-5">
        <div class="row">
          <!-- total jobs -->
          <div class="col-lg-3 col-sm-6 px-2">
            <div class="card">
              <div class="card-body text-center">
                <div class="mb-3">
                  <div class="icon icon-shape icon-md bg-primary shadow-primary text-white"><i class="fas fa-suitcase"></i>
                  </div>
                </div>
                <h5 class="h3 font-weight-bolder mb-1">{{ allJobs ? allJobs.jobCount : '--' }}</h5>
                <span class="d-block text-sm text-muted font-weight-bold">Total Jobs</span>
              </div>
            </div>
          </div>
  
          <!-- open jobs -->
          <div class="col-lg-3 col-sm-6 px-2">
            <div class="card">
              <div class="card-body text-center">
                <div class="mb-3">
                  <div class="icon icon-shape icon-md bg-success shadow-success text-white"><i class="fas fa-suitcase"></i>
                  </div>
                </div>
                <h5 class="h3 font-weight-bolder mb-1">{{ openJobs? openJobs.length : '--' }}</h5>
                <span class="d-block text-sm text-muted font-weight-bold">Open Jobs</span>
              </div>
            </div>
          </div>
  
          <!-- Closed jobs -->
          <div class="col-lg-3 col-sm-6 px-2">
            <div class="card">
              <div class="card-body text-center">
                <div class="mb-3">
                  <div class="icon icon-shape icon-md bg-danger shadow-danger text-white"><i class="fas fa-suitcase"></i>
                  </div>
                </div>
                <h5 class="h3 font-weight-bolder mb-1">{{ closedJobs ? closedJobs.length : '--' }}</h5>
                <span class="d-block text-sm text-muted font-weight-bold">Closed Jobs</span>
              </div>
            </div>
          </div>
  
          <!-- applied jobs -->
          <div class="col-lg-3 col-sm-6 px-2">
            <div class="card">
              <div class="card-body text-center">
                <div class="mb-3">
                  <div class="icon icon-shape icon-md bg-warning shadow-warning text-white"><i class="fas fa-suitcase"></i>
                  </div>
                </div>
                <h5 class="h3 font-weight-bolder mb-1">0</h5>
                <span class="d-block text-sm text-muted font-weight-bold">Applied Jobs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- latest jobs -->
      <section class="pt-5" v-if="latestJobs !== undefined">
        <div class="row mb-5">
          <div class="col-md-8">
            <h1 class="h4 mb-0 page-title">Latest Jobs</h1>
          </div>
          <div class="col-md-4 text-right">
            <nuxt-link :to="({path: '/jobs'})" class="all-jobs-link"><span>View All Jobs</span> <i class="fas fa-external-link-alt pl-2"></i></nuxt-link>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-3 col-sm-6 px-2 pb-4" v-for="job in latestJobs.slice(0,8)" :key="job._id">
            <div class="card job-card">
              <div class="card-body text-center">
                <div class="d-flex justify-content-center">
                  <div class="avatar-parent-child">
                    <Logo />
                    <div class="position-absolute" style="left: 152px; top: 40px;"  v-if="job.status === 'Open'">
                      <small class="text-success"><i class="fas fa-circle"></i></small>
                    </div>
                    <div class="position-absolute" style="left: 152px; top: 40px;" v-if="job.status === 'Closed'">
                      <small class="text-danger"><i class="fas fa-circle"></i></small>
                    </div>
                  </div>
                </div>
                <nuxt-link :to="({path: `/jobs/${job._id}`})" class="d-block h6 mt-4 mb-1">{{ job.title }}</nuxt-link>
                <span class="d-block text-sm text-muted mb-3 job-description">{{ job.description }}</span>
              </div>
              <div class="card-footer border-0 bg-white d-flex justify-content-between mb-2">
                <div class="d-flex align-items-center">
                  <img src="~assets/images/location.svg" height="15" alt="">
                  <small class="text-dark pl-1">{{ job.location }}</small>
                </div>
                <small class="text-warning">&#36; {{ job.salary }}</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
    <template v-else>
     <page-loader />
    </template>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  import PageLoader from '@/components/pageLoader'
  export default {
    layout: 'auth',
    components: {
      Logo,
      PageLoader
    },
    async mounted() {
      this.user = JSON.parse(localStorage.getItem('authUser'))
      this.getJobs()
    },
    methods: {
      async getJobs() {
        this.loadingPage = true 
        await this.$store.dispatch('dashboard/allJobs').then(res => {
          this.loadingPage = false
        }).catch (err => {
          console.log(err);
          this.loadingPage = false
        })
      }
    },
    computed: {
      allJobs() {
        return this.$store.state.dashboard.jobs
      },
      latestJobs() {
        return this.$store.getters['dashboard/latestJobs']
      },
      closedJobs() {
        return this.$store.getters['dashboard/closedJobs']
      },
      openJobs() {
        return this.$store.getters['dashboard/openJobs']
      }
    },
    data() {
      return {
        user: {},
        loadingPage: true
      }
    },
  }

</script>

<style>
  .page-title {
    color: #151516;
    letter-spacing: -1px;
    margin-bottom: 3px;
  }

  .icon-shape {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    border-radius: .375rem;
    width: 3rem;
    height: 3rem;
  }

  .all-jobs-link {
    font-size: 14px;
    color: #151516;
  }

  .all-jobs-link span {
    border-bottom: 1px dotted;
  }

  .job-description {
    display: -webkit-box !important;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .job-card {
    height: 100%;
    min-height: 300px;
    margin-bottom: 0;
  }

  .avatar-parent-child {
    height: 55px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: #151516;
    padding: 5%;
    text-align: center;
  }

  .avatar-parent-child svg {
    position: absolute;
    height: 30px;
    width: 30px;
  }

</style>
