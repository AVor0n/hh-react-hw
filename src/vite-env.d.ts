/// <reference types="vite/client" />

declare module '*.module.css' {
  const value: Record<string, string>;
  export = value;
}
