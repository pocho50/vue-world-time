<script lang="ts" setup>
import { zones } from '../composables/state'
</script>
<template>
    <div v-for="zone in zones" :key="zone.name">
        <timezoneitem :timezone="zone" />
    </div>
</template>