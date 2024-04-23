<script setup>
import { ref } from 'vue';
import { DotsVerticalIcon } from 'vue-tabler-icons'
import SearchField from './Search.vue'
import ChatSection from './inbox/ChatMessage.vue'
import QueuedSection from './inbox/QueuedMessage.vue'
const queued = ref([
    {
        id: 1,
        img: '../../public/queued1.svg',
        name: 'Emily Johnson',
        designation: '',
        sender: 'You: ',
        text: 'Hello Emily How are you',
        time: '8m: 20s',
        unread: 2,
        waitTime: ''
    },
    {
        id: 2,
        img: '../../public/queued2.svg',
        name: 'Sophie Okonedo',
        designation: 'UX Designer | Greenscape Solut...',
        sender: '',
        text: '',
        time: '10m: 25s',
        unread: '',
        waitTime: 'Wait Time'
    },
])

const allChats = ref([
    {
        id: 1,
        img: '../../public/chat1.svg',
        name: 'Quantum Pioneers',
        badge: '',
        designation: '',
        sender: 'You: ',
        text: 'Hello all session is started join...',
        time: '1h',
        unread: 2
    },
    {
        id: 2,
        img: '../../public/chat2.svg',
        name: 'Martin Randolph',
        badge: '',
        designation: 'UX Designer | Greenscape Solutions',
        sender: 'Draft: ',
        text: 'Hello Martin How are you...',
        time: '1h',
        unread: 5
    },
    {
        id: 3,
        img: '../../public/chat3.svg',
        name: 'Sophie Okonedo',
        badge: 'Exhibitor',
        designation: 'Product Manager | Microsoft',
        sender: '',
        text: 'Sophie i ma sending you soon',
        time: '1h',
        unread: ''
    },
    {
        id: 4,
        img: '../../public/chat4.svg',
        name: 'Microsoft',
        badge: '',
        designation: '',
        sender: 'Clark:',
        text: 'Hello Martin How are you...',
        time: '1h',
        unread: ''
    },
    {
        id: 5,
        img: '../../public/chat5.svg',
        name: 'Public Chatroom',
        badge: '',
        designation: '',
        sender: 'Clark:',
        text: 'Hello Martin How are you...',
        time: '1h',
        unread: ''
    },
    {
        id: 6,
        img: '../../public/chat6.svg',
        name: 'Robert Anderson',
        badge: 'Speaker',
        designation: 'Accounts Manager | Elite Financial Advisors',
        sender: 'you: ',
        text: 'Hello Robert send me your resume',
        time: '1h',
        unread: ''
    },
])
</script>

<template>
  <div class="t-w-[25%] custom-width custom-hidden t-py-5 t-border-x t-border-grayBorder">
    <div class="t-px-4 t-flex t-justify-between t-items-center">
      <span class="t-text-fgPrimary t-text-2xl t-font-extrabold family-avenir"
        >Chats</span
      >
      <span class="t-mr-2">
        <DotsVerticalIcon class="t-text-gray-600" />
      </span>
    </div>

    <SearchField />

    <!-- Queued Section -->
    <div class="t-mt-6">
      <div
        class="t-px-4 t-text-fgPrimary t-text-lg t-font-extrabold family-avenir"
      >
        Queued
      </div>
      <div
        v-for="(user, index) in queued"
        :key="index"
        class="t-px-4 t-py-2.5 t-border-b t-border-grayBorder"
      >
        <QueuedSection :user="user" :index="index" />
      </div>
    </div>

    <!-- Chats Section -->
    <div class="t-mt-6">
      <div
        class="t-px-4 t-text-fgPrimary t-text-lg t-font-extrabold family-avenir"
      >
        Chats
      </div>
      <div
        v-for="(user, index) in allChats"
        :key="index"
        class="t-px-4 t-py-2.5 t-border-b t-border-grayBorder"
        :class="user.id == 3 ? 't-bg-lightOrange' : ''"
      >
        <ChatSection :user="user" :index="index" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 700px) {
    .custom-hidden {
        display: none;
    }
}
@media screen and (max-width: 900px) and (min-width: 700px) {
    .custom-width {
        width: 40%;
    }
}
</style>
