<template>
  <div class="">
    <nav-bar></nav-bar>

    <user-login :loginDialog="loginDialog"></user-login>

    <app-main></app-main>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from './components/navBar'
import appMain from './components/appMain'
import userLogin from './components/userLogin'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {

    }
  },
  components: {
    navBar,
    appMain,
    userLogin
  },
  computed: {
    loginDialog() {
      return !this.token
    },
    ...mapGetters([
      'token'
    ])
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>