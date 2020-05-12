<template>
  <div class="">
    <el-form 
      size="mini"
      v-model="form"
      label-width="0">
      <el-form-item label="">
        <el-input v-model="form.user_name"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="form.password" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" 
          size="mini"
          @click="clickLogin">登 陆</el-button>
      </el-form-item>
    </el-form>
    <div class="tip">
      <p><span>忘记密码»</span></p>
      <p>还没有花瓣帐号？<span @click="chooseReg">点击注册»</span></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      form: {}
    }
  },
  props: {
    view: {}
  },
  methods: {
    chooseReg() {
      this.$emit("update:view", "register")
    },
    /**
     * 点击登陆
     */
    clickLogin() {
      this.$store.dispatch('Login', this.form)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../mixin.scss";
</style>
