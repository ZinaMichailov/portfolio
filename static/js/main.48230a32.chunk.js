(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{57:function(e,t,i){},58:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},84:function(e,t,i){},85:function(e,t,i){},86:function(e,t,i){},87:function(e,t,i){},88:function(e,t,i){},89:function(e,t,i){},93:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),s=i(47),c=i.n(s),o=i(49),r=i(8),l=(i(57),i(28)),m=(i(58),i(2)),d=function(e){var t=e.isFixed,i=e.isActiveClass,a=t?"main-header fixed-header":"main-header";return Object(m.jsx)("header",{className:a,children:Object(m.jsxs)("nav",{className:"flex-center clean-list main-layout",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:i.home?"is-active":"",href:"#home",children:"HOME"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:i.about?"is-active":"",href:"#about",children:"ABOUT"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:i.projects?"is-active":"",href:"#projects",children:"PROJECTS"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:i.contact?"is-active":"",href:"#contact",children:"CONTACT"})})]})})},u={getSkillsImgUrl:function(){return[{imgUrl:"https://www.coding-academy.org/images/icons/tools/html5.png",skillName:"HTML"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/js.png",skillName:"JS"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/css3.png",skillName:"CSS"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/output-onlinepngtools.png",skillName:"react"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/sass.png",skillName:"SASS"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/git.png",skillName:"git"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/npm.png",skillName:"npm"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/vue.png",skillName:"vue"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/ng.png",skillName:"angular"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/nodejs.png",skillName:"node.js"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/webpack.png",skillName:"webpack"},{imgUrl:"https://www.coding-academy.org/images/icons/tools/es6.png",skillName:"ES6"}]},getProjects:function(){return[{id:"p101",title:"WhatsDone - Based Monday Clone",subtitle:"Manage your team in a highly customizable environment",desc:"WhatsDone was built in Vue, utilizing the powerful Vuex library for state management as well as a Node.js backend, complete with sockets to support real-time push updates.",imgUrl:["https://res.cloudinary.com/zinamichailov/image/upload/v1624976997/portfolio/whatsDoneMain_arcu5c.png","https://res.cloudinary.com/zinamichailov/image/upload/v1626096057/portfolio/whatsDoneHomepage_kiguej.jpg","https://res.cloudinary.com/zinamichailov/image/upload/v1626096060/portfolio/whatsDoneLogin_mx2zyv.jpg","https://res.cloudinary.com/zinamichailov/image/upload/v1626096066/portfolio/whatsDoneBoard_xi1tv2.jpg"],github:["https://github.com/Giladpl/airbnb-mock-proj","https://github.com/ZinaMichailov/WhatsDone-backend"],url:"https://whatsdone.herokuapp.com/",tools:"Vue / Vuex / Node.js / MongoDB / Sass"},{id:"p102",title:"Everywhere - Based Airbnb Clone",subtitle:"Live anywhere in the easiest way",desc:"Everywhere was built in React, utilizing the powerful Redux library for state management as well as a Node.js backend, complete with sockets to support real-time push updates.",imgUrl:["https://res.cloudinary.com/zinamichailov/image/upload/v1626094810/portfolio/airbnbMain_pkgml4.jpg","https://res.cloudinary.com/zinamichailov/image/upload/v1626096633/portfolio/airbnbHomepage_exq7ut.jpg","https://res.cloudinary.com/zinamichailov/image/upload/v1626096627/portfolio/airbnbStays_qvbwno.jpg","https://res.cloudinary.com/zinamichailov/image/upload/v1626096625/portfolio/airbnbStay_wodjcg.jpg"],github:["https://github.com/Giladpl/WhatsDone","https://github.com/ZinaMichailov/backend-airbnb-proj"],url:"https://everywhere-airbnb.herokuapp.com/",tools:"React / Redux / Node.js / MongoDB / Sass"},{id:"p103",title:"BitCoin App",subtitle:"A simple virtual wallet, searching through contacts and transfering money to contacts",desc:"BitCoin was built in Angular, utilizing typescript, RxJS as well as a Node.js backend.",imgUrl:["https://res.cloudinary.com/zinamichailov/image/upload/v1626095023/portfolio/bitcoinMain_ufc4ny.jpg"],github:[""],url:"",tools:"Angular / Node.js / MongoDB / Sass"},{id:"p105",title:"Vanilla JS - Based Meme Generator",subtitle:"Make memes and start your very own meme gallery",desc:"Meme Generator was built individually using vanilla javascript and canvas, without the use of external libraries. Among its features are Canvas, drag & drop, download, mobile and browser touch events.",imgUrl:["https://res.cloudinary.com/zinamichailov/image/upload/v1624977065/portfolio/memeMain_ngo9ty.png","https://res.cloudinary.com/zinamichailov/image/upload/v1626101589/portfolio/memeHomepage_yqr508.jpg","https://res.cloudinary.com/zinamichailov/image/upload/v1626101587/portfolio/memeBoard_dltkfg.jpg"],github:["https://github.com/ZinaMichailov/Meme-Generator"],url:"https://zinamichailov.github.io/Meme-Generator/",tools:"Vanilla JS / HTML / Canvas / CSS"}]}};var j=i(99),g=(i(60),function(){var e=u.getSkillsImgUrl(),t={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return Object(m.jsx)(j.a.ul,{className:"skill-list clean-list main-layout grid container",variants:{hidden:{opacity:1,scale:0,when:"repeat: Infinity"},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},initial:"hidden",animate:"visible",children:e&&e.map((function(e,i){return Object(m.jsx)(j.a.li,{className:"item",variants:t,children:Object(m.jsx)("img",{src:e.imgUrl,alt:e.skillName,title:e.skillName})},i)}))})}),h=(i(61),function(e){var t=e.isActive;return Object(m.jsxs)("section",{id:"about",className:"about main-layout",children:[Object(m.jsx)("h1",{children:"About"}),Object(m.jsx)("div",{className:"bottom-line"}),Object(m.jsx)("p",{children:"Knowledgeable and experienced in composing single-page web apps, I'm creative thinker who's always after new challenges in front end or full stack development."}),!t&&Object(m.jsx)(g,{}),t&&Object(m.jsx)(g,{})]})}),p=i(27),b=i.n(p),f=i(30),v=i(48),x=i.n(v),w=i.p+"static/media/github.0099e2e0.svg",O=i(101),A=i(98),N=i(100),y=i(96),k=i(97);i(81),i(82),i(83),i(84);N.a.use([y.a,k.a]);var I=function(e){var t=e.imgUrls;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O.a,{className:"image-swiper",slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,children:t.map((function(e,t){return Object(m.jsx)(A.a,{children:Object(m.jsx)("img",{src:e,alt:""})},t)}))})})},C=i(102),z=(i(85),function(e){var t=e.selectedProject,i=e.showModal,a=e.handleClose;return Object(m.jsx)(C.a,{exitBeforeEnter:!0,children:i&&Object(m.jsx)(j.a.div,{className:"backdrop",variants:{visible:{opacity:1},hidden:{opacity:0}},initial:"hidden",animate:"visible",exit:"hidden",children:Object(m.jsx)(x.a,{onOutsideClick:a,children:Object(m.jsxs)(j.a.div,{className:"modal",variants:{visible:{opacity:1,transition:{delay:.3}},hidden:{opacity:0}},initial:"hidden",animate:"visible",children:[Object(m.jsx)("button",{className:"close-btn flex-center",onClick:a,children:"X"}),Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)(I,{imgUrls:t.imgUrl})}),Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{children:t.title}),Object(m.jsx)("p",{children:t.subtitle}),Object(m.jsx)("p",{children:t.desc}),Object(m.jsxs)("div",{children:[t.github.map((function(e,t){return Object(m.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",onClick:function(e){return e.stopPropagation()},children:Object(m.jsx)("img",{className:"link",src:w,alt:"github"})},t)})),Object(m.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",onClick:function(e){return e.stopPropagation()},children:Object(m.jsx)("img",{className:"link",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFdklEQVRoge2ZW4hVZRTH1zYvo0wXKzS7wDSNEk1DF3sYpdIsdCxpkkwreuvBF0UrKHQEmbCsIDKky0MQQaVIoShmGV000cC0hPQhsyRnNHPKMW1szJlfD9/anTX77O+cvefsM3MeWrBZZ6/bt/7nu+71ifxPlUVBFkGAahG5Q0SmiEi9iIwXkTEiUq0mZ0TkuIgcFJH9IrJNRHYEQXAmi/ZLIiAAZgLrgL9JT2eBtUATkMkf2h8Qc4B9ngSPAM8Ck4zsVmAJcNjj8x0weyAB1AGfmgR+BTr193ngRdwwC+0BMO8jgOVqC3ACOGbifQzUlhvEo8CfJoFF+s8DdANzYnz6ADHyJuAvVT8NLNSYAKeAeeUAEAArzL+2ARgL3A306DPL4xsLxID5R59GjbnetNOaNYjXzNBZoPKLcHMBYEUBfy8Q1T+jJj8CVSpbYIbe6qyAhD3RhZmMwAsq3wUMLQHIEGCnmrUY+QPaZuk9g5sT6NBpNvJxuKUTYHKRGAWBqM0tQC9u/o028mZtG2Buf0HUkZvYT0Z0z6l8U4I4RYGo3Qdquiwif0LlnRRZzWI3IuAjEZlZLIEBpq1BEMzwKYdEBbhltNJAiIhMt0O8IOFWqXDHXhyjf1t1SxPGSzS01Hapmr8Zo1uoum9JcpzBnZ0A2tHl0OgC4KjqbywDkAY1PxyjqwLaVO8dXtZhnRq3xOiuV92xJImpT2Igan9cXfImNtCiujXFglyIW1Z7gZoY/WMaaH2KxNIC2aAueUcUoEZz6wJGRfV2st8uIlUisjsIgrzuFZGblO9Jmlg/aK/ym6MKzWm3iIwUl2sfskCmKN/uaeQ65Qf7l2Mi+iHSVpS+Uj41qrBA6pXv9AQJh9tPqVJLRz8rv9aj36W8PqqwQCZEgkXpUuUdqVJLRyeUX+7Rh7lNiCoskMuUt3mCXKz8ZKrU0tFv4r7vL/HojyjPA/rf5gJ0i8jwzFPzUBAEvuNRo4hsltwIiKPuIAj67HN5R5TBpiAIvhY3mQvtV/7dHejQNTx2fAInVe/r9jifRPsI8DnwDTCuiN1YDflHVGd7JJzEV3vinFI+2qMvhe4SkYkisgPwrVgiIlcpz+stCyRcw33n/vBf8K0oWVCtODA3ePTh/nIoqrBA9iuf5AkSLn3lLNd8ISJXish24LYYfaPyvL3OAtmm/E5PI+FGOL4/GSake0Vkk7it4DMguoOHNbMvvRGA6sE6NFo7YBjwnoq6MKUmYDjwFjCsWMC1GmBZjK5sx/ioHa668rqKzwGPJG0zDNCkzu3AyIjOflg1lBOIka9UVQ8wPzkS57xHnQt96uZ9eKVJMI0drojXqybLk7QbOs5mACgNYGA+uRrXyjRgNlcSELV5GDdfAN4Aih+vgFpcVRzgqYiuHAW6pHazyJVS36XY6qVO89Shh7513yvIsGSaxk5tp5Krgm4kUu3xObWqw1ngQSPPpIidxA63v20FDpknHC2JRkYYaLXpmUUqy+RaISGQOnKrVhx9nwiIBms1jhtxw2saJVz0+OyAC4CXgVVG/4mavIqbv/ZJ9zEIzDVd2gEsNgC7gYeSAgHui7NTEO+b92mqv0ffjwIjUiXuAVMLbDENRS9DX6LwZWgV7t7xvAdICCIcSluMzV6VPV4yEBO02QSOUhvupmuykU3ElTx/ieuliH8nrgZ9WgE1qE148XSAJHtICjABMANYQ25tT0weIJ244oMAq1T2jr4PJXdPf39mQCKJjAKmA8/j6rcHgN9xc6dLe2kf7tZ2CTr2jX87bv41GlkN7sb3HHCNysJDpK8aOriEWwXHxMjD75IPcXtJSL7aW2US7qLU0mngFcBXIKlcwp2p2nRIlqOCU1n0LzCNczpVfNqOAAAAAElFTkSuQmCC",alt:"website"})})]})]})]})})})})}),S=(i(86),function(e){var t=u.getProjects(),i=Object(a.useState)(!1),n=Object(l.a)(i,2),s=n[0],c=n[1],o=Object(a.useState)(null),r=Object(l.a)(o,2),d=r[0],j=r[1],g=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:c(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsxs)("section",{id:"projects",className:"project-list",children:[Object(m.jsx)("h1",{children:"Projects"}),Object(m.jsx)("div",{className:"bottom-line"}),Object(m.jsx)("div",{className:"list main-layout flex",children:t&&t.map((function(e,t){return Object(m.jsxs)("div",{className:"project-preview",children:[Object(m.jsx)("img",{src:e.imgUrl[0],alt:e.title}),Object(m.jsxs)("div",{className:"overlay flex-column flex-center",children:[Object(m.jsx)("h2",{children:e.title}),Object(m.jsx)("p",{children:e.tools}),Object(m.jsx)("button",{className:"btn more-btn",onClick:function(){return g(e)},children:"LEARN MORE"})]})]},t)}))})]}),d&&Object(m.jsx)(z,{selectedProject:d,showModal:s,handleClose:function(){c(!1)}})]})}),U=i(51),E=(i(87),function(e){var t=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,U.a.sendForm("service_4zxgr91","template_petkm2g",t.target,"user_HcnpAmaHMQBCF87FUGvaE");case 4:t.target.from_name.value="",t.target.from_email.value="",t.target.message.value="",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.text);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("section",{id:"contact",className:"contact",children:[Object(m.jsx)("svg",{preserveAspectRatio:"none",viewBox:"0 0 100 102",height:"75",width:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M0 0 L50 100 L100 0 Z",fill:"#f5f5f5",stroke:"#f5f5f5"})}),Object(m.jsx)("h1",{children:"Contact"}),Object(m.jsx)("div",{className:"bottom-line"}),Object(m.jsx)("p",{children:"Feel free to reach out"}),Object(m.jsxs)("form",{className:"flex-column main-layout",onSubmit:t,children:[Object(m.jsx)("input",{type:"hidden",name:"contact_number"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter Name",name:"from_name",required:!0}),Object(m.jsx)("input",{type:"email",placeholder:"Enter Email",name:"from_email",required:!0}),Object(m.jsx)("textarea",{placeholder:"Your Message",name:"message",rows:"6",required:!0}),Object(m.jsx)("button",{className:"btn light-btn",children:"Submit"})]})]})}),M=i(36),D=i.n(M),B=i.p+"static/media/Zina Michailov CV .231d01e4.docx",R=(i(88),function(e){var t=Object(a.useRef)(),i=Object(a.useRef)(),n=Object(a.useRef)(),s=Object(a.useRef)(),c=Object(a.useState)(!1),o=Object(l.a)(c,2),r=o[0],u=o[1],j=Object(a.useState)({home:!0,about:!1,projects:!1,contact:!1}),g=Object(l.a)(j,2),p=g[0],b=g[1];return Object(a.useEffect)((function(){var e=function(){var e=i.current.offsetTop;window.pageYOffset>=e-130&&!r?u(!0):window.pageYOffset<e-130&&r&&u(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[r]),Object(a.useEffect)((function(){var e=function(){var e=t.current.offsetHeight+i.current.offsetHeight,a=t.current.offsetHeight+i.current.offsetHeight+n.current.offsetHeight,c=t.current.offsetHeight+i.current.offsetHeight+n.current.offsetHeight+s.current.offsetHeight;window.pageYOffset>=0&&window.pageYOffset<t.current.offsetHeight?b({home:!0,about:!1,projects:!1,contact:!1}):window.pageYOffset+150>=i.current.offsetTop&&window.pageYOffset<e?b({home:!1,about:!0,projects:!1,contact:!1}):window.pageYOffset+60>=n.current.offsetTop&&window.pageYOffset<a?b({home:!1,about:!1,projects:!0,contact:!1}):window.pageYOffset+60>=s.current.offsetTop&&window.pageYOffset<c&&b({home:!1,about:!1,projects:!1,contact:!0})};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[p]),Object(m.jsxs)("section",{className:"homepage",children:[Object(m.jsxs)("div",{id:"home",ref:t,className:"homepage-header",children:[Object(m.jsx)(d,{isFixed:r,isActiveClass:p}),Object(m.jsxs)("div",{className:"header-content main-layout",children:[Object(m.jsx)("span",{children:"I Am Zina Michailov,"}),Object(m.jsxs)(D.a,{className:"typing",startDelay:1500,avgTypingDelay:90,children:[Object(m.jsx)("span",{children:"A Programer"}),Object(m.jsx)(D.a.Backspace,{count:11,delay:1500}),Object(m.jsx)("span",{children:"A Developer"})]}),Object(m.jsx)("p",{children:"Junior Frontend / Full Stack Web Developer"}),Object(m.jsx)("a",{href:B,download:!0,children:Object(m.jsx)("button",{className:"btn main-btn",children:"Download My Resume"})})]})]}),Object(m.jsx)("div",{ref:i,children:Object(m.jsx)(h,{isActive:p.about})}),Object(m.jsx)("div",{ref:n,children:Object(m.jsx)(S,{})}),Object(m.jsx)("div",{ref:s,children:Object(m.jsx)(E,{})})]})}),J=i.p+"static/media/linkedin.2905a74b.svg",H=(i(89),function(e){return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"main-layout flex-between",children:[Object(m.jsx)("div",{children:"Zina Michailov \xa9 2021"}),Object(m.jsxs)("div",{className:"flex",children:[Object(m.jsx)("a",{className:"flex-center",href:"mailto:zinam84@gmail.com",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADK0lEQVRoge3ZX6hlYxjH8WftxkxHoYw7f2ZGQlLKSIOmucGkKFGS3CjKFYVmNDU1iiaSzIVixDm5oBS5QJSMiyk3ROZiFCUX/mV01HEYmjkfF+vdrJa11v4/a2/t783e632f531/v7XaT+96dsScOXPmzJkzPBm0LWIUsizLIiI6bQsZF52I+LZtESNwtPulExFXRcTh9rQMzYcRcW33opNl2bGIuD4iXm1N0uAsRcRNWZb9+s8I7kufGfabbtawp6B9V9EIHEAnXd+DP9tS2sBx3JU0rsNzFCpuIfBNnJ7GrsPPp1xqPcewPWk7A+90J6qMwOc4P41fhC9PmdR6vsLFSdN5+Kw4WWcEvsOVae5sfDRxqfUcxjlJy9X4sRzQZARWcEua34BXJia1niWsTxpuw2pVUC8jcAIPFCrabnnVmDRr2Ics7f0gTtYF92OkywtYl2LvwO/jUFvDcdxdrkxNDGIE3sOZKf4a/DS01Hp+wY6qytTEoEbgC1yQci7E0YGl1vM1Lklrn6tUmZoYxgh5RdtaqGiHBsj9FB/gj9L4J9hYqEw/DCJoWCPwG25Nueux2GfexylnATfgtTS+gu0aKlMToxghryIPFdbYo3dFOyHd+UIl7P6YVzVUpiZGNdLlRZyW1rld7zt6ZxSQmzkwioBxGYH3cVZaa5vmivaudDgtmXl22M3HaQSOYHNab7P8aFHHkmozzwyz8biNkJ+DtqU1O7gRT+BJ7MBO/1as/5hJeU8PuukkjMBf2IuFCpELeL0Qu6jazFODbNjNm1Q7aDki3oqIIxGxISIujYibI2JjKW4xIu7NsmytZGZ/RDzaz0bddtC4n8gw1D2Zx/pJLiZMAy+rNrOvV+K0GaHezO6mpGk0whBmptUIvKTazK6q4Gk2Qr2ZR8qB026EejMPF4NmwQgclN7dG57MzlkwQt4zqDLzeJpfxZZZ+aPnYETcn2WZiAhsiohDEbElzU93A17+6ruc7vzz8lPyJnxTemrft621J9gq77CQNwrLJmbDSEQErtDcVH+jbY19g8tVd1iWpVbSzCDvxi/J/2ZYwdu4rG1dc/7X/A3vRjgKikZKvQAAAABJRU5ErkJggg==",alt:"email"})}),Object(m.jsx)("a",{className:"flex-center",href:"https://github.com/ZinaMichailov",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:w,alt:"github"})}),Object(m.jsx)("a",{className:"flex-center",href:"https://www.linkedin.com/in/zina-michailov/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:J,alt:"linkedin"})})]})]})})});function V(){return Object(m.jsx)(o.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{component:R,path:"/"})}),Object(m.jsx)(H,{})]})})}var Z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,103)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root")),Z()}},[[93,1,2]]]);
//# sourceMappingURL=main.48230a32.chunk.js.map