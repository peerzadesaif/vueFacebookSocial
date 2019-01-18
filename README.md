# vue-facebook-signin-button

> A simple Facebook Social

## Install

This plugin can be installed as a module
``` bash
$ npm install vueFacebookSocial
```
## Usage

> Important: The Facebook SDK Like Below:
```js
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.2'
    });
  };
  (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
```

``` 
import FacebookButton from 'vueFacebookSocial'
Vue.use(FacebookButton)
```

Step 2: Now you have a `FacebookButton` global component, ready for use.
``` html
<template>
  <FacebookButton
    :params="facebookParams"
    @success="onSuccess"
    @error="onError">
    Sign in with Facebook
  </FacebookButton>
</template>

<script>
export default {
  data () {
    return {
      facebookParams: {
        scope: 'email',
        return_scopes: true
      }
    }
  },
  methods: {
    onSuccess (response) {
      FB.api('/me', data => {
        console.log(`Here is Facebook response`,data)
      })
    },
    onError (error) {
      console.log('Catch Error ', error)
    }
  }
}
</script>

```

That's it!

## License

MIT © [Saif](saif.pirjade@gmail.com)
