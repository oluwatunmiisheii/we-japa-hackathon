
export const state = () => ({
  token: null,
  isAuthenticated: false
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  },
  setAuthenticationState(state, status) {
    state.isAuthenticated = status;
  }
};

export const actions = {
  async loginUser({ commit }, data) {
    let url = 'developer/login'
    try {
      const response = await this.$axios.$post(url, data);
      const { email, name, phone, experienceLevel, resume, github } = response.data.developer
      const { token } = response.data
      const userObj = {
        name: name,
        email: email,
        phone: phone,
        experience: experienceLevel,
        git: github,
        resume: resume
      }
      localStorage.setItem("developerToken", token);
      localStorage.setItem("authUser", JSON.stringify(userObj));
      this.$axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      commit("setAuthenticationState", true);
      commit("setToken", token);
      return response
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
  async resetPassword({ commit }, data) {
    let url = '/resetpasswordrequest'
    try {
      const response = await this.$axios.$get(url, data);
      console.log('response >>>', response);
      return response
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
  checkAuthStatus({ commit }) {
    let token;
    if (process.client) {
      token = localStorage.getItem("developerToken");
      if (token) {
        commit("setToken", token);
        commit('setAuthenticationState', true)
        this.$axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    }
  }
};

export const getters = {
  getToken() {
    return state.token;
  }
};
