import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/MyBlog/",
    title: "程敬泽的个人博客",
    description: "一点记录",
    head:[
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            // { text: "Examples", link: "/markdown-examples" },
            { text: "HTML", link: "/HTML/HTML" },
            { text: "CSS", link: "/CSS/CSS" },
            { text: "JavaScript", link: "/JavaScript/JavaScript" },
            { text: "Vue", link: "/Vue/Vue" },
            { text: "VueRouter", link: "/VueRouter/VueRouter" },
            { text: "Pinia", link: "/Pinia/Pinia" },
        ],

        // sidebar: [
        //   {
        //     text: 'Examples',
        //     items: [
        //       { text: 'Markdown Examples', link: '/markdown-examples' },
        //       { text: 'Runtime API Examples', link: '/api-examples' }
        //     ]
        //   },
        // ],
        sidebar: {
            // This sidebar gets displayed when a user
            // is on `guide` directory.
            // "/Examples/": [
            //     {
            //         text: "Examples",
            //         items: [
            //             { text: "Markdown Examples", link: "/markdown-examples" },
            //             { text: "Runtime API Examples", link: "/api-examples" },
            //         ],
            //     },
            // ],

            // This sidebar gets displayed when a user
            // is on `config` directory.
            "/HTML/": [
                {
                    text: "HTML",
                    // link: "/HTML/",
                    items: [
                        { text: "One", link: "/HTML/one" },
                        { text: "Two", link: "/HTML/two" },
                    ],
                },
            ],
            "/CSS/": [
                {
                    text: "CSS",
                    // link: "/CSS/",
                    items: [
                        { text: "One", link: "/CSS/one" },
                        { text: "Two", link: "/CSS/two" },
                    ],
                },
            ],
            "/JavaScript/": [
                {
                    text: "JavaScript",
                    // link: "/JavaScript/",
                    items: [
                        { text: "One", link: "/JavaScript/one" },
                        { text: "Two", link: "/JavaScript/two" },
                    ],
                },
            ],
            "/Vue/": [
                {
                    text: "Vue",
                    // link: "/Vue/",
                    items: [
                        { text: "One", link: "/Vue/one" },
                        { text: "Two", link: "/Vue/two" },
                    ],
                },
            ],
            "/VueRouter/": [
                {
                    text: "VueRouter",
                    // link: "/VueRouter/",
                    items: [
                        { text: "One", link: "/VueRouter/one" },
                        { text: "Two", link: "/VueRouter/two" },
                    ],
                },
            ],
            "/Pinia/": [
                {
                    text: "Pinia",
                    // link: "/Pinia/",
                    items: [
                        { text: "One", link: "/Pinia/one" },
                        { text: "Two", link: "/Pinia/two" },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: "github", link: "https://github.com/NEOcjz" }],
    },
});
