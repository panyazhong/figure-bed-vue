<template>
  <div class="find">
    <el-row>
    </el-row>

    <vue-waterfall-easy 
      ref="waterfall" 
      :imgsArr="imgsArr" 
      @scrollReachBottom="getData"
      linkRange="img">
      <template slot-scope="scope">
        <div class="card-foot">
          <!-- <el-image 
            :style="{height: 'scope.value._height'}"
            :src="scope.value.pic_url" 
            :preview-src-list="srcList">
          </el-image> -->
          <div class="div-desc">
            <span class="img-desc">{{scope.value.name.split('.')[0]}}</span>
          </div>
          <div class="bottom clearfix">
            <el-avatar size="medium" :src="scope.value.pic_url"></el-avatar>
            <div> 
              <span class="author-name">{{scope.value.author.user_name}}</span>采集到 <br/>
              <span class="time">{{scope.value.type.type_name}}</span>
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
import { getFindListAPI, report } from '@/api/find'
export default {
  data() {
    return {
      group: 0,
      imgsArr: [
        // {
        //   author: {_id: "5e8c2b8876c04832effb422a", user_name: "admin"},
        //   user_name: "admin",
        //   _id: "5e8c2b8876c04832effb422a",
        //   createdAt: "2020-05-18T07:37:24.901Z",
        //   name: "image_195.jpg",
        //   pic_url: "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        //   src: "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        //   href: "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        //   type: {_id: "5e94048bed05451eaffb039d", type_name: "生活"},
        //   updatedAt: "2020-05-18T07:37:24.901Z",
        //   __v: 0,
        //   _id: "5ec23b348059542a5cfdcd64",
        // },{
        //   author: {_id: "5e8c2b8876c04832effb422a", user_name: "admin"},
        //   user_name: "admin",
        //   _id: "5e8c2b8876c04832effb422a",
        //   createdAt: "2020-05-18T07:37:24.901Z",
        //   name: "image_195.jpg",
        //   pic_url: "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
        //   src: "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
        //   href: "",
        //   type: {_id: "5e94048bed05451eaffb039d", type_name: "生活"},
        //   updatedAt: "2020-05-18T07:37:24.901Z",
        //   __v: 0,
        //   _id: "5ec23b348059542a5cfdcd64",
        // }
      ],
      srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
    }
  },
  components: {
    vueWaterfallEasy
  },
  created() {
    this.getData()
  },
  mounted() {
    window.onbeforeunload = function (e) {
      e = e || window.event;
    
      // 兼容IE8和Firefox 4之前的版本
      if (e) {
        e.returnValue = '关闭提示';
      }
    
      // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
      return '关闭提示';
    }
    window.onunload = function(params) {
      let xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://localhost:3000/api/pic/report', true)
      xhr.setRequestHeader('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWU4YzJiODg3NmMwNDgzMmVmZmI0MjJhIiwiaWF0IjoxNTg5OTY0ODQ4LCJleHAiOjE1ODk5NzU2NDh9.wL9zUfaRQh4PfgeCWfDEEK7OwcQw40Y80QuTwbWGSak')
      xhr.onload = function (params) {
        console.log(params)
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
          } else {
            console.error(xhr.statusText);
          }
        }
      }
      xhr.send({
        name: 'before'
      })
    }
  },
  destroyed() {
    window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
  },
  methods: {
    /**
     * 获取已上传图片数据
     */
    async getData() {
      let params = this.initParams()
      try {
        const {data} = await getFindListAPI(params)
        if (data.length === 0) {
          this.$refs.waterfall.waterfallOver()
        }
        data.map(item => {
          item.src = item.pic_url
          item.href = item.pic_url
        })
        
        this.imgsArr = this.imgsArr.concat(data)
      } catch (error) {
        console.log(error)
      }
      
      this.group++
    },
    /**
     * 初始化请求参数
     */
    initParams() {
      const length = this.imgsArr.length
      const _id = length > 0 ? this.imgsArr[length - 1]._id : null
      let params = {
        _id: _id,
        limit: _id ? 15 : 30
      }

      return params
    },
    beforeunloadFn(e) {
      
      e = e || window.event;

      if (e) {
        e.returnValue = '关闭提示';
      }

      return 'before'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/index.scss";
  ::v-deep .img-wraper{
    // display: none !important;
  }
  .find {
    margin-top: $navbarHeight;
    height: calc(100vh - 60px);
    ::v-deep .img-inner-box {
      .card-foot {
        & > div {
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
        .el-image {
          padding: 0;
        }
        div.div-desc {
          border-bottom: 1px solid #ddd;
        }
        div.bottom {
          display: flex;
          align-items: center;
          padding: 5px 10px;
          .el-avatar {
            margin-right: 10px;
          }
        }
      }
    }
    ::v-deep .vue-waterfall-easy {
      .over {
        padding: 20px;
        font-size: 14px !important;
        color: #3e9bf9 !important;
      }
    }
  }
</style>
