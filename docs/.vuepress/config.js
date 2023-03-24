module.exports = {
    title: "Joint Night School 联合夜校",
    theme: "antdocs",
    description: "口嗨冲塔请寻他处，抽象辩经莫入此门。",
    base: "/",
    head: [
        ["link", { rel: "icon", href: "/assets/logo.png" }],
        ["meta", { name: "referrer", content: "never" }],
        [
            "meta",
            {
                name: "keywords",
                content: "联合夜校，球事编辑部，红码合作社，新青年，QIUSHI，RCIT，New"
            }
        ]
    ],

    markdown: {
        lineNumbers: false,
        anchor: {
            permalinkBefore: false
        }
    },
    themeConfig: {
        backToTop: true,
        smoothScroll: true,
        logo: "/assets/logo.png",
        nav: require("./config/nav"),
        sidebar: require("./config/sidebar"),
        sidebarDepth: 0,
        editLinks: false
    },
};