export default function (context) {
  let isAuthenticated = context.store.state.auth.isAuthenticated

  if (!isAuthenticated) {
    localStorage.clear()
    context.redirect('/')
  }
}
