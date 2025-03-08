import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  bundler: viteBundler(),

  markdown: {
    html: true, // Enable HTML in Markdown
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  theme: defaultTheme({
    logo: './logo.jpeg',
    logoAlt: 'MU',
    home: '/',
    navbar: [
      { text: 'Home', link: '/' },
      {
        text: 'Roles',
        children: [
          { text: 'All Roles', link: '/roles/modding-us/mu-roles.html'},
          { text: 'Crewmate Roles', link: '/roles/modding-us/crewmates/crewmates.html'},
          { text: 'Impostor Roles', link: '/roles/modding-us/impostors/impostors.html'},
          { text: 'Neutral Roles', link: '/roles/modding-us/neutrals/neutrals.html'},
          { text: 'Game Settings', link: '/roles/settings/game.html' },
          { text: 'Game Modifiers', link: '/roles/settings/modifiers.html' },
        ],
      },
      { 
        text: 'Changelogs',
        children: [
          { text: 'Modding Us Changelogs', link: '/changelogs/modding-us/mu.html'},
          { text: 'Changelogs Tags', link: '/changelogs/tags.html'}
        ],
      },
      { text: 'Posts', link: '/posts/posts.html' },
      {
        text: 'About',
        children: [
          { text: 'About Modding Us', link: '/abouts/about/aboutmu.html' },
          { text: 'About Us', link: '/abouts/about/aboutUs.html' }
        ],
      },
      { text: 'Install', link: '/install.html' },
    ],
    sidebar: {
      '/posts/tor-w-posts': [
        { text: 'Back to Posts', link: '/posts/posts.html' },
        { text: 'Website Changes', link: '/posts/modding-us-posts/website.html' }
      ],
      '/abouts/about/': [
        { text: 'Back to About', link: '/abouts/about.md' },
        { text: 'About Modding Us', link: '/abouts/about/aboutmu.html' },
        { text: 'About Us', link: '/abouts/about/aboutUs.html' },
      ],
      '/changelogs/modding-us/': [
        { text: 'Modding Us Changelogs', link: '/changelogs/modding-us/mu.html' },
        { text: 'Modding Us Stable Changelogs', link: '/changelogs/modding-us/stable.html' },
      ],
    },
  }),

  lang: 'en-US',

  plugins: [
    searchPlugin({
      hotKeys: [
        { key: 'k', ctrl: true, alt: false, shift: false },
      ],
      locales: {
        '/': {
          placeholder: 'Search...',
        },
      },
    }),
  ],
});
