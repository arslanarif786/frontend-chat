<script setup>
import Header from './Header.vue'
import IconVFairs from '../assets/icons/IconVFairs.vue'
import IconSpeaker from '../assets/icons/IconSpeaker.vue'
import IconCopy from '../assets/icons/IconCopy.vue'
import IconBell from '../assets/icons/IconBell.vue'
</script>

<template>
  <header
    class="t-top-0 t-left-0 t-w-full t-border-b t-border-grayBorder t-flex t-items-center t-h-[56px] t-fixed t-z-[999] t-bg-white"
  >
    <div class="t-flex t-justify-between t-w-full t-mx-7">
      <div class="t-flex t-items-center t-gap-x-2 t-cursor-pointer">
        <IconVFairs />
        <span class="t-text-fgPrimary t-font-black"> vFAIRS </span>
      </div>
      <div class="t-flex t-gap-x-3">
        <IconSpeaker />
        <IconCopy />
        <IconBell />
        <div
          class="t-relative t-inline-flex t-items-center t-justify-center t-w-6 t-h-6 t-overflow-hidden t-bg-brightOrange t-text-white t-rounded-full"
        >
          <span class="t-text-xs t-font-bold">OR</span>
        </div>
      </div>
    </div>
  </header>
</template>