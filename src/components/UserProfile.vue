<script setup>
import IconHeart from '../assets/icons/IconHeart.vue'
import IconDots from '../assets/icons/IconDots.vue'
import { StarFilledIcon } from 'vue-tabler-icons'
import { ref } from 'vue';

const userDetails = ref([
    {
        key: 'Email Address',
        value: 'sophie.okonedo@company.com'
    },
    {
        key: 'Alternative Address',
        value: 'sophie887@gmail.com'
    },
    {
        key: 'Date of Birth',
        value: '29 Jul, 1990'
    },
    {
        key: 'Country',
        value: 'Canada'
    },
    {
        key: 'State',
        value: 'Alberta'
    },
    {
        key: 'City',
        value: 'Edmonton'
    },
    {
        key: 'Postal Code',
        value: '987909'
    }
])
</script>

<template>
  <div
    class="custom-hidden t-w-[25%] t-text-black t-border-l t-border-grayBorder"
  >
    <!-- Profile -->
    <div class="t-flex t-justify-between t-m-6">
      <div class="t-flex family-avenir">
        <img
          class="t-w-10 t-h-10 t-rounded-full t-bg-orange-500"
          src="../../public/queued2.svg"
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

    <!-- Tab section -->
    <div
      class="t-flex t-justify-between t-px-16 t-border-b t-border-grayBorder family-avenir"
    >
      <div
        class="t-border-b-2 t-border-brightOrange t-text-brightOrange t-text-sm"
      >
        Overview
      </div>
      <div
        class="t-border-b-2 t-border-brightOrange t-text-brightOrange t-text-sm"
      >
        Contact History
      </div>
    </div>

    <!-- User Details -->
    <div class="t-border-b t-border-grayBorder t-pb-4">
      <div class="t-flex t-justify-between t-px-4 t-mt-3 family-avenir">
        <span class="t-text-base t-text-brightOrange t-font-medium"
          >User Detail</span
        >
        <img src="../../public/arrowUp.svg" alt="img" />
      </div>

      <div
        v-for="item in userDetails"
        :key="item"
        class="t-flex t-px-5 t-flex-col t-my-5 family-avenir"
      >
        <div class="t-flex t-flex-col t-gap-y-1">
          <span class="t-text-sm t-text-primaryGray t-font-medium"
            >{{ item.key }}:</span
          >
          <span class="t-text-sm t-text-fgPrimary t-font-medium">{{
            item.value
          }}</span>
        </div>
      </div>
    </div>

    <!-- Tag -->
    <div
      class="t-flex t-justify-between t-items-center t-px-4 t-border-b t-border-grayBorder t-py-3 family-avenir"
    >
      <span>Tags (5)</span>
      <img src="../../public/arrowDown.svg" alt="img" />
    </div>

    <!-- Notes -->
    <div class="notes t-bg-lightGray t-h-[146px] t-px-4 t-py-4 family-avenir">
      <span class="t-text-sm t-text-primaryGray t-font-extrabold">Notes</span>
      <div
        class="t-mt-1.5 t-h-[69px] t-border t-border-grayBorder t-rounded-lg t-bg-white"
      ></div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 900px) {
  .custom-hidden {
    display: none;
  }
}
</style>
