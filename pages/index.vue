<template>
  <section class="login bg-white">
    <div class="bg-primary position-absolute h-100 top-0 left-0 zindex-100 col-lg-6 col-xl-6 zindex-100 d-none d-lg-flex flex-column justify-content-end">
      <img
        src="https://preview.webpixels.io/quick-website-ui-kit/assets/img/theme/light/img-v-2.jpg" alt="Image"
        class="img-as-bg"
      >
      <div class="row position-relative zindex-110 p-5 we-japa__caption">
        <div class="col-md-9 text-center mx-auto">
          <h3 class="h3 text-white mb-3">Get Connected to jobs across Africa, Europe and North America</h3>
          <p class="text-white opacity-8">WeJapa helps techies gain access to tech jobs across Africa, Europe and North America.</p>
        </div>
      </div>
    </div>
    <div class="container-fluid d-flex flex-column">
      <div class="row align-items-center justify-content-center justify-content-lg-end min-vh-100">
        <div class="col-sm-7 col-lg-6 col-xl-6 py-5 py-md-0">
          <div class="row justify-content-center">
            <div class="col-11 col-lg-10 col-xl-6">
              <div class="mb-4 pb-4">
               <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1588148135977/8eNJhZgBv.png" height="40" alt="weJapa logo">
              </div>
              <div>
                <div class="mb-5">
                  <h6 class="h3 mb-1">Welcome back!</h6>
                  <p class="text-muted mb-0">Sign in to your account to continue.</p>
                </div>
                <span class="clearfix"></span>
                <form @submit.prevent="checkFormErrors">
                  <!-- email address field -->
                  <div class="form-group">
                    <label class="form-control-label">Email address</label>
                    <div class="input-group input-group-merge">
                      <input 
                        @Change="resetValidation('Email')" 
                        data-vv-scope="signIn"
                        name="Email"
                        v-validate="'required|email'"
                        v-model="user.email" 
                        type="email" 
                        class="form-control form-control-prepend" 
                        id="input-email" 
                        placeholder="name@example.com">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="1em" 
                            height="1em" 
                            viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"
                            class="feather feather-user"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <template v-if="errors.first('signIn.Email')">
                      <small
                        v-for="(error, i) in errors.collect('signIn.Email')"
                        class="error"
                        :key="i"
                      ><em class="fas fa-info-circle pdt-1x"></em> {{ error }}
                      </small>
                    </template>
                  </div>

                  <!-- password field -->
                  <div class="form-group mb-0">
                    <div class="d-flex align-items-center justify-content-between">
                      <div><label class="form-control-label">Password</label></div>
                      <div class="mb-2"><a href="#" class="small text-muted text-underline--dashed">
                        <span v-show="type === 'password'" @click="type = 'text'">Show password</span>
                        <span v-show="type !== 'password'" @click="type = 'password'">Hide password</span>
                      </a></div>
                    </div>
                    <div class="input-group input-group-merge">
                      <input 
                        @change="resetValidation('Password')" 
                        data-vv-scope="signIn"
                        name="Password"
                        v-validate="'required|min:6'"
                        v-model="user.password" 
                        :type="type" 
                        class="form-control form-control-prepend" 
                        id="input-password" 
                        placeholder="Password"
                      >
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
                            class="feather feather-key"
                          >
                            <path
                              d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4">
                            </path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <template v-if="errors.first('signIn.Password')">
                      <small
                        class="error"
                        v-for="(error, i) in errors.collect('signIn.Password')"
                        :key="i"
                      >
                        <em class="fas fa-info-circle pdt-1x"></em>
                        {{ error }}
                      </small>
                    </template>
                  </div>
                  <div class="mt-4">
                    <div class="mb-2 text-left">
                      <nuxt-link :to="({path: '/auth/reset-password'})" href="#" class="small text-muted text-underline--dashed">Forgot Password?</nuxt-link>
                    </div>
                    <button type="submit" :disabled="isProcessing" class="btn btn-block btn-primary">
                      <span class="spinner-border spinner-border-sm" v-show="isProcessing" role="status" aria-hidden="true"></span>
                      <span v-show="!isProcessing">Sign in</span>
                    </button>
                  </div>
                </form>
                <div class="d-none d-md-block">
                  <div class="py-3 text-center fs-12"><span class="text-xs text-uppercase text-muted">or</span></div>
                  <div class="d-flex justify-content-between">
                    <AndroidDownload />
                    <IosDownload />
                  </div>
                </div>
                <div class="mt-4">
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
import AndroidDownload from '@/components/androidDownload'
import IosDownload from '@/components/iosDownload'
export default {
  components: {
    Logo,
    AndroidDownload,
    IosDownload
  },
  methods: {
    	resetValidation(key) {
			let matcher = {
    	scope: 'signIn',
    	name: key
		}
			this.$validator.reset(matcher);
		},
		checkFormErrors() {
			this.$validator.validate('signIn.*').then(valid => {
				if(valid) {
					this.login()
				}
			})
		},
    async login() {
      this.isProcessing = true
      await this.$store.dispatch('auth/loginUser', this.user).then(res => {
        this.isProcessing = false
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'Login Successful',
          text: `${res.message}`
        })
        setTimeout(() => {
          this.$router.replace({path: '/dashboard'})
        }, 500)
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

  .input-group.input-group-merge .form-control-prepend+.input-group-prepend {
    order: -1;
    margin-right: -1px;
  }

  .form-control-label {
    color: #718096;
    font-size: .875rem;
    font-weight: 500;
    text-transform: none;
  }

  .input-group.input-group-merge .form-control-prepend {
    border-top-right-radius: .375rem;
    border-bottom-right-radius: .375rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
    padding-left: 0;
  }

  .input-group.input-group-merge .form-control,
  .form-control {
    box-shadow: none;
  }

  .input-group.input-group-merge .form-control-prepend+.input-group-prepend>.input-group-text {
    border-right: 0;
    border-top-left-radius: .375rem;
    border-bottom-left-radius: .375rem;
  }

  .input-group.input-group-merge .input-group-text {
    color: #a0aec0;
    background-color: #fff;
    border: 1px solid #e2e8f0;
  }

  .input-group>.form-control:focus {
    z-index: 3;
  }

  .input-group>.custom-file,
  .input-group>.custom-select,
  .input-group>.form-control,
  .input-group>.form-control-plaintext {
    position: relative;
    flex: 1 1 0%;
    min-width: 0;
    margin-bottom: 0;
  }

  .input-group.input-group-merge .form-control:focus+.input-group-prepend .input-group-text {
    border-color: rgba(0, 138, 255, .5);
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
    background-image: url('http://demo.crenettechlabs.com/ovp/assets/img/gradient.png')
  }

</style>
