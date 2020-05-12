<template>
  <div class="">
    <el-form 
      size="mini"
      v-model="form"
      label-width="0">
      <el-form-item label="">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="form.name" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" 
          size="mini"
          @click="clickRegister">注 册</el-button>
      </el-form-item>
    </el-form>
    <div class="tip">
      <p><span></span></p>
      <p>已有账号，<span @click="chooseLogin">点击登陆»</span></p>
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
    chooseLogin() {
      this.$emit("update:view", "login")
    },
    /**
     * 点击注册
     */
    clickRegister() {
      this.$store.dispatch("Login")
    }
  }
}
</script>

<style scoped lang="scss">
@import "../mixin.scss";
</style>
