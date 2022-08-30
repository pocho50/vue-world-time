<script setup lang="ts">
import type { Timezone } from '../types';
import { now } from '../composables/state'
const { timezone } = defineProps<{
    timezone: Timezone
}>()

const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone.name,
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
})
const state = computed(() => timezone.name.split('/')[0].replace(/_/g, ' '));
const city = computed(() => timezone.name.split('/')[1].replace(/_/g, ' '));
const offset = computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset);
const time = computed(() => formatter.format(now.value));

</script>
<template>
    <div flex>
        <div flex-col text-left p2 flex-auto>
            <div text-xl>
                {{ city }}
                <sup px1>{{ timezone.abbr }}</sup>
            </div>
            <div op50>
                {{ state }}
            </div>

        </div>
        <div p2 tabular-nums>{{ time }}</div>
    </div>

</template>