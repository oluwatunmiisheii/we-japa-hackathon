
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
      console.log(response.data.developer);

      const { token, email, name } = response.data.developer;
      const userObj = {
        name: name,
        email: email
      }
      localStorage.setItem("developerToken", token);
      localStorage.setItem("authUser", JSON.stringify(userObj));
      commit("setAuthenticationState", true);
      commit("setToken", token);
      this.$axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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

  checkAuthStatus(vuexContext, req) {
    let token;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("gamify-token="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
      vuexContext.commit("setToken", token);
      this.$axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else if (process.client) {
      token = localStorage.getItem("gamify-token");
      vuexContext.commit("setToken", token);
      this.$axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }
};

export const getters = {
  getToken() {
    return state.token;
  }
};
