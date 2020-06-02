
export const state = () => ({
  jobs: null,
  job: {}
});

export const mutations = {
  setAllJobs(state, jobs) {
    state.jobs = jobs;
  },
  setSingleJob(state, job) {
    state.job = job;
  }
};

export const actions = {
  async allJobs({ commit }) {
    let url = 'job/all'
    try {
      const { data } = await this.$axios.$get(url);
      console.log(data);
      commit("setAllJobs", data);
      return data
    } catch (error) {
      if (error.response) {
        console.log(error);
        throw new Error(error.response.data.message);
      } else {
        throw new Error(
          "Unable to Login, please check your network and try again later"
        );
      }
    }
  },
  async getSingleJob({ commit }, jobId) {
    let url = `/job/${jobId}`;
    try {
      const { data } = await this.$axios.$get(url);
      console.log(data);

      commit('setSingleJob', data)
      return data
    } catch (error) {
      if (error.response) {
        console.log(error);
        throw new Error(error.response.data.message);
      } else {
        throw new Error(
          "Unable to Login, please check your network and try again later"
        );
      }
    }
  }
};

export const getters = {
  closedJobs: state => {
    if (state.jobs) {
      return state.jobs.jobs.filter(job => job.status === 'Closed')
    }
  },
  openJobs: state => {
    if (state.jobs) {
      return state.jobs.jobs.filter(job => job.status === 'Open')
    }
  },
  latestJobs: state => {
    if (state.jobs) {
      const sortedJobs = [...state.jobs.jobs]
      return sortedJobs.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
      })
    }
  }
};
