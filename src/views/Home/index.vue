<template>
  <div class="home">
    <div class="home-container">
      <el-row class="type-list">
        <el-input placeholder="请输入内容" size="mini" v-model="search" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      </el-row>
      <el-row class="type-list">
        <el-col v-for="(item, index) in list" :key="index" :span="6">
          <span>{{item.type_name}}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {getPicTypes} from "@/api/home"
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      list: [],
      search: '',
    }
  },
  mounted() {
    this.getPicTypes()
  },
  computed: {
  },
  methods: {
    async getPicTypes() {
      let picTypeResult = await getPicTypes()

      this.list = picTypeResult.data
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/index.scss";
  .home {
    margin-top: 0px;
    box-sizing: border-box;
    background: url("http://dapan-figure-bed.test.upcdn.net/image/2020-04-13/96d6f2e7e1f705ab5e59c84a6dc009b2.png") 0px 100%/100% no-repeat content-box;
    min-height: calc(100vh - 0px);
    .home-container {
      background: rgba(255, 255, 255, .7);
      width: 500px;
      padding: 30px;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 10px;
      box-shadow: 0 0 10px #555;
      .type-list{
        width: 100%;
        span {
          font-size: 13px;
          cursor: pointer;
        }
        span:hover {
          color: $blue;
          text-decoration: underline;
        }
      }
      .type-list:nth-of-type(2) {
        margin-top: 20px;
      }
    }
    

  }
</style>

