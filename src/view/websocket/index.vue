<template>
  <div>
    <el-card class="box-card" style="width: 50%">
      <div v-for="item in returnMsg" :key="item" >
        {{item}}
      </div>
    </el-card>
    <div style="margin-top: 20px">
      <el-input v-model="sendMsg" placeholder="请输入内容" style="width: 30%"></el-input>
      <el-button @click="send()">发送</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data(){
      return{
        socket:null,
        result:'',
        path:'ws://localhost:8000/websocket',
        sendMsg:'',
        returnMsg:[]
      }
    },
    mounted () {

      this.initWebSocket()
    },
    methods:{
      initWebSocket(){
        this.$message.success("初始化")
        if(typeof(WebSocket) === "undefined"){
          this.$message.error("您的浏览器不支持socket")
        }else{
          // 实例化socket
          this.socket = new WebSocket(this.path)

            // 监听socket连接
            this.socket.onopen = this.open
          // 监听socket错误信息
          this.socket.onerror = this.error
          // 监听socket消息
          this.socket.onmessage = this.getMessage
        }
      },
      open() {
        console.log("socket连接成功")
      },
      error() {
        console.log("连接错误")
      },
      login(){
        let message = {
          type: "login",
          userId: "222",
          msg:this.sendMsg
        }
        this.socket.send(JSON.stringify(message));
      },
      getMessage(msg) {
        this.returnMsg.push(msg.data)
        console.log(msg.data)
      },
      send(){
        let message = {
          type: "sendOther",
          userId: "222",
          msg:this.sendMsg,
          receiverId:"111"
        }
        this.socket.send(JSON.stringify(message))
      },
      close (){
        console.log("socket已经关闭")
      }
    },
    destroyed () {
      // 销毁监听
      this.socket.onclose = this.close
    }
  }
</script>

<style scoped>

</style>
