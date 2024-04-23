<script setup>
import Profile from './profile/Profile.vue'
import TabSection from './profile/TabSection.vue'
import UserDetails from './profile/UserDetails.vue'
import Tags from './profile/Tags.vue'
import Notes from './profile/Notes.vue'

</script>

<template>
  <div
    class="custom-hidden t-w-[25%] t-text-black t-border-l t-border-grayBorder"
  >
    <!-- Profile -->
    <Profile />

    <!-- Tab section -->
    <TabSection />

    <!-- User Details -->
    <UserDetails />

    <!-- Tag -->
    <Tags />

    <!-- Notes -->
    <Notes />
  </div>
</template>

<style scoped>
@media screen and (max-width: 900px) {
  .custom-hidden {
    display: none;
  }
}
</style>
