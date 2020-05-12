<template>
  <div class="">
    <el-dialog
      :visible.sync="uploadVisible"
      :before-close="handleClose"
      width="500px"
      title="图片上传">
      <el-select 
        v-model="type" 
        v-if="fileList.length > 0"
        size="mini"
        placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item._id"
          :label="item.type_name"
          :value="item._id">
        </el-option>
      </el-select>
      <el-upload
        class="upload-demo"
        drag
        :file-list="fileList"
        action="https://jsonplaceholder.typicode.com/posts/"
        :http-request="uploadFile"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import {uploadFile} from '@/api/upload'
import {getPicTypes} from '@/api/home'
export default {
  data() {
    return {
      type: '',
      options: [],
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
    }
  },
  props: {
    uploadVisible: {}
  },
  watch: {
    uploadVisible(val) {
      if (val) {
        this.getPicType()
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:uploadVisible', false)
    },
    async uploadFile(file) {
      let fd = new FormData()
      fd.append('name', file.file.name)
      fd.append('file', file.file)

      const uploadResult = await uploadFile(fd)

      console.log(uploadResult)
    },
    async getPicType() {
      let picTypeResult = await getPicTypes()

      this.options = picTypeResult.data
    }
  }
}
</script>

<style scoped lang="scss">
  .el-select {
    width: 360px;
    margin-bottom: 10px;
  }
</style>
