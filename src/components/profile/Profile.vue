<script setup>
import IconHeart from '../../assets/icons/IconHeart.vue'
import IconDots from '../../assets/icons/IconDots.vue'
import { StarFilledIcon } from 'vue-tabler-icons'
</script>

<template>
    <div class="t-flex t-justify-between t-m-6">
      <div class="t-flex family-avenir">
        <img
          class="t-w-10 t-h-10 t-rounded-full t-bg-orange-500"
          src="../../../public/queued2.svg"
          alt="img"
        />
        <div class="t-flex t-flex-col t-ml-2.5">
          <span class="t-text-base t-font-extrabold t-text-fgPrimary"
            >Sophie Okonedo</span
          >
          <span class="t-text-xs t-text-vLightGray t-mt-0.5"
            >Senior UX/UI Designer at Nexus</span
          >
          <span class="t-text-xs t-text-vLightGray">Technology Group</span>
          <div class="t-flex t-gap-x-1 t-mt-0.5">
            <StarFilledIcon class="t-text-starColor t-h-[16px] t-w-[16px]" />
            <StarFilledIcon class="t-text-starColor t-h-[16px] t-w-[16px]" />
            <StarFilledIcon class="t-text-starColor t-h-[16px] t-w-[16px]" />
            <StarFilledIcon class="t-text-grayBorder t-h-[16px] t-w-[16px]" />
            <StarFilledIcon class="t-text-grayBorder t-h-[16px] t-w-[16px]" />
            <span
              class="t-text-primaryGray t-text-sm t-font-extrabold -t-mt-[1px]"
            >
              3.0
            </span>
          </div>
        </div>
      </div>
      <div class="t-flex t-gap-x-3">
        <IconHeart />
        <IconDots />
      </div>
  </div>
</template>