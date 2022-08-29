<script setup lang="ts">
import type { Timezone } from '../types';
const { timezone } = defineProps<{
    timezone: Timezone
}>()

const state = computed(() => timezone.name.split('/')[0])
const city = computed(() => timezone.name.split('/')[1])
const offset = computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)


</script>
<template>

    <div flex-col text-left p2>
        <div text-xl>
            {{ city }}
        </div>
        <div op50>
            {{ state }}
        </div>

    </div>
</template>