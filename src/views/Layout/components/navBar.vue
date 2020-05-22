<template>
  <div class="navbar-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="routerTo"
      background-color="rgba(47, 65, 85, .7)"
      text-color="#becbd8"
      active-text-color="#349dfb">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/find">发现</el-menu-item>

      <div class="user-info">
        <el-button type="text" v-if="!userInfo.user_name"
          @click="showLoginDialog">点击登录</el-button>
        <el-dropdown 
          trigger="click" 
          v-else>
          <span class="el-dropdown-link">
            欢迎：{{userInfo.user_name}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <p @click="routerTo('/personal')">
              <el-dropdown-item icon="el-icon-s-custom">
                <span>个人中心</span>
              </el-dropdown-item>
            </p>  
            <p @click="routerTo('/upload')">
              <el-dropdown-item icon="el-icon-upload">
                <span>上传图片</span>
              </el-dropdown-item>
            </p>  
            <p @click="logout">
              <el-dropdown-item icon="el-icon-s-release">logout</el-dropdown-item>
            </p>
            
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    activeIndex() {
      return this.$route.path
    },
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    routerTo(path) {
      this.$router.push(path)
    },
    /**
     * 点击注销
     */
    async logout() {
      try {
        await this.$confirm('确认退出当前账号？', '提示', {
          type: 'warning'
        })
      } catch (error) {
        
      }
      
    },
    /**
     * 点击打开登陆弹框
     */
    showLoginDialog() {
      this.$store.commit('SET_LOGINDIALOG', true)
    }
  }
}
</script>

<style scoped lang="scss">
  .navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    .el-menu-item {
      background-color: rgba(0, 0, 0, 0) !important;
      a {
        display: block;
        width: 100%;
      }
    }
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
  }
  .user-info {
    float: right;
    margin-right: 20px;
    line-height: 60px;
    cursor: pointer;
    outline: none;
    .el-dropdown-link {
      line-height: 60px;
      color: #fff;
    }
  }
</style>
