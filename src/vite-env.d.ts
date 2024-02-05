/// <reference types="vite/client" />

declare module '*.module.css' {
  const value: Record<string, string>;
  export = value;
}

interface ImportMetaEnv {
  VITE_GITHUB_AUTH: string;
}
