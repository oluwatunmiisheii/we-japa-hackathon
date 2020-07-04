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
          <div class="col-lg-3 col-sm-6 px-2" v-if="allJobs">
            <AnalyticCard :analyticLength="allJobs.jobCount" :analyticText="'Total Jobs'" :iconClass="'bg-primary shadow-primary'" />
          </div>
  
          <!-- open jobs -->
          <div class="col-lg-3 col-sm-6 px-2" v-if="openJobs">
            <AnalyticCard :analyticLength="openJobs.length" :analyticText="'Open Jobs'" :iconClass="'bg-success shadow-success'" />
          </div>
  
          <!-- Closed jobs -->
          <div class="col-lg-3 col-sm-6 px-2" v-if="closedJobs">
            <AnalyticCard :analyticLength="closedJobs.length" :analyticText="'Closed Jobs'" :iconClass="'bg-danger shadow-danger'" />
          </div>
  
          <!-- applied jobs -->
          <div class="col-lg-3 col-sm-6 px-2">
            <AnalyticCard :analyticLength="0" :analyticText="'Applications'" :iconClass="'bg-warning shadow-warning'" />
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
            <JobCard :job="job" />
          </div>
        </div>
      </section>
    </template>
    <template v-else>
      <DashboardSkeletonLoader />
    </template>
  </div>
</template>

<script>
  import PageLoader from '@/components/pageLoader'
  import JobCard from '@/components/jobCard'
  import AnalyticCard from '@/components/analyticsCard'
  import DashboardSkeletonLoader from '@/components/dashboardLoading'
  export default {
    layout: 'auth',
    components: {
      PageLoader,
      JobCard,
      AnalyticCard,
      DashboardSkeletonLoader
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
    color: var(--font-color);
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
    color: var(--font-color);
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
