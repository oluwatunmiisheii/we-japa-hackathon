<template>
  <div>
    <section class="page-title pb-5"> 
      <div class="row">
        <div class="col-md-8">
          <h1 class="bg-grey mb-0 loading mb-3" style="height: 8px; width: 30%" />
          <p class="bg-grey" style="height: 5px; width: 40%;" />
        </div>
        <div class="col-md-4 text-right">
          <div class="bg-grey loading ml-auto" style="height:8px; width: 30%"></div>
        </div>
      </div>
    </section>

    <section class="pb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3"  v-for="(n,index) in 4" :key="index">
            <AnalyticsSkeletalLoader />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-3" v-for="(n,index) in 4" :key="index">
            <JobCardSkeleton />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import JobCardSkeleton from '@/components/skeletonLoader/jobCardSkeleton'
import AnalyticsSkeletalLoader from '@/components/skeletonLoader/analyticsCardSkeleton'
export default {
  components: {
    JobCardSkeleton,
    AnalyticsSkeletalLoader
  }
}
</script>