import Vue from 'vue'
import Notifications from 'vue-notification'
import Paginate from 'vuejs-paginate'
import Skeleton from 'vue-loading-skeleton';

Vue.component('paginate', Paginate)
Vue.use(Notifications)
Vue.use(require('vue-moment'))
Vue.use(Skeleton)

