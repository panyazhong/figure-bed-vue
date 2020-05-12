<template>
  <div class="container">
    <user-info></user-info>

    <pic-list title="我的收藏">
    </pic-list>
    
    <pic-list title="我的图库 "></pic-list>
  </div>
</template>

<script type="text/ecmascript-6">
import userInfo from './components/userInfo'
import picList from './components/picList'
export default {
  data() {
    return {

    }
  },
  components: {
    picList,
    userInfo
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/index.scss";
  .container {
    margin: $navbarHeight auto;
    margin-bottom: 0px;
    width: calc(100% - 40px);
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
  }
</style>
