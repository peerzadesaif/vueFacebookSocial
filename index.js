(function () {
  function install(Vue) {
    Vue.component('facebookButton', {
      name: 'facebookButton',
      render(createElement) {
        return createElement('button', {
          attrs: {
            class: 'btn btn-lg facebook-btn mb-3'
          },
          ref: 'signinBtn'

        }, this.$slots.default)
      },
      props: {
        params: {
          type: Object,
          required: true,
          default() {
            return {}
          }
        }
      },
      mounted() {
        this.$refs.signinBtn.addEventListener('click', e => {
          window.FB.login(response => {
            this.$emit(response.authResponse ? 'success' : 'error', response)
          }, this.params)
        })
      }
    })
  }

  if (typeof exports === 'object') {
    module.exports = install
  } else if (typeof define === 'function' && define.amd) {
    /*global define*/
    define([], function () { return install })
  } else if (window.Vue) {
    window.Vue.use(install)
  }
})()
