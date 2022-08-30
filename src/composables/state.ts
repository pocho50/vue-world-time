import { timezones } from "../composables/data";
import type { Timezone } from "../types";

const zoneNames = useStorage<string[]>("world-time-zones", []);

export const zones = computed(() =>
  zoneNames.value.map((name) => timezones.find((i) => i.name === name))
);

export const addToItemzone = (timezone: Timezone) =>
  zoneNames.value.push(timezone.name);

const userTimeZone = new window.Intl.DateTimeFormat().resolvedOptions()
  .timeZone;

if (!zones.value.length) {
  zoneNames.value.push(userTimeZone);
}
