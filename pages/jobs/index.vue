<template>
  <div>
    <template v-if="!pageLoading">
      <section class="page-title pb-5">
        <div class="row align-items-center">
          <div class="col-md-8">
            <h1 class="h4 mb-3 mb-md-0 page-title">All Jobs</h1>
          </div>
          <div class="col-md-4 text-right">
            <!-- search field -->
            <div class="form-group">
              <div class="input-group">
                <input 
                  v-model="search" 
                  type="text" 
                  class="form-control fs-14"  
                  placeholder="Filter jobs..."
                  @change="togglePagination" 
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- latest jobs -->
      <section class="mb-5" v-if="allJobs !== null">
        <template v-if="paginatedJobs.length">
          <div class="row mb-5">
            <div class="col-md-3 col-sm-6 px-2 pb-4" v-for="job in paginatedJobs" :key="job._id">
              <JobCard :job="job" />
            </div>
          </div>
          <!-- pagination -->
          <client-only>
            <div class="row justify-content-center text-center" v-if="allJobs !== null">
              <div class="col-md-12 d-flex justify-content-center">
                <paginate
                  v-if="togglePagination" 
                  :page-count="pageCount"
                  :page-range="3"
                  :margin-pages="2"
                  :click-handler="clickCallback"
                  :prev-text="`<i class='fa fa-angle-left fs-14'></i>`"
                  :next-text="`<i class='fa fa-angle-right fs-14'></i>`"
                  :container-class="'pagination'"
                  :page-class="'page-link'"
                >
                </paginate>
              </div>
            </div>
          </client-only>
        </template>

        <!-- shows when there is no job -->
        <template v-else>
          <div class="row justify-content-center">
            <div class="col-md-7 text-center">
              <img src="~/assets/images/illustration-4.png" alt="">
              <h4 class="h4">OOps! No Jobs </h4>
              <p class="text-muted">No jobs matches your search criteria, try using other keywords</p>
            </div>
          </div>
        </template>
      </section>
    </template>

    <template v-else>
      <section class="page-title pb-5">
        <div class="row align-items-center">
          <div class="col-md-8">
            <h1 class="mb-3 mb-md-0 bg-grey loading" style="height:8px; width: 30%" />
          </div>
          <div class="col-md-4 text-right">
            <div class="bg-grey loading"  style="height:20px; width: 100%"/>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-3" v-for="(n,index) in 8" :key="index">
              <JobCardSkeleton />
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
  import PageLoader from '@/components/pageLoader'
  import JobCard from '@/components/jobCard'
  import JobCardSkeleton from '@/components/skeletonLoader/jobCardSkeleton'
  export default {
    layout: 'auth',
    components: {
      JobCard,
      PageLoader,
      JobCardSkeleton
    },
    props: {
      size: {
        type: Number,
        required: false,
        default: 8
      }
    },
    async mounted() {
      if (this.allJobs === null) {
        this.getJobs()
      }
      else {
        this.pageLoading = false
      }
    },
    methods: {
      async getJobs() {
        this.pageLoading = true
        await this.$store.dispatch('dashboard/allJobs').then(res => {
          this.pageLoading = false
        }).catch(err => {
          this.pageLoading= false
        })
      },
      clickCallback(pageNum) {
        this.indexNumber = pageNum - 1
      },
      togglePagination () {
        if (this.search) {
          return false
        }   else {
          return true
        }
      },
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
      },
      pageCount() {
        const l = this.allJobs.jobs.length
        const s = this.size
        return Math.ceil(l / s)
      },
      paginatedJobs() {
        const self = this
        const start = parseInt(self.indexNumber) * self.size
        const end = start + self.size
        if (self.search == "") {
          return self.allJobs.jobs.slice(start, end)
        }else {
          return self.allJobs.jobs.filter((job) => {
            return ((job.title.toLowerCase().match(self.search.toLowerCase()))  || 
              (job.location.toLowerCase().match(self.search.toLowerCase())) || 
              (job.status.toLowerCase().match(self.search.toLowerCase())) ||
              (job.description.toLowerCase().match(self.search.toLowerCase())) ||
              (job.experience.toLowerCase().match(self.search.toLowerCase())) ||
              (String(job.salary).toLowerCase().match(self.search.toLowerCase()))
            )
          })
        }
      },
    },
    data() {
      return {
        indexNumber: 0,
        page: 1,
        search: '',
        pageLoading: true
      }
    },
  }

</script>
