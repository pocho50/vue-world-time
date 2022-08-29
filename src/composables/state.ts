import type { Timezone } from "../types";

export const zones = ref<Timezone[]>([]);

export const addToItemzone = (timezone: Timezone) => zones.value.push(timezone);
