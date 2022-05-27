declare module '*.vue' {
  import { DefineComponent } from 'vue';

  const component: DefineComponent<
    Record<string, never>,
    Record<string, never>,
    any
  >;
  export default component;
}

declare interface Window {
  __STORE: Record<string, any>;
  fbq: (eventType: string, eventName: string) => void;
  gtag: (command: string, target: any, config?: object) => void;
}
