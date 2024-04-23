<script setup>
const props = defineProps(['user', 'index'])
</script>

<template>
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
          <span class="t-text-primaryGray t-text-xs">{{ user.text }}</span>
          <span
            v-if="user.id == 2"
            class="t-text-fgPrimary t-text-xs t-font-medium family-avenir"
            >{{ user.designation }}</span
          >
        </div>
      </div>
    </div>
    <div class="t-flex t-flex-col t-items-end">
      <span v-if="user.id == 1" class="t-text-fgPrimary t-font-bold t-text-sm">
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
      <span v-if="user.id == 2" class="t-text-fgPrimary t-font-bold t-text-sm">
        {{ user.time }}
      </span>
    </div>
  </div>
</template>
