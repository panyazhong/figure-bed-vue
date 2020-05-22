<template>
  <div class="">
    <nav-bar></nav-bar>

    <user-login></user-login>

    <app-main></app-main>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from './components/navBar'
import appMain from './components/appMain'
import userLogin from './components/userLogin'
import {getToken} from '@/utils/cookie'
import { mapMutations } from 'vuex'
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
  },
  mounted() {
    if (getToken()) {
      const start_time = Date.now()
      console.log(start_time)
      this.setStartTime(start_time)
    }
  },
  methods: {
    ...mapMutations({
      setStartTime: 'SET_START_TIME'
    })
  }
}
</script>

<style scoped lang="scss">
</style>