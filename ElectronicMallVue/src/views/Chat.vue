<template>
  <div class="dialog-container">
    <button class="toggle-button" @click="toggleDialog">虚拟导购</button>
    <div v-if="showDialog" class="dialog">
      <div class="dialog-header">
        <h2>虚拟导购</h2>
        <button class="close-button" @click="closeDialog">×</button>
      </div>
      <div class="dialog-body">
        <div v-for="(message, index) in dialogText" :key="index" class="message" :class="{ 'user-message': message.fromUser, 'robot-message': !message.fromUser }">
          <img v-if="message.fromUser" src="../resource/img/user.jpg" alt="User Avatar" class="avatar" />
          <img v-else src="../resource/img/robot.jpg" alt="Robot Avatar" class="avatar" />
          {{ message.text }}
        </div>
      </div>
      <div class="dialog-footer">
        <input v-model="userInput" type="text" placeholder="输入消息..." />
        <button class="send-button" @click="sendMessage">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
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
    },
    closeDialog() {
      this.showDialog = false;
    },
    sendMessage() {
      if (this.userInput.trim() !== "") {
        this.dialogText.push({ text: this.userInput, fromUser: true });
        // 调用机器人API发送用户输入并获取回复
        fetch("http://your-robot-api-url.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ input: this.userInput })
        })
          .then(response => response.json())
          .then(data => {
            this.dialogText.push({ text: data.output, fromUser: false });
          })
          .catch(error => {
            console.error("Error:", error);
          });
        this.userInput = "";
        // 模拟机器人回复
        setTimeout(() => {
          const reply = "这是机器人的回复这是机器人的回复这是机器人的回复这是机器人的回复这是机器人的回复这是机器人的回复这是机器人的回复";
          this.dialogText.push({ text: reply, fromUser: false });
        }, 1000);
      }
    }
  }
};
</script>

<style>
.dialog-container {
  position: relative;
}

.toggle-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  overflow-y: auto;
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
  padding: 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.dialog-body {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.message {
  display: flex;
  align-items: flex-start;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
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
  margin-right: 8px;
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
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
