/// <reference types="vite/client" />
declare namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name: string; // Add the 'name' attribute as a string
      };
    }
  }