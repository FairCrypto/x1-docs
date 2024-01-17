import {defaultTheme } from 'vuepress'
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'


const sidebar = {
    '/': [
        {
            text: 'Introduction',
            link: '/',
        },
        {
            text: 'Developer Documentation',
            link: '/developer/',
            children: [
                '/developer/',
                '/developer/docker/',
                '/developer/validator/',
            ]
        },
    ]
}

module.exports = {
    lang: 'en-US',
    title: 'X1 Blockchain Docs',
    description: 'X1 is a simple, fast, and secure EVM-compatible network for the next generation of decentralized applications powered by Lachesis consensus algorithm.',
    // base: '/x1-docs/',

    plugins: [
        fullTextSearchPlugin(),
        copyCodePlugin(),
        activeHeaderLinksPlugin(),
        mdEnhancePlugin({
            codetabs: true,
            tabs: true,
        }),
    ],

    theme: defaultTheme({
        sidebar: sidebar,
        editLink: true,
        repo: 'https://github.com/FairCrypto/go-x1',
        docsRepo: 'https://github.com/FairCrypto/x1-docs',
        docsBranch: 'main',
        docsDir: 'docs',
        navbar: [
            {
                text: 'X1 Blockscout Explorer',
                link: 'https://explorer.x1-testnet.xen.network/',
            },
            {
                text: 'X1 Explorer',
                link: 'https://Wallet.x1-testnet.xen.network/',
            },
            {
                text: 'X1 Wallet',
                link: 'https://Wallet.x1-testnet.xen.network/',
            },
        ]
    }),

    markdown: {
        code: {
            lineNumbers: false,
        },
        linkify: true,
    }
}
