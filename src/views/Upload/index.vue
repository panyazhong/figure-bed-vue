<template>
  <div class="upload">
    <el-card shadow="none">
      <div slot="header">
        dapan
      </div>
      <div class="upload-content">
        <div>
          <p>点击添加图片</p>
          <i class="el-icon-plus" @click="uploadVisible = true"></i>
        </div> 
      </div>
    </el-card>

    <upload-dialog :uploadVisible.sync="uploadVisible"></upload-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import uploadDialog from './components/uploadDialog'
export default {
  data() {
    return {
      uploadVisible: false
    }
  },
  components: {
    uploadDialog
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import "../../styles/index.scss";
.upload {
  height: calc(100vh - 80px);
  width: calc(100vw - 80px);
  margin: 0 auto;
  margin-top: $navbarHeight;
  background: $white;
  box-sizing: border-box;
  padding: 20px;
  .upload-content {
    display: flex;
  }
  i {
    width: 150px;
    height: 100px;
    border: 1px dotted #ccc;
    line-height: 100px;
    border-radius: 5px;
    color: #ccc;
    font-size: 20px;
    cursor: pointer;
    background: #f9f9f9;
  }
  i:hover {
    background: #fff;
    color: #666;
  }
}
</style>
