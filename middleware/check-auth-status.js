export default function (context) {
  context.store.dispatch('auth/checkAuthStatus')
  let token = context.store.getters['auth/getToken']

  // committing authentication as true if there is a token
  // if (token) {
  //   context.store.commit('auth/setAuthenticationState', true)
  // }
}
