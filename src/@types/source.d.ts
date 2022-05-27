declare module '*.json';
declare module '*.png';
declare module '*.jpg';
declare module '*.webp';
declare module '*.webm';
declare module '*.svg?url';
declare module '*.svg?component';

declare namespace NodeJS {
  // eslint-disable-next-line
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
  }
  // eslint-disable-next-line
  interface Process {
    env: ProcessEnv;
  }
}
