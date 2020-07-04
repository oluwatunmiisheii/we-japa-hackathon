<template>
  <section class="login bg-white">
    <div
      class="bg-primary position-absolute h-100 top-0 left-0 zindex-100 col-lg-6 col-xl-6 zindex-100 d-none d-lg-flex flex-column justify-content-end"
    >
      <img
        src="https://preview.webpixels.io/quick-website-ui-kit/assets/img/theme/light/img-v-2.jpg"
        alt="Image"
        class="img-as-bg"
      />
      <div class="row position-relative zindex-110 p-5 we-japa__caption">
        <div class="col-md-9 text-center mx-auto">
          <h3
            class="h3 text-white mb-3"
          >Get Connected to jobs across Africa, Europe and North America</h3>
          <p
            class="text-white opacity-8"
          >WeJapa helps techies gain access to tech jobs across Africa, Europe and North America.</p>
        </div>
      </div>
    </div>
    <div class="container-fluid d-flex flex-column">
      <div class="row align-items-center justify-content-center justify-content-lg-end min-vh-100">
        <div class="col-sm-7 col-lg-6 col-xl-6 py-5 py-md-0">
          <div class="row justify-content-center">
            <div class="col-11 col-lg-10 col-xl-6">
              <div class="mb-4 pb-4">
                <Logo />
              </div>
              <div>
                <div class="mb-5">
                  <h6 class="h3 mb-1">Reset Password</h6>
                  <p
                    class="text-muted mb-0"
                  >We will send you an email that will allow you to reset your password..</p>
                </div>
                <span class="clearfix"></span>
                <form @submit.prevent="checkFormErrors">
                  <!-- email address field -->
                  <div class="form-group">
                    <label class="form-control-label">Email address</label>
                    <div class="input-group input-group-merge">
                      <input
                        @Change="resetValidation('Email')"
                        data-vv-scope="resetPassword"
                        name="Email"
                        v-validate="'required|email'"
                        v-model="user.email"
                        type="email"
                        class="form-control form-control-prepend pl-2"
                        id="input-email"
                        placeholder="name@example.com"
                      />
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-at-sign"
                          >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <template v-if="errors.first('resetPassword.Email')">
                      <small
                        v-for="(error, i) in errors.collect('resetPassword.Email')"
                        class="error"
                        :key="i"
                      >
                        <em class="fas fa-info-circle pdt-1x"></em>
                        {{ error }}
                      </small>
                    </template>
                  </div>

                  <div class="mt-4">
                    <div class="mb-2 text-left">
                      <nuxt-link
                        :to="({path: '/'})"
                        href="#"
                        class="small text-muted text-underline--dashed"
                      >Back to Login</nuxt-link>
                    </div>
                    <button
                      type="submit"
                      :disabled="isProcessing"
                      class="btn btn-block btn-primary"
                    >
                      <span
                        class="spinner-border spinner-border-sm"
                        v-show="isProcessing"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span v-show="!isProcessing">Reset Password</span>
                    </button>
                  </div>
                </form>
                <div class="mt-4 text-center">
                  <small>Dont have an account?</small>
                  <a href="#" class="small font-weight-bold">Create account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  components: {
    Logo
  },
  methods: {
    resetValidation(key) {
      let matcher = {
        scope: 'resetPassword',
        name: key
      }
      this.$validator.reset(matcher);
    },
    checkFormErrors() {
      this.$validator.validate('resetPassword.*').then(valid => {
        if (valid) {
          this.login()
        }
      })
    },
    async login() {
      this.isProcessing = true
      console.log(this.user);

      await this.$store.dispatch('auth/resetPassword', this.user).then(res => {
        console.log('res>>>', res);

        // this.isProcessing = false
        // this.$notify({
        //   group: 'foo',
        //   type: 'success',
        //   title: 'Login Successful',
        //   text: `${res.message}`
        // })
        // setTimeout(() => {
        //   this.$router.push({path: '/dashboard'})
        // }, 500)
      }).catch(error => {
        this.isProcessing = false
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Login Failed',
          text: `${error.message}`
        })
      })
    }
  },
  data() {
    return {
      type: 'password',
      isProcessing: false,
      user: {}
    }
  }
}
</script>

<style scoped>
.login .img-as-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  -o-object-fit: cover;
  object-fit: cover;
}

.zindex-100 {
  z-index: 100 !important;
}

.left-0 {
  left: 0 !important;
}

.top-0 {
  top: 0 !important;
}

.input-group.input-group-merge .form-control-prepend + .input-group-prepend {
  order: -1;
  margin-right: -1px;
}

.form-control-label {
  color: #718096;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: none;
}

.input-group.input-group-merge .form-control-prepend {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 0;
  padding-left: 0;
}

.input-group.input-group-merge .form-control,
.form-control {
  box-shadow: none;
}

.input-group.input-group-merge
  .form-control-prepend
  + .input-group-prepend
  > .input-group-text {
  border-right: 0;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.input-group.input-group-merge .input-group-text {
  color: #a0aec0;
  background-color: #fff;
  border: 1px solid #e2e8f0;
}

.input-group > .form-control:focus {
  z-index: 3;
}

.input-group > .custom-file,
.input-group > .custom-select,
.input-group > .form-control,
.input-group > .form-control-plaintext {
  position: relative;
  flex: 1 1 0%;
  min-width: 0;
  margin-bottom: 0;
}

.input-group.input-group-merge
  .form-control:focus
  + .input-group-prepend
  .input-group-text {
  border-color: rgba(0, 138, 255, 0.5);
}

.feather {
  width: 1em;
  height: 1em;
  fill: none;
  stroke: currentcolor;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.we-japa__caption {
  background-image: url("http://demo.crenettechlabs.com/ovp/assets/img/gradient.png");
}
</style>
