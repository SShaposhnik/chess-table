import { PluginProps } from 'interfaces';

declare global {
  interface Window {
    BelePlugin: (props: PluginProps) => void;
  }
}

export {};
