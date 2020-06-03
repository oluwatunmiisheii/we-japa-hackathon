<template>
  <div>
    <section class="page-title pb-5">
      <div class="row">
        <div class="col-md-8">
          <h1 class="h4 mb-0 page-title">My Profile</h1>
        </div>
      </div>
    </section>

    <section>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <div class="user-avartar">
                    <img src="~assets/images/avatar-1.png" height="70" alt="">
                  </div>
                  <div class="pl-4" style="width: 80%">
                    <p class="mb-0 font-weight-normal user--name w-100" style=" display: -webkit-box;">{{ user.name ? user.name : '' }}</p>
                    <small class="text-muted fs-14 user--email w-100" style=" display: -webkit-box;">{{ user.email? user.email : '' }}</small>
                  </div>
                </li>
              </ul>
              <button class="btn btn-secondary btn-block my-3">Edit Profile</button>
              <ul class="list-group list-group-flush user-details">
                <li class="list-group-item">
                  <small class="text-muted mb-1 fs-14">Status</small>
                  <p class="mb-0 font-weight-normal">
                    <span v-if="user.status === 'Approved'" class="text-success fs-12"><i class="fa fa-circle"></i></span>
                    <span v-if="user.status === 'Pending'" class="text-warning fs-12"><i class="fa fa-circle"></i></span>
                    {{ user.status ? user.status : 'No info' }}
                  </p>
                </li>
                <li class="list-group-item">
                  <small class="text-muted mb-1 fs-14">Github</small>
                  <p class="mb-0 font-weight-normal"><a :href="user.git" target="_blank">{{ user.git ? user.git : 'No info' }}</a></p>
                </li>
                <li class="list-group-item">
                  <small class="text-muted mb-1 fs-14">Phone number</small>
                  <p class="mb-0 font-weight-normal">{{ user.phone ? user.phone : 'No Info' }}</p>
                </li>
                <li class="list-group-item">
                  <small class="text-muted mb-1 fs-14">Experience level</small>
                  <p class="mb-0 font-weight-normal">{{ user.experienceLevel ? user.experienceLevel : 'No Info' }}</p>
                </li>
                <li class="list-group-item">
                  <small class="text-muted mb-1 fs-14">Resume</small>
                  <p class="mb-0 font-weight-normal"><a :href="user.resume" target="_blank">{{ user.resume ? user.resume : 'No info' }}</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <template v-if="activeTab === 'activity-timeline'">
            <div class="card d-flex-justify-content-center text-center flex-column">
              <div class="card-body">
                <img src="~/assets/images/illustration-4.png" alt="">
                <h4 class="h4">OOps! No Jobs </h4>
                <p class="text-muted px-md-5 mx-md-5">You havent applied for any job of recent, click on the button below to view available jobs</p>
                <nuxt-link :to="({path: '/jobs'})" class="btn btn-secondary">View jobs</nuxt-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'auth',
    mounted() {
      this.user = JSON.parse(localStorage.getItem('authUser'))
    },
    data() {
      return {
        user: {},
        activeTab: 'activity-timeline'
      }
    },
  }
</script>

<style scoped>
  .user-details li.list-group-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .user-details li.list-group-item p {
    width: 65%;
    text-align: right;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    text-decoration: none;
  }

  .user-details li.list-group-item p a {
    color: #151516 !important;
  }

  .user-details li.list-group-item p a:hover {
    color: var(--secondary) !important;
  }

  .user-details li.list-group-item {
    padding: .75rem 0 !important;
  }
</style>
