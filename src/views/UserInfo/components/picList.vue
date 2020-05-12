<template>
  <div class="">
    <el-card class="box-card" shadow="none">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
      </div>
      
      <div>
        <el-row :gutter="20">
          <el-col 
            v-for="(item, index) in srcList" 
            :key="index" 
            :xs="24"
            :sm="8"
            :md="6"
            :lg="4">
            <el-card :body-style="{ padding: '0px' }">
              <el-image 
                :src="item"
                :style="{backgroundImage: `url(${item})`}"
                :preview-src-list="srcList"></el-image>
              <div class="card-foot">
                <div>
                  <span>好吃的汉堡</span>
                  <span class="author-name">dapan</span>
                </div>
                <div class="bottom clearfix">
                  <span class="time">{{ currentDate }}</span>
                  <!-- <span class="collect"
                    @click="cancelCollect">
                    <svg-icon className="collect"></svg-icon>
                  </span> -->
                  <el-button type="text"
                    @click="cancelCollect">删除</el-button>
                </div>
              </div>
              <slot name="card-foot"></slot>
            </el-card>
          </el-col>
        </el-row>

        <pagination :paginationParams.sync="paginationParams"
          @init-data="initData"></pagination>
      </div>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
import Pagination from '@/components/Pagination'
export default {
  data() {
    return {
      form: {
        name: 'dapan',
        phone: ''
      },
      currentDate: new Date().getFullYear(),
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      ],
      paginationParams: {
        total: 100,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  props: {
    title: {}
  },
  components: {
    Pagination
  },
  methods: {
    cancelCollect() {
      console.log('cancel success')
    },
    initData(params) {
      console.log(params)
    }
  }
}
</script>

<style scoped lang="scss">
  .el-card {
    margin-top: 10px;
    ::v-deep .el-card__header {
      padding: 10px 20px;
      text-align: left;
    }
    ::v-deep .el-card__body {
      .el-image {
        width: 100%;
        height: 200px;
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        img.el-image__inner {
          opacity: 0;
        }
      }
    }
    .card-foot {
      border-top: 1px solid #efefef;
      padding: 10px;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .time, .author-name {
        font-size: 13px;
        color: #666;
      }
      .collect {
        color: #d81e06;
        cursor: pointer;
      }
    }
  }
  
</style>
