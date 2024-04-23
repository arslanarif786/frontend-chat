<script setup>
import IconHeart from '../../assets/icons/IconHeart.vue'
import IconVideo from '../../assets/icons/IconVideo.vue'
import IconPhone from '../../assets/icons/IconPhone.vue'
import IconDots from '../../assets/icons/IconVerticalDots.vue'
</script>

<template>
    <div class="t-flex t-justify-between t-px-4 t-py-5 t-border-b t-border-grayBorder">
        <div class="t-flex t-items-center t-gap-x-3">
            <img
              class="t-w-8 t-h-8 t-rounded-full t-bg-orange-500"
              src="../../../public/chat2.svg"
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
</template>