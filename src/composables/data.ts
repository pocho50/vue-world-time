import timezonesRow from "timezones.json";
import type { Timezone } from "../types";

export const timezones: Timezone[] = timezonesRow.flatMap((i) => {
  return i.utc.map((u) => {
    return {
      name: u,
      offset: i.offset,
      isdst: i.isdst,
    };
  });
});
