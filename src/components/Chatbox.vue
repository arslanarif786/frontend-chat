<script setup>
import UserInfo from './chatbox/UserInfo.vue'
import ChatSection from './chatbox/ChatSection.vue'
import TypeChatBox from './chatbox/Box.vue'
</script>

<template>
  <div class="t-w-[45%] custom-width t-text-black ">
    <!-- chat user info -->
    <UserInfo />

    <!-- Chat Section -->
    <ChatSection />
    
    <!-- chat box -->
    <TypeChatBox />
  </div>
</template>

<style scoped>
.custom-shadow {
    box-shadow: 0 10px 15px -50px rgb(0 0 0 / 0.1), 0 0px 25px 4px rgb(0 0 0 / 0.1);
}
@media screen and (max-width: 900px) and (min-width: 600px) {
    .custom-width {
        width: 60%;
    }
}
@media screen and (max-width: 700px) {
    .custom-width {
        width: 100%;
    }
}
</style>
