<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Inbox from '../components/Inbox.vue'
import Chatbox from '../components/Chatbox.vue'
import UserProfile from '../components/UserProfile.vue'
</script>

<template>
  <Header />
  <main class="t-absolute t-top-14 t-left-0 t-w-full t-flex t-h-[855px]">
    <Sidebar />
    <Inbox />
    <Chatbox/>
    <UserProfile />
  </main>
</template>
