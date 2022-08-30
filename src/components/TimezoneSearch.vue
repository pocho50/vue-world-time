<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from "../types"
import { addToItemzone } from '../composables/state'
import { timezones } from '../composables/data'

const input = ref("")
const index = ref(0)

const fuse = new Fuse(timezones, {
    keys: ['name']
});

const searchResult = computed(() => fuse.search(input.value))

const add = (t: Timezone) => {
    addToItemzone(t)
    input.value = ''
    index.value = 0
}

const onKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'ArrowDown') {
        index.value = (index.value + 1) % searchResult.value.length
    }

    if (e.key == 'ArrowUp') {
        index.value = (index.value - 1 + searchResult.value.length) % searchResult.value.length
    }

    if (e.key == 'Enter') {
        add(searchResult.value[index.value].item)
    }

}
</script>

<template>
    <div relative>
        <input @keydown="onKeyDown" v-model="input" type="text" placeholder="Search timezone" p-2 px2 px1
            border="~ gray/15 rounded" bg-transparent w-full>
        <div v-show="input" absolute z-10 rounded shadow top-full left-0 right-0 bg-gray-900 max-h-50 overflow-auto>
            <div v-for="i, idx in searchResult" :key="i.refIndex" class="flex-col">

                <button w-full @click="add(i.item)" :key="i.refIndex" :class="idx === index ? 'bg-gray:5' : ''">
                    <Timezoneitem :timezone="i.item" />
                </button>

            </div>
        </div>

    </div>
</template>