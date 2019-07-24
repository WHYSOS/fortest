<template>
    <div>
      <el-upload
        list-type="picture-card"
        :action= uploadUrl
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <div>
        <el-input v-model="filePath"></el-input>
        <el-button @click="download">下载</el-button>
        <div><img :src="verifyCodeUrl" @click="getVerifyCode"/></div>
      </div>
    </div>
</template>

<script>
  import {downloadRequest, getRequest} from '@/utils/api'

export default {
  name: 'index',
  data () {
    return {
      imageUrl: '',
      uploadUrl: '',
      filePath: '',
      verifyCodeUrl:''
    }
  },
  mounted () {
    this.uploadUrl = process.env.UPLOAD_API
    this.verifyCodeUrl = process.env.BASE_API+"/login/getVerifyCode"
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    download () {
      console.log(this.filePath)
      getRequest("/file/downloadFile?filePath=", this.filePath).then(function (res) {

      },
      function (msg) {
        //this.$message.error('服务器发生错误!');
      })
    },
    getVerifyCode(){
      let random = Math.ceil(Math.random()*10);
      this.verifyCodeUrl = process.env.BASE_API+"/login/getVerifyCode?"+random
    }
  }
}
</script>

<style scoped>

</style>
