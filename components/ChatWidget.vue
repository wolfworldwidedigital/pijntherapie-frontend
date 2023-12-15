<template>
    <div class="chat-widget">
      <div class="chat-messages">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <div :class="{'user-message': !message.isBot, 'bot-message': message.isBot}">
            {{ message.text }}
          </div>
        </div>
      </div>
      <div class="chat-input">
        <input v-model="userMessage" @keyup.enter="sendMessage">
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useChatgpt } from 'nuxt-chatgpt';
  
  const { chatCompletion } = useChatgpt();
  const messages = ref([]);
  const userMessage = ref('');
  
  async function sendMessage() {
    if (userMessage.value.trim() === '') return;
    const userText = userMessage.value;
    userMessage.value = ''; // Clear input field
  
    // Add user message to the chat
    messages.value.push({ text: userText, isBot: false });
  
    // Get the bot response
    const response = await chatCompletion(userText);
    if (response) {
      messages.value.push({ text: response, isBot: true });
    }
  }
  </script>
  
  <style scoped>
  .chat-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border-radius: 10px;
    overflow: hidden;
  }
  
  .chat-messages {
    flex-grow: 1;
    overflow-y: auto;
  }
  
  .message {
    margin: 5px 0;
  }
  
  .user-message {
    text-align: right;
  }
  
  .bot-message {
    text-align: left;
  }
  
  .chat-input {
    display: flex;
  }
  
  .chat-input input {
    flex-grow: 1;
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .chat-input button {
    padding: 5px 10px;
    cursor: pointer;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
  }
  </style>
  