import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "X1 Documentation",
  description: "X1 is a simple, fast, and secure EVM-compatible network for the next generation of decentralized applications powered by Lachesis consensus algorithm.",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },

    footer: {
      copyright: 'Copyright © 2022-present Fair Crypto'
    },

    editLink: {
      pattern: 'https://github.com/faircrypto/x1-docs/edit/main/docs/:path'
    },

    nav: [
      {
        text: 'X1 Blockscout Explorer',
        link: 'https://explorer.x1-testnet.xen.network/',
      },
      {
        text: 'X1 Explorer',
        link: 'https://pwa-explorer.x1-testnet.xen.network/',
      },
      {
        text: 'X1 Wallet',
        link: 'https://wallet.x1-testnet.xen.network/',
      },

    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Explore the Network', link: '/introduction/#explore-the-network' },
        ]
      },
      {
        text: 'Developer Docs',
        items: [
          { text: 'Getting Started', items: [
              { text: 'Installation', link: '/developer/' },
              { text: 'Running Interactively', link: '/developer/running-node-interactively/' },
              { text: 'Running Service', link: '/developer/running-node-service/' },
              { text: 'Running with Docker', link: '/developer/docker/' },
            ]},
          { text: 'Validators', items:[
              { text: 'Becoming a Validator', link: '/developer/validators/' },
              { text: 'Registering a Validator', link: '/developer/validators/validator-info/' },

            ] },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },


  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
})
