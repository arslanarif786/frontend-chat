<script setup>
import IconRooms from '../assets/icons/IconRooms.vue'
import IconPeople from '../assets/icons/IconPeople.vue'
import IconMessageCircle from '../assets/icons/IconMessageCircle.vue'
</script>

<template>
  <div class="t-w-[5%] custom-hidden t-text-black">
    <div>
        <div class="t-cursor-pointer t-bg-lightOrange t-h-[68px] t-flex t-flex-col t-justify-center t-items-center t-gap-y-1 t-border-r-2 t-border-brightOrange">
            <IconMessageCircle />
            <span class="t-text-brightOrange t-font-semibold">Chats</span>
        </div>
        <div class="t-cursor-pointer t-h-[68px] t-flex t-flex-col t-justify-center t-items-center t-gap-y-1">
            <IconPeople />
            <span class="t-text-primaryGray t-font-semibold">People</span>
        </div>
        <div class="t-cursor-pointer t-h-[68px] t-flex t-flex-col t-justify-center t-items-center t-gap-y-1">
            <IconRooms />
            <span class="t-text-primaryGray t-font-semibold">Rooms</span>
        </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 950px) {
    .custom-hidden {
        display: none;
    }
}
</style>


