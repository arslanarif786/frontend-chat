<script setup>
import { ref } from 'vue';
import { DotsVerticalIcon } from 'vue-tabler-icons'
import SearchField from './Search.vue'
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
        <div class="t-flex t-justify-between family-avenir t-mt-2">
          <div class="t-flex">
            <img
              class="t-w-10 t-h-10 t-rounded-full t-bg-orange-500"
              :src="user.img"
              alt="img"
            />
            <div class="t-ml-2">
              <span class="t-text-fgPrimary t-text-base t-font-extrabold">{{
                user.name
              }}</span>
              <div class="t-flex t-items-center t-mt-1">
                <span class="t-text-primaryGray t-font-bold t-text-xs">{{
                  user.sender
                }}</span>
                <span class="t-text-primaryGray t-text-xs">{{
                  user.text
                }}</span>
                <span
                  v-if="user.id == 2"
                  class="t-text-fgPrimary t-text-xs t-font-medium family-avenir"
                  >{{ user.designation }}</span
                >
              </div>
            </div>
          </div>
          <div class="t-flex t-flex-col t-items-end">
            <span
              v-if="user.id == 1"
              class="t-text-fgPrimary t-font-bold t-text-sm"
            >
              {{ user.time }}
            </span>
            <span
              v-if="user.id == 1"
              class="t-w-4 t-h-4 t-rounded-full t-bg-orange-500 t-mt-[7px] t-flex t-justify-center t-items-center t-text-[8px] t-font-extrabold t-text-white"
            >
              {{ user.unread }}
            </span>

            <span v-if="user.id == 2" class="t-text-fgPrimary t-text-xs">
              {{ user.waitTime }}
            </span>
            <span
              v-if="user.id == 2"
              class="t-text-fgPrimary t-font-bold t-text-sm"
            >
              {{ user.time }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Chats Section -->
    <div class="t-mt-6">
      <div
        class="t-px-4 t-text-fgPrimary t-text-lg t-font-extrabold family-avenir"
      >
        Queued
      </div>
      <div
        v-for="(user, index) in allChats"
        :key="index"
        class="t-px-4 t-py-2.5 t-border-b t-border-grayBorder"
        :class="user.id == 3 ? 't-bg-lightOrange' : ''"
      >
        <div class="t-flex t-justify-between family-avenir t-mt-2">
          <div class="t-flex">
            <div class="">
              <img
                :class="
                  user.id == 1 || user.id == 4 || user.id == 5
                    ? 't-w-10 t-h-10'
                    : 't-w-6 t-h-6'
                "
                class="t-rounded-full t-bg-orange-500"
                :src="user.img"
                alt="img"
              />
            </div>
            <div class="t-ml-2">
              <div class="t-flex t-items-center">
                <span class="t-text-fgPrimary t-text-base t-font-extrabold">{{
                  user.name
                }}</span>
                <span
                  v-if="user.badge"
                  class="t-ml-2 t-h-[17px] t-w-[59px] t-text-white t-text-[10px] t-font-extrabold t-px-2.5 t-py-0.5 t-rounded-full"
                  :class="
                    user.id == 3 ? 't-bg-primaryBlue' : 't-bg-primaryParrot'
                  "
                  >{{ user.badge }}</span
                >
              </div>
              <div class="t-flex t-flex-col">
                <span
                  v-if="user.id == 2 || user.id == 3 || user.id == 6"
                  class="t-mt-1 t-text-fgPrimary t-text-xs t-font-medium family-avenir"
                  >{{ user.designation }}</span
                >
                <div class="t-flex t-mt-1">
                  <span class="t-text-primaryGray t-font-bold t-text-xs">{{
                    user.sender
                  }}</span>
                  <span class="t-text-primaryGray t-text-xs">{{
                    user.text
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="user.unread && (user.id == 1 || user.id == 2)"
            :class="`t-flex t-flex-col t-items-end ${
              user.id == 2 ? 't-pr-4' : ''
            }`"
          >
            <span class="t-text-searchGray t-font-bold t-text-sm">
              {{ user.time }}
            </span>
            <span
              class="t-w-4 t-h-4 t-rounded-full t-flex t-justify-center t-items-center t-text-[8px] t-font-extrabold t-text-white"
              :class="
                user.id == 1
                  ? 't-mt-[7px] t-bg-orange-500'
                  : 't-mt-[27px] t-bg-primaryGray'
              "
            >
              {{ user.unread }}
            </span>
          </div>
          <span
            v-else-if="user.id != 1 || user.id != 2"
            class="t-text-searchGray t-font-bold t-text-sm"
          >
            {{ user.time }}
          </span>
        </div>
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
