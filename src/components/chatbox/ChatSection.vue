<script setup>
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
                        <img v-if="element.sender === 'You' && element.id === 5" src="../../../public/UXdesign.svg" alt="img" />
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
</template>