export const projectService = {
    getSkillsImgUrl,
    getProjects
}

function getSkillsImgUrl() {
    return [
        {imgUrl: 'https://www.coding-academy.org/images/icons/tools/html5.png', skillName: 'HTML'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/js.png', skillName: 'JS'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/css3.png', skillName: 'CSS'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/output-onlinepngtools.png', skillName: 'react'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/sass.png', skillName: 'SASS'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/git.png', skillName: 'git'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/npm.png', skillName: 'npm'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/vue.png', skillName: 'vue'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/ng.png', skillName: 'angular'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/nodejs.png', skillName: 'node.js'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/webpack.png', skillName: 'webpack'},
        {imgUrl:'https://www.coding-academy.org/images/icons/tools/es6.png', skillName: 'ES6'}
    ]
}

function getProjects() {
    return [
        {
            id: 'p101',
            title: 'WhatsDone - Based Monday Clone',
            subtitle: 'Manage your team in a highly customizable environment',
            desc: 'WhatsDone was built in Vue, utilizing the powerful Vuex library for state management as well as a Node.js backend, complete with sockets to support real-time push updates.',
            imgUrl: [
                'https://res.cloudinary.com/zinamichailov/image/upload/v1624976997/portfolio/whatsDoneMain_arcu5c.png', 
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626096057/portfolio/whatsDoneHomepage_kiguej.jpg', 
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626096060/portfolio/whatsDoneLogin_mx2zyv.jpg',
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626096066/portfolio/whatsDoneBoard_xi1tv2.jpg'
            ],
            github: ['https://github.com/Giladpl/airbnb-mock-proj', 'https://github.com/ZinaMichailov/WhatsDone-backend'],
            url: 'https://whatsdone.herokuapp.com/',
            tools: 'Vue / Vuex / Node.js / MongoDB / Sass'
        },
        {
            id: 'p102',
            title: 'Everywhere - Based Airbnb Clone',
            subtitle: 'Live anywhere in the easiest way',
            desc: 'Everywhere was built in React, utilizing the powerful Redux library for state management as well as a Node.js backend, complete with sockets to support real-time push updates.',
            imgUrl: [
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626094810/portfolio/airbnbMain_pkgml4.jpg', 
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626096633/portfolio/airbnbHomepage_exq7ut.jpg', 
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626096627/portfolio/airbnbStays_qvbwno.jpg',
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626096625/portfolio/airbnbStay_wodjcg.jpg'
            ],
            github: ['https://github.com/Giladpl/airbnb-mock-proj', 'https://github.com/ZinaMichailov/backend-airbnb-proj'],
            url: 'https://everywhere-airbnb.herokuapp.com/',
            tools: 'React / Redux / Node.js / MongoDB / Sass'
        },
        {
            id: 'p103',
            title: 'BitCoin App',
            subtitle: 'A simple virtual wallet, searching through contacts and transfering money to contacts',
            desc: 'BitCoin was built in Angular, utilizing typescript, RxJS as well as a Node.js backend.',
            imgUrl: [
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626613980/portfolio/bitcoinMain_vbdefo.png',
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626613381/portfolio/bitcoinHomepage_rch1po.jpg',
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626613387/portfolio/bitcoinList_oliscd.jpg',
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626613392/portfolio/bitcoinDetails_hsd2gz.jpg'
            ],
            github: ['https://github.com/ZinaMichailov/bitcoin-angular', 'https://github.com/ZinaMichailov/bitcoin-angular-backend'],
            url: '',
            tools: 'Angular / Node.js / MongoDB / Sass'
        },
        // {
        //     id: 'p104',
        //     title: 'Appsus - Based Mail, Notes and Book shop app',
        //     subtitle: 'Keep track of your emails, notes and books, all in one place.',
        //     desc: 'Appsus is a Vue.js based clone of both Gmail and Google Keep, built in Vue-js without additional libraries. Appsus Keep featuring dynamic component rendering to support notes of text, image, video and list nature. Appsus Mail is a Gmail clone.',
        //     imgUrl: 'https://res.cloudinary.com/zinamichailov/image/upload/v1624977055/portfolio/appsusMain_frvz2v.png',
        //     github: ['https://github.com/Giladpl/Sprint-3'],
        //     url: 'https://Giladpl.github.io/Sprint-3/',
        //     tools: 'Vue / CSS'
        // },
        {
            id: 'p105',
            title: 'Vanilla JS - Based Meme Generator',
            subtitle: 'Make memes and start your very own meme gallery',
            desc: 'Meme Generator was built individually using vanilla javascript and canvas, without the use of external libraries. Among its features are Canvas, drag & drop, download, mobile and browser touch events.',
            imgUrl: [
                'https://res.cloudinary.com/zinamichailov/image/upload/v1624977065/portfolio/memeMain_ngo9ty.png',
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626101589/portfolio/memeHomepage_yqr508.jpg',
                'https://res.cloudinary.com/zinamichailov/image/upload/v1626101587/portfolio/memeBoard_dltkfg.jpg'
            ],
            github: ['https://github.com/ZinaMichailov/Meme-Generator'],
            url: 'https://zinamichailov.github.io/Meme-Generator/',
            tools: 'Vanilla JS / HTML / Canvas / CSS'
        },
    ]
}

