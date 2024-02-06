import { defineStore, acceptHMRUpdate } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const counter = ref(0);

  return { counter };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
