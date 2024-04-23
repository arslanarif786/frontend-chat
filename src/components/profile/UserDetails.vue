<script setup>
import { ref } from 'vue'
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
    <div class="t-border-b t-border-grayBorder t-pb-4">
      <div class="t-flex t-justify-between t-px-4 t-mt-3 family-avenir">
        <span class="t-text-base t-text-brightOrange t-font-medium"
          >User Detail</span
        >
        <img src="../../../public/arrowUp.svg" alt="img" />
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
</template>