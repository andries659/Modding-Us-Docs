import { defineClientConfig } from '@vuepress/client';
import hotkeys from 'hotkeys-js';

export default defineClientConfig({
  enhance: ({ app, router }) => {
    if (typeof window !== 'undefined') {
      // Register hotkeys on the client side
      hotkeys('ctrl+m', () => {
        router.push('/faq.html');
      });

      hotkeys('ctrl+b', () => {
        router.push('/');
      });
    }
  },
});
