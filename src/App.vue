<script setup lang="ts">
import Navbar1 from "./components/Navbar.vue";

</script>

<template>
  <div bg-gray:15 h-screen>
    <Navbar />
    <div border="~ gray/20" bg-white shadow m2 p2 dark:bg-truegray-900 mx-5>
      <ActionBar />
      <TimeSchedular />
    </div>
  </div>

</template>

<style>
.dark {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
