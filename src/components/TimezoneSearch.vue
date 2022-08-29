<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from "../types"
import { addToItemzone } from '../composables/state'
import { timezones } from '../composables/data'

const input = ref("")

const fuse = new Fuse(timezones, {
    keys: ['name']
});

const searchResult = computed(() => fuse.search(input.value))

const add = (t: Timezone) => {
    addToItemzone(t)
    input.value = ''


}
</script>

<template>
    <div relative>
        <input v-model="input" type="text" placeholder="Search timezone" px2 px1 border="~ gray/15 rounded"
            bg-transparent w-full>
        <div v-show="input" absolute top-full left-0 right-0 bg-gray-900>
            <div v-for="i in searchResult" :key="i.refIndex" class="flex-col">

                <button @click="add(i.item)">
                    {{ i.item.name }} </button>

            </div>
        </div>

    </div>
</template>