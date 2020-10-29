<template>
  <div class="card job-card">
    <div class="card-body text-center">
      <div class="d-flex justify-content-center">
        <div class="avatar-parent-child">
          <img src="~assets/images/logo.png" alt="" width="30">
        </div>
      </div>
      <nuxt-link :to="({path: `/jobs/${job._id}`})" class="d-block h6 mt-4 mb-1">{{ job.title }}</nuxt-link>
      <span class="d-block text-sm text-muted mb-3 job-description">{{ job.description }}</span>
      <small class="text-dark font-weight-bold fs-13">{{ job.salary }}</small>
    </div>
    <div class="card-footer border-0 bg-white d-flex justify-content-between mb-2">
      <div class="d-flex align-items-center">
        <img src="~assets/images/location.svg" height="15" alt="" v-if="$colorMode.preference === 'light'">
        <img src="~assets/images/location-inverse.svg" height="15" alt="" v-if="$colorMode.preference === 'dark'">
        <small class="text-dark pl-1">{{ job.location }}</small>
      </div>
      <div class="text-danger fs-14" v-if="job.status === 'Closed'">{{job.status}}</div>
      <small class="text-secondary fs-14" v-if="job.status === 'Open'">{{job.status}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'job-card',
  props: {
    job: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
  .job-card {
    background: var(--bg-white) !important;
    border-color: var(--card-border) !important;
  }
  .job-card .card-footer {
    background: var(--bg-white) !important;
  }
</style>