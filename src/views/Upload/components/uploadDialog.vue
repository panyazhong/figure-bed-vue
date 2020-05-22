<template>
  <div class="">
    <el-dialog :visible.sync="uploadVisible" :before-close="handleClose" width="500px" title="图片上传">
      <el-select v-model="type" size="mini" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item._id"
          :label="item.type_name"
          :value="item._id"
        ></el-option>
      </el-select>
      <el-upload
        class="upload-demo"
        ref="upload"
        drag
        :file-list="fileList"
        action=""
        :auto-upload="false"
        list-type="picture"
        :http-request="uploadFile"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或
          <em>点击选择图片</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button 
        type="primary" 
        size="mini"
        @click="confirmToUpload">确认上传</el-button>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import { uploadFile } from "@/api/upload";
import { getPicTypes } from "@/api/home";
export default {
  data() {
    return {
      type: "",
      options: [],
      fileList: []
    };
  },
  props: {
    uploadVisible: {}
  },
  watch: {
    uploadVisible(val) {
      if (val) {
        this.getPicType();
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:uploadVisible", false);
    },
    async uploadFile(file) {
      if (!this.type) {
        this.$message({
          message: '请选择图片类型',
          type: 'warning'
        })
        return
      }

      let fd = new FormData();
      fd.append("name", file.file.name);
      fd.append("file", file.file);
      fd.append("type", this.type);

      try {
        const uploadResult = await uploadFile(fd);

        this.$refs.upload.clearFiles()
      } catch (error) {
        
      }
      
    },
    confirmToUpload() {
      this.$refs.upload.submit()
    },
    async getPicType() {
      let picTypeResult = await getPicTypes();

      this.options = picTypeResult.data;
    }
  }
};
</script>

<style scoped lang="scss">
.el-select {
  width: 360px;
  margin-bottom: 10px;
}
::v-deep .el-upload-list--picture {
  width: 360px !important;
  margin: 0 auto
}
.el-button {
  margin-top: 10px;
}
</style>
