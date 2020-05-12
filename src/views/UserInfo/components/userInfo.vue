<template>
  <div class="">
    <el-card class="box-card" shadow="none">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
      </div>
      
      <el-form ref="form" 
        :model="form" 
        size="mini"
        label-width="80px">
        <el-form-item label="用户名">
          <span>{{userInfo.nick_name}}</span>
        </el-form-item>
        <el-form-item label="手机号">
          <!-- <span>{{form.phone}}</span> -->
          <el-input v-model="form.phone"></el-input> 
          <el-button type="text">编辑</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      title: '个人信息',
      form: {
        name: '',
        phone: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  ::v-deep .el-card__header {
    padding: 10px 20px;
    text-align: left;
  }
  ::v-deep .el-card__body {
    .el-form-item__content {
      width: 200px;
      text-align: left;
      display: flex;
      span {
        margin-left: 15px;
        font-size: 12px;
      }
    }
  }
</style>
