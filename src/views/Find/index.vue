<template>
  <div class="find">
    <el-row>

    </el-row>

    <vue-waterfall-easy ref="waterfall" :imgsArr="imgsArr" @scrollReachBottom="getData">
      <template slot-scope="scope">
        <!-- <el-card :body-style="{ padding: '0px' }"> -->
          <div class="card-foot">
            <div class="div-desc">
              <span class="img-desc">{{scope.value.name}}你大号打打杀杀爱爱时胶带机哦你按键</span>
            </div>
            <div class="bottom clearfix">
              <el-avatar size="medium" :src="scope.value.href"></el-avatar>
              <div> 
                <span class="author-name">{{scope.value.author_name}}</span>采集到 <br/>
                <span class="time">{{scope.value.img_type}}</span>
              </div> 
            </div>
          </div>
        <!-- </el-card> -->
      </template>
      
      <div slot="waterfall-over">没有更多图片啦...</div>
    </vue-waterfall-easy>
  </div>
</template>

<script type="text/ecmascript-6">
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
  data() {
    return {
      group: 0,
      imgsArr: [
        {
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },
      ]
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData() {
      if (this.group >= 1) {
        this.$refs.waterfall.waterfallOver()
        return
      }
      setTimeout(() => {
        this.imgsArr = this.imgsArr.concat([
        {
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          href: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          href: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        },{
          src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          href: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: 'hambuger',
          author_name: 'dapan',
          img_type: '风景'
        }])
      }, 3000);
      this.group++
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/index.scss";
  .find {
    margin-top: $navbarHeight;
    height: calc(100vh - 60px);
    ::v-deep .img-inner-box {
      .card-foot {
        div {
          padding: 10px 10px 10px 10px;
          text-align: left;
          color: #666;
          font-size: 13px;
          .img-desc {
            color: #333;
          }
          .author-name, .time {
            color: $blue;
            margin-right: 5px;
          }
        }
        div.div-desc {
          border-bottom: 1px solid #ddd;
        }
        div:nth-of-type(2) {
          display: flex;
          align-items: center;
          padding: 5px 10px;
        }
      }
    }
    ::v-deep .vue-waterfall-easy {
      .over {
        padding: 20px;
        font-size: 14px !important;
        color: #666 !important;
      }
    }
  }
</style>
