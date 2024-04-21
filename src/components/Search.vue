<script setup>
import { SearchIcon } from 'vue-tabler-icons'
</script>

<template>
  <div class="t-relative t-mt-5 t-px-4">
    <div class="t-absolute t-top-2.5 t-left-2.5 t-px-4">
      <SearchIcon class="t-w-5 t-h-5 t-text-searchGray" />
    </div>
    <input
      type="search"
      id="search"
      class="t-pl-10 t-pr-2.5 t-h-[40px] t-w-full t-rounded-lg t-bg-lightGray t-text-fgPrimary focus-visible:t-outline-gray-300"
      placeholder="Search messages"
    />
  </div>
</template>
