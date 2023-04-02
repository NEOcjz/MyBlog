import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/MyBlog/",
    title: "程敬泽的个人博客",
    description: "亿点记录",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            // { text: "Examples", link: "/markdown-examples" },
            { text: "HTML", link: "/HTML" },
            { text: "CSS", link: "/CSS" },
            { text: "JavaScript", link: "/JavaScript" },
            { text: "Vue", link: "/Vue" },
            { text: "VueRouter", link: "/VueRouter" },
            { text: "Pinia", link: "/Pinia" },
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
                    link: "/HTML/",
                },
            ],
            "/CSS/": [
                {
                    text: "CSS",
                    link: "/CSS/",
                },
            ],
            "/JavaScript/": [
                {
                    text: "JavaScript",
                    link: "/JavaScript/",
                },
            ],
            "/Vue/": [
                {
                    text: "Vue",
                    link: "/Vue/",
                },
            ],
            "/VueRouter/": [
                {
                    text: "VueRouter",
                    link: "/VueRouter/",
                },
            ],
            "/Pinia/": [
                {
                    text: "Pinia",
                    link: "/Pinia/",
                },
            ],
        },

        socialLinks: [{ icon: "github", link: "https://github.com/NEOcjz" }],
    },
});
