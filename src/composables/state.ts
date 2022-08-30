import { timezones } from "../composables/data";
import type { Timezone } from "../types";

const zoneNames = useStorage<string[]>("world-time-zones", []);

export const zones = computed(
  () =>
    zoneNames.value
      .filter((name) => (timezones.find((i) => i.name === name) ? true : false))
      .map((name) => timezones.find((i) => i.name === name)) as Timezone[]
);

export const addToItemzone = (timezone: Timezone) =>
  zoneNames.value.push(timezone.name);

const userTimeZone = new window.Intl.DateTimeFormat().resolvedOptions()
  .timeZone;

if (!zones.value.length) {
  zoneNames.value.push(userTimeZone);
}

export const removeZone = (index: number) => {
  zoneNames.value.splice(index, 1);
};

export const moveZone = (index: number, delta: number) => {
  if (index === -1) {
    return;
  }
  const zone = zoneNames.value[index];
  zoneNames.value.splice(index, 1);
  zoneNames.value.splice(index + delta, 0, zone);
};
