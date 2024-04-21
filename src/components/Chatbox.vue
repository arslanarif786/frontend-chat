<script setup>
import IconHeart from '../assets/icons/IconHeart.vue'
import IconVideo from '../assets/icons/IconVideo.vue'
import IconPhone from '../assets/icons/IconPhone.vue'
import IconDots from '../assets/icons/IconVerticalDots.vue'
import { ref } from 'vue'

const messages = ref([
    {
        id: 1,
        image: '../../public/chatbot1.svg',
        sender: 'Sophie Okonedo',
        time: '9:30 AM',
        text: 'John contacted you with Sophie Okenodo'
    },
    {
        id: 2,
        image: '../../public/chatbot2.svg',
        sender: 'Sophie Okonedo',
        time: '9:30 AM',
        text: 'Hi Alex! Have you heard about the upcoming virtual UX design event next month?'
    },
    {
        id: 3,
        image: '../../public/chatbot3.svg',
        sender: 'You',
        time: '9:30 AM',
        text: 'Hey Ali! Yes, I got tickets. Super excited! 🎶'
    },
    {
        id: 4,
        image: '../../public/chatbot2.svg',
        sender: 'Sophie Okonedo',
        time: '9:30 AM',
        text: 'Hey Samir! Are you going to the concert tomorrow night?'
    },
    {
        id: 5,
        image: '../../public/chatbot3.svg',
        sender: 'You',
        time: '9:30 AM',
        text: 'Hey Sophie! Yes, I got tickets. Super excited! 🎶'
    },
    {
        id: 6,
        image: '../../public/chatbot2.svg',
        sender: 'Sophie Okonedo',
        time: '7 min ago',
        text: '“Hey Sophe! Yes I got tickets. Super Excited”'
    },
])
</script>

<template>
  <div class="t-w-[45%] custom-width t-text-black ">
    <!-- chat user info -->
    <div class="t-flex t-justify-between t-px-4 t-py-5 t-border-b t-border-grayBorder">
        <div class="t-flex t-items-center t-gap-x-3">
            <img
              class="t-w-8 t-h-8 t-rounded-full t-bg-orange-500"
              src="../../public/chat2.svg"
              alt="img"
            />
            <span class="t-text-sm t-font-semibold t-text-fgPrimary">Sophie Okonedo</span>
            <IconHeart />
        </div>
        <div class="t-flex t-items-center t-gap-x-3">
            <IconPhone class="t-h-5 t-w-5" />
            <IconVideo />
            <IconDots class="t-h-5 t-w-5" />
            <span class="t-h-5 t-w-5 t-rounded-3xl t-bg-brightOrange t-text-white t-text-center t-text-sm t-font-medium">i</span>
        </div>
    </div>

    <!-- Chat Section -->
    <div class="custom-scroll-content">
        <div v-for="element in messages" :key="element"
            class="t-flex t-flex-col t-px-5 t-py-6">
            <div class="t-flex t-items-start t-gap-x-2" :class="element.sender == 'You' ? 't-justify-end' : ''">
                <!-- Others image -->
                <img v-if="element.sender !== 'You'" :src="element.image" alt="img" />
                <div class="t-flex t-flex-col t-gap-y-2 family-avenir">
                    <!-- Others sender  -->
                    <div v-if="element.sender !== 'You'" class="t-flex t-items-center t-gap-x-2">
                        <span class="t-text-primaryGray t-text-sm t-font-extrabold">{{ element.sender }}</span>
                        <span class="t-text-xs">{{ element.time }}</span>
                    </div>
                    <!-- Yours detail -->
                    <div v-if="element.sender === 'You'" class="t-flex t-items-center t-justify-end t-gap-x-2">
                        <span class="t-text-primaryGray t-text-sm t-font-extrabold">{{ element.sender }}</span>
                        <span class="t-text-xs">{{ element.time }}</span>
                    </div>
                    <!-- You send image -->
                    <div class="t-flex t-justify-end">
                        <img v-if="element.sender === 'You' && element.id === 5" src="../../public/UXdesign.svg" alt="img" />
                    </div>
                    <!-- text -->
                    <div class="t-text-base t-rounded-lg t-py-1 t-px-4"
                        :class="element.sender === 'You' ? 't-text-white t-bg-brightOrange' : element.id === 1 ? 't-bg-lightBlue' : 't-text-fgPrimary t-bg-gray-100'">
                        {{ element.text }}
                    </div>
                </div>
                <!-- Yours image -->
                <img v-if="element.sender === 'You'" :src="element.image" alt="img" />
            </div>
        </div>
    </div>
    
    <!-- chat box -->
    <div class="t-flex t-flex-col t-w-full t-border-t t-border-grayBorder custom-shadow">
        <input type="text" id="text-box" placeholder="Message to Sophie | Away for one hour"
            class="t-w-full t-text-fgPrimary t-h-[52px] t-p-5 t-border-b t-border-grayBorder focus-visible:t-outline-gray-300">
        <div class="t-flex t-justify-between t-h-[40px] t-pl-6 t-pr-4 t-py-2">
            <div class="t-flex t-items-center t-gap-x-2">
                <img src="../../public/text-bold.svg" />
                <img src="../../public/text-italic.svg" />
                <img src="../../public/text-strikethrough.svg" />
                <img src="../../public/text-clear.svg" />
                <img src="../../public/emoji.svg" />
                <img src="../../public/link.svg" />
                <img src="../../public/menu.svg" />
                <img src="../../public/video.svg" />
            </div>
            <div class="t-flex t-gap-x-2">
                <img src="../../public/cards.svg" />
                <div class="t-mt-0.5">
                    <span class="t-h-5 t-w-5 t-rounded-3xl t-bg-primaryGray t-text-white t-text-base t-font-bold t-flex t-justify-center t-items-center t-pb-0.5">+</span>
                </div>
            </div>
        </div>
    </div>
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
