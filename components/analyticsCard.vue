<template>
  <div class="card analytics-card">
    <div class="card-body text-center">
      <div class="mb-3">
        <div class="icon icon-shape icon-md text-white" :class="iconClass"><i class="fas fa-suitcase"></i>
        </div>
      </div>
      <h5 class="h3 font-weight-bolder mb-1">{{ analyticLength }}</h5>
      <span class="d-block text-sm text-muted font-weight-bold">{{  analyticText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'analytics-card',
  props: {
    analyticLength: {
      type: Number,
      default: 0
    },
    analyticText: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.analytics-card {
    background: var(--bg-white) !important;
    border-color: var(--card-border) !important;
  }
</style> 