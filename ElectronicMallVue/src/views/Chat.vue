<template>
  <div class="dialog-container">
    <el-button type="primary" @click="toggleDialog" style="font-size: 22px">
      <i class="iconfont icon-r-user3" style="font-size: 26px"></i> 
      虚拟导购
    </el-button>
    <div v-if="showDialog" class="dialog">
      <div class="dialog-header">
        <h2>虚拟导购</h2>
        <!-- <button class="close-button" @click="closeDialog">×</button> -->
        <el-button type="danger" @click="closeDialog" class="close-button">
          X
        </el-button>
      </div>
      <div class="dialog-body" ref="dialogBody">
        <div v-for="(message, index) in dialogText" :key="index" class="message" :class="{ 'user-message': message.fromUser, 'robot-message': !message.fromUser }">
            <img v-if="message.fromUser" src="../resource/img/user.jpg" alt="User Avatar" class="avatar" />
            <img v-else src="../resource/img/robot.jpg" alt="Robot Avatar" class="avatar" />
            <div>{{ message.text }}</div>
        </div>
      </div>
      <div class="dialog-footer">
        <input v-model="userInput" @keyup.enter="sendMessageOnEnter" type="text" placeholder="输入消息..." />
        <el-button type="primary" @click="sendMessage" class="send-button">
          发送
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from './EventBus';
export default {
  data() {
    return {
      showDialog: false,
      dialogText: [],
      userInput: ""
    };
  },
  methods: {
    toggleDialog() {
      this.showDialog = !this.showDialog;
      this.$emit('open-new-dialog');
    },
    closeDialog() {
      this.showDialog = false;
      this.dialogText = [],
      this.userInput = ""
    },
    sendMessage() {
      if (this.userInput.trim() !== "") {
        this.dialogText.push({ text: this.userInput, fromUser: true });
        // 调用机器人API发送用户输入并获取回复
        fetch("http://localhost:9193/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ userMsg: this.userInput })
        })
          .then(response => response.json())
          .then(data => {
            this.dialogText.push({ text: data.aiMsg, fromUser: false });
            this.$nextTick(() => {
              this.$refs.dialogBody.scrollTo(0, this.$refs.dialogBody.scrollHeight);
            });
          })
          .catch(error => {
            console.error("Error:", error);
          });
        this.userInput = "";
      }
    },
    sendMessageOnEnter() {
      if (this.userInput.trim() !== "") {
        this.sendMessage();
      }
    }
  },
  created(){
    eventBus.$on('sendMessageToChat', message => {
      this.dialogText.push({text: message, fromUser: false});
    })
    this.userInput = "";
  }
};
</script>

<style>
.dialog-container {
  position: relative;
}

.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-height: 80vh;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f5f5f5;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.close-button {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 15px;
  border: none;
  cursor: pointer;
}

.dialog-body {
  padding: 10px;
  display: flex;
  flex-direction: column;
  max-height: 60vh;
  overflow-y: auto;
}


.message {
  display: flex;
  align-items: first baseline;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 3%;
  word-wrap: break-word;  
}

.user-message {
  background-color: #eaf6ff;
}

.robot-message {
  background-color: #f5f5f5;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 8px;
  margin-bottom: 20px;
}

.dialog-footer {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

input[type="text"] {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.send-button {
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;
}
</style>
