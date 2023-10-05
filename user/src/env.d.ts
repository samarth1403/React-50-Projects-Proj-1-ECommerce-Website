// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_APIKEY: string;
    // Add other environment variables here if needed
  }
}
