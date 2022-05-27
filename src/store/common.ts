import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';

interface State {
  isClient: Ref<boolean>;
  isServer: Ref<boolean>;
}

export const useCommonStore = defineStore('common', () => {
  const state: State = {
    isClient: ref(false),
    isServer: ref(false),
  };

  const actions = {
    setIsClient(isClient: boolean) {
      state.isClient.value = isClient;
    },
    setIsServer(isServer: boolean) {
      state.isServer.value = isServer;
    },
  };

  return {
    ...state,
    ...actions,
  };
});
