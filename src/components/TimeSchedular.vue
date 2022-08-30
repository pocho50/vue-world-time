<script lang="ts" setup>
import { zones, removeZone, moveZone } from '../composables/state'
</script>
<template>
    <div v-for="zone, idx in zones" :key="zone.name" relative>
        <timezoneitem :timezone="zone" />
        <div absolute left="-7" top-0 bottom-0 text-xl flex="~ col" justify-center>
            <button @click="removeZone(idx)" title="Remove" i-carbon-close icon-btn></button>
            <button @click="moveZone(idx, -1)" title="Move up" v-if="idx !== 0" icon-btn i-carbon-caret-up></button>
            <button @click="moveZone(idx, 1)" title="Move down" v-if="idx !== zones.length - 1" icon-btn
                i-carbon-caret-down></button>
        </div>
    </div>
</template>