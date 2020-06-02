<template v-v-if="job.title">
  <section>
    <div class="row justify-content-center">
      <div class="col-lg-6 d-flex flex-column align-items-center text-center">
        <div class="avatar-parent-child">
          <Logo />
        </div>
        <h3 class="h4 mt-2">{{ job.title }}</h3>
        <p class="tex-muted">{{ job.description }}</p>
        <div class="badge badge-pill px-3 py-2" :class="job.status === 'Closed' ? 'badge-danger' : 'badge-success'">{{ job.status }}</div>
      </div>
    </div>
    <div class="row justify-content-center pt-4">
      <div class="col-9">
       <hr class="mb-5">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-3" v-if="job.location">
            <div class="job-info">
              <div class="info-icon">
                <i class="fas fa-compass"></i>
              </div>
              <div class="info-text">
                <p class="mb-0">{{ job.location }}</p>
                <small class="text-muted">Location</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4" v-if="job.type">
            <div class="job-info">
              <div class="info-icon">
                <i class="fas fa-user-cog"></i>
              </div>
              <div class="info-text">
                <p class="mb-0">{{ job.type }}</p>
                <small class="text-muted">Job type</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4" v-if="job.experience">
            <div class="job-info">
              <div class="info-icon">
                <i class="fas fa-user"></i>
              </div>
              <div class="info-text">
                <p class="mb-0">{{ job.experience }}</p>
                <small class="text-muted">Experience</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4" v-if="job.salary">
            <div class="job-info">
              <div class="info-icon">
                <i class="fas fa-money-bill-alt"></i>
              </div>
              <div class="info-text">
                <p class="mb-0">&#36; {{ job.salary }}</p>
                <small class="text-muted">Salary</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4" v-if="job.hoursPerWeek">
            <div class="job-info">
              <div class="info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="info-text">
                <p class="mb-0">{{ job.hoursPerWeek }}hrs/wk</p>
                <small class="text-muted">Hours per week</small>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-12 mb-4" v-if="job.benefits">
            <div class="job-info">
              <div class="info-icon">
                <i class="fas fa-briefcase"></i>
              </div>
              <div class="info-text">
                <p class="mb-0"><span class="badge badge-pill badge-success text-white mr-2" v-for="(benefit,index) in job.benefits" :key="index">{{ benefit }}</span></p>
                <small class="text-muted">Benefits</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center text-center mt-4">
      <div class="col-md-2">
        <button class="btn btn-light mb-5 btn-block" :disabled="job.status === 'Closed'">Apply</button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  layout: 'auth',
   components: {
      Logo
    },
  async mounted() {
    this.getSingleJob()
  },
  methods: {
    async getSingleJob() {
      await this.$store.dispatch('dashboard/getSingleJob', this.$route.params.id)
    }
  },
  computed: {
    job() {
      return this.$store.state.dashboard.job
    }
  },
}
</script>

<style scoped>
  .avatar-parent-child {
    height: 55px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: #000;
    padding: 5px;
    text-align: center;
  }
</style>