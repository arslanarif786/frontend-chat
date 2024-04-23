<script setup>
const props = defineProps(['user', 'index'])
</script>

<template>
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
            :class="user.id == 3 ? 't-bg-primaryBlue' : 't-bg-primaryParrot'"
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
            <span class="t-text-primaryGray t-text-xs">{{ user.text }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="user.unread && (user.id == 1 || user.id == 2)"
      :class="`t-flex t-flex-col t-items-end ${user.id == 2 ? 't-pr-4' : ''}`"
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
</template>
