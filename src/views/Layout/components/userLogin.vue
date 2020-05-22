<template>
  <div class="">
    <el-dialog
      :title="view === 'login' ? '登陆' : '注册'"
      :before-close="handleClose"
      :visible.sync="loginDialog"
      width="30%"
      center>
      <transition name="fade" mode="out-in">
        <component v-bind:is="view" 
          :view.sync="view"></component> 
      </transition>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import loginForm from './loginForm'
import registerForm from './registerForm'
import {mapGetters, mapMutations} from 'vuex'
export default {
  data() {
    return {
      view: "login",
    }
  },
  computed: {
    ...mapGetters([
      'loginDialog'
    ])
  },
  components: {
    "login": loginForm,
    "register": registerForm,
  },
  methods: {
    handleClose() {
      this.setLoginDialog(false)
    },
    ...mapMutations({
      'setLoginDialog': 'SET_LOGINDIALOG'
    })
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/index.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@keyframes aroundss {
  0% {
    transform: rotateY(0deg);
    opacity: 1;
  }
  50% {
    transform: rotateY(180deg);
    opacity: 0.7;
  }
  100% {
    transform: rotateY(360deg);
    opacity: 0.2;
  }
}
</style>
