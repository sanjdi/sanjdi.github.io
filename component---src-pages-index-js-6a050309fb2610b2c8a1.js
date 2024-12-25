"use strict";(self.webpackChunksanjeera_dev=self.webpackChunksanjeera_dev||[]).push([[293],{9324:function(e,t,a){a.d(t,{A:function(){return c}});var i=a(6540),n=a(4810);const l=a(4472).default.section.withConfig({displayName:"BannerModuleStyles",componentId:"sc-1pohky3-0"})(["height:100vh;position:relative;padding:30px var(--borderSpacing);.container{height:100%;display:flex;align-items:flex-end;justify-content:flex-start;}.gradient,.banner__image{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;}.gradient{background:radial-gradient( at bottom left,rgba(0,0,0,0.5),rgba(0,0,0,0) );}.banner__content{position:relative;z-index:2;min-height:33vh;width:100%;max-width:700px;@media (min-width:768px){width:66vw;}h1,h2{text-shadow:var(--textShadow);}h1{border-bottom:2px solid rgba(255,255,255,0.15);display:inline-block;}h2{font-size:var(--h5);font-weight:400;}h1,.price{margin-top:0;font-size:var(--bannerTitle);}}.banner__btns{display:flex;gap:var(--gap);}"]);var r=a(2532),o=a(2719);var c=e=>{let{children:t,title:c,subTitle:s,price:d,enquire:m}=e;return i.createElement(i.Fragment,null,i.createElement(l,null,t||i.createElement(r.S,{className:"banner__image",imgClassName:"banner__image--content",src:"../../../static/macbook-color.jpg",alt:"Banner Image",layout:"fullWidth",placeholder:"blurred",__imageData:a(1629)}),i.createElement("div",{className:"container"},i.createElement("div",{className:"banner__content"},c&&i.createElement("h1",null,c,i.createElement("span",{style:{color:"var(--primary)"}},".")),s&&i.createElement("h2",null,s),i.createElement("div",{className:"banner__btns"},m&&i.createElement(o.A,{className:"btn",text:"Enquire Now",as:n.N_,to:"/contact"}),i.createElement(o.A,{text:"Learn More",as:n.N_,to:"#topContent"})))),i.createElement("div",{className:"gradient"})),i.createElement("span",{id:"topContent"}))}},2719:function(e,t,a){a.d(t,{A:function(){return r}});var i=a(6540),n=a(9644);const l=a(4472).default.button.withConfig({displayName:"ButtonStyles",componentId:"sc-1xh9yft-0"})(['color:#fff;background-color:transparent;font-family:"Heebo",sans-serif;border:0;text-decoration:none;padding:0;transition:color 0.3s ease;text-transform:capitalize;font-size:var(--p);font-weight:700;position:relative;padding-bottom:15px;align-self:flex-start;display:inline-flex;align-items:center;&::after{content:"";display:block;position:absolute;height:3px;left:0;right:0;bottom:8px;background-color:var(--primary);transition:left 0.3s ease;}&:focus{color:var(--primary);}@media (hover:hover){&:hover{cursor:pointer;color:var(--primary);&::after{left:100%;}}}']);var r=e=>{let{text:t,to:a,as:r,arrow:o}=e;return i.createElement(l,{className:"btn",as:r,to:a},t,o||a?i.createElement(n.a1M,{style:{marginLeft:"10px"}}):null)}},2430:function(e,t,a){var i=a(6540),n=a(4810),l=a(2719),r=a(2532),o=a(7332);t.A=e=>{let{feature:t}=e;const{gatsbyPath:a,headerImage:c,title:s,introduction:d}=t,m=(0,r.c)(c);return i.createElement(o.s,null,i.createElement(n.N_,{to:a},i.createElement(r.G,{className:"features__item--img",image:m,alt:"Project Image"}),s&&d&&i.createElement("div",{className:"features__item--content"},s&&i.createElement("h4",null,s),d&&i.createElement("p",null,d),i.createElement(l.A,{text:"Read More",as:"span",arrow:!0}))))}},582:function(e,t,a){var i=a(6540),n=a(4810),l=a(7332),r=a(2430),o=a(4451),c=a(2719);t.A=e=>{let{title:t,introduction:a}=e;const s=(0,o.A)();return i.createElement(l.p,{className:"section"},t||a?i.createElement("div",{className:"container container__tight"},i.createElement("div",{className:"intro__area"},t&&i.createElement("h2",null,t),a&&i.createElement("p",null,a))):null,i.createElement("div",{className:"container container__tight container__scroll"},s.map(((e,t)=>i.createElement(r.A,{feature:e,key:t})))),i.createElement("div",{className:"container container__tight learn__more"},i.createElement(c.A,{as:n.N_,to:"/projects",text:"All Projects"})))}},7332:function(e,t,a){a.d(t,{p:function(){return n},s:function(){return l}});var i=a(4472);const n=i.default.section.withConfig({displayName:"FeaturesStyles__FeaturedProjectsStyles",componentId:"sc-1in3gn0-0"})(["> div{&.container__scroll{gap:calc(var(--gap) / 2);padding-bottom:var(--gap);padding-left:var(--borderSpacing);padding-right:var(--borderSpacing);margin-left:calc(var(--borderSpacing) * -1);width:calc(100% + (var(--borderSpacing) * 2));@media (min-width:1200px){padding-bottom:0;width:100%;margin-left:auto;padding-left:0;padding-right:0;gap:var(--gap);}}}"]),l=i.default.aside.withConfig({displayName:"FeaturesStyles__FeaturedProjectStyles",componentId:"sc-1in3gn0-1"})(["min-height:408px;background-color:#000;flex:0 0 80%;overflow:hidden;scroll-snap-align:center;scroll-margin-left:25px;position:relative;border-radius:6px;border:2px solid rgba(255,255,255,0.15);transition:border-color 0.6s ease,box-shadow 0.6s ease;@media (min-width:414px){min-height:434px;}@media (min-width:768px){min-height:500px;flex-basis:40%;}@media (min-width:1024px){min-height:600px;}@media (min-width:1200px){flex-basis:33.333%;flex-shrink:1;}.features__item--img{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;transition:transform 0.3s ease,opacity 0.3s ease;}.features__item--content{width:100%;position:absolute;z-index:2;padding:20px 10px;bottom:0;left:0;right:0;background:linear-gradient( 0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100% );@media (min-width:768px){padding:20px;}@media (min-width:1024px){padding:40px 20px;}@media (min-width:1200px){padding:50px 30px;}h4,p{text-shadow:var(--textShadow);}h4{color:#fff;}p{color:var(--bodyColor);}}&:hover{cursor:pointer;border-color:var(--primary);box-shadow:var(--boxShadow);.features__item--img{transform:scale(1.1);opacity:0.5;}}"])},31:function(e,t,a){a.d(t,{A:function(){return d}});var i=a(6540),n=a(4810),l=a(7754);var r=e=>{let{children:t}=e;return i.createElement(l.j0,null,t)},o=a(7135);var c=()=>{const{allContentfulPost:{nodes:e}}=(0,n.GR)("2659547818");return e},s=a(2719);var d=e=>{let{title:t,introduction:a}=e;const l=c();return i.createElement("div",{className:"section"},i.createElement("div",{className:"container container__tight"},t||a?i.createElement("div",{className:"intro__area"},t&&i.createElement("h2",null,t,i.createElement("span",null,".")),a&&i.createElement("p",null,a)):null,i.createElement(r,null,l.map(((e,t)=>i.createElement(o.A,{key:t,node:e})))),i.createElement("div",{className:"learn__more"},i.createElement(s.A,{text:"All Blog Items",as:n.N_,to:"/blog"}))))}},7135:function(e,t,a){var i=a(6540),n=a(2719),l=a(7754);t.A=(e,t)=>{let{node:a}=e;const{title:r,gatsbyPath:o,introduction:c,createdAt:s}=a;return i.createElement(l.el,{key:t,to:o},i.createElement("h4",null,r),c&&i.createElement("p",null,c),i.createElement("div",{className:"blogitem__meta"},i.createElement(n.A,{as:"span",text:"Read More",arrow:!0}),i.createElement("p",null,s)))}},7754:function(e,t,a){a.d(t,{Df:function(){return o},el:function(){return r},j0:function(){return l}});var i=a(4472),n=a(4810);const l=i.default.section.withConfig({displayName:"PostStyles__PostItemsStyles",componentId:"sc-17x225p-0"})(["display:flex;flex-wrap:wrap;width:100%;gap:calc(var(--gap) / 2);@media (min-width:1200px){gap:var(--gap);}@media (min-width:1200px){gap:var(--gap);}"]),r=(0,i.default)(n.N_).withConfig({displayName:"PostStyles__PostItemStyles",componentId:"sc-17x225p-1"})(["flex:0 0 100%;border:2px solid rgba(255,255,255,0.15);border-radius:6px;padding:20px 10px;display:flex;flex-direction:column;color:#fff;text-decoration:none;transition:border-color 0.6s ease,background-color 0.6s ease,box-shadow 0.6s ease;&:first-child{margin-top:0;}@media (min-width:768px){flex-basis:calc(50% - 20px);padding-left:20px;padding-right:20px;}@media (min-width:1024px){flex-basis:calc(33.333% - 27px);padding-top:40px;padding-bottom:40px;}@media (min-width:1200px){width:calc(33.333% - 54px);padding:50px 30px;}h4{margin-top:0;}p{font-size:var(--p);}> p{margin-bottom:var(--gap);}a{text-decoration:none;color:#fff;}.blogitem__meta{display:flex;flex-direction:column;align-items:flex-start;gap:calc(var(--gap) / 2);margin-top:auto;p{color:#777;font-weight:700;font-size:16px;}> *{&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}}&:hover{color:#fff;border-color:var(--primary);background-color:#151515;box-shadow:var(--boxShadow);}"]),o=i.default.article.withConfig({displayName:"PostStyles__PostSingleStyles",componentId:"sc-17x225p-2"})(["padding:var(--sectionMargin) var(--borderSpacing) 0 var(--borderSpacing);max-width:750px;margin:0 auto;box-sizing:content-box;.blogsingle{&__title{font-size:var(--h2);font-weight:700;}&__content{border-top:2px solid var(--primary);padding-top:calc(var(--gap));}&__back{padding-top:var(--gap);}}"])},2429:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var i=a(6540),n=a(5922),l=a(2471),r=a(9324),o=a(2719),c=a(4472);const s=c.default.section.withConfig({displayName:"BasicTextModuleStyles",componentId:"sc-1047oee-0"})([".container{@media (min-width:768px){> div{width:66.666%;max-width:700px;}}}"]);var d=a(4810);var m=e=>{let{title:t,content:a,link:n,linkText:l}=e;return i.createElement(s,{className:"section"},i.createElement("div",{className:"container container__tight"},i.createElement("div",null,t&&i.createElement("h2",null,t),a&&i.createElement("p",{style:{marginBottom:"60px"}},a),i.createElement(o.A,{text:l,as:d.N_,to:n}))))},A=a(2532);const p=c.default.section.withConfig({displayName:"SkillsModuleStyles",componentId:"sc-h40m85-0"})(["background-color:#000;position:relative;.skills__image--bg,.skills__image--overlay{position:absolute;top:0;left:0;right:0;bottom:0;}.skills__image--bg{width:100%;height:100%;object-fit:cover;object-position:center;}.skills__image--overlay{background-color:rgba(0,0,0,0.90);}.skills__divider{font-size:25px;color:var(--primary);margin-top:16px;@media (min-width:1024px){font-size:35px;}}.skills__title{position:relative;display:flex;flex-direction:column;gap:var(--gap);align-items:left;}> .container{position:relative;display:flex;flex-direction:column;gap:var(--gap);align-items:center;color:var(--bodyColor);@media (min-width:768px){flex-direction:row;align-items:start;justify-content:center;}@media (min-width:1024px){gap:calc(var(--gap) * 2);}@media (min-width:1200px){gap:calc(var(--gap) * 4);}}}"]),g=c.default.aside.withConfig({displayName:"SkillsModuleStyles__SkillsStyles",componentId:"sc-h40m85-1"})(["max-width:275px;text-align:center;margin-bottom:24px;@media (min-width:414px){max-width:325px;}@media (min-width:768px){flex:1 1 50%;}@media (min-width:1024px){max-width:400px;}h3{display:inline-block;border-bottom:2px solid rgba(255,255,255,0.15);margin-bottom:-32px;font-weight:300;font-size:24px;}p{margin-bottom:0;}.gatsby-image-wrapper{width:170px;height:45px;display:flex;justify-content:center;align-items:center;margin:0 auto calc(var(--gap) / 2) auto;@media (min-width:375px){width:200px;}@media (min-width:1024px){width:300px;height:60px;}img{width:100%;height:100%;object-fit:contain !important;object-position:center;}}"]);var f=a(9644),h=a(4506);var b=e=>{let{title:t,level:a}=e;return i.createElement("div",{className:"skill-bar"},i.createElement("div",{className:"title"},t),i.createElement("div",{className:"progress-container"},(0,h.A)(Array(5)).map(((e,t)=>i.createElement("div",{key:t,className:"progress-bar "+(t<a?"active":"")})))))};const u={frontend:[{title:"React.js",level:4},{title:"Next.js",level:3},{title:"HTML5",level:4},{title:"CSS",level:4},{title:"Material UI",level:3},{title:"styled-components",level:3}],backend:[{title:"Node.js",level:3},{title:"NestJS",level:3},{title:"REST Api",level:4},{title:"GraphQL",level:3},{title:"DynamoDB",level:3},{title:"MongoDB",level:4}],databases:[{title:"DynamoDB",level:3},{title:"MongoDB",level:4},{title:"PostgreSQL",level:3},{title:"Oracle DB",level:3}],cloud:[{title:"AWS",level:3},{title:"Azure",level:2},{title:"Docker",level:4},{title:"CI / CD",level:3}],tools:[{title:"Git",level:4},{title:"Contentful CMS",level:4},{title:"Postman / Apollo",level:4},{title:"Salesforce CRM",level:2},{title:"JIRA / Confluence",level:4}],methodologies:[{title:"Agile (Scrum / Kanban)",level:4},{title:"Application integration",level:3},{title:"Waterfall",level:3}]};var x=e=>{let{title:t,type:a}=e;const n=u[a];return i.createElement(g,null,t&&i.createElement("h3",null,t),i.createElement("div",null,n.map(((e,t)=>i.createElement(b,{title:e.title,level:e.level,key:t})))))};var v=()=>i.createElement(p,{className:"section section__padding_half"},i.createElement(A.S,{className:"skills__image--bg",src:"../../../static/abstract-building.jpg",alt:"Skills Module",layout:"constrained",placeholder:"tracedSVG",__imageData:a(3234)}),i.createElement("div",{className:"skills__image--overlay"}),i.createElement("div",{className:"skills__title"},i.createElement("div",{className:"intro__area"},i.createElement("h2",null,"Skills"))),i.createElement("div",{className:"container container__tight"},i.createElement(x,{title:"Frontend Development",type:"frontend"}),i.createElement("span",{className:"skills__divider"},i.createElement(f.OZi,null)),i.createElement(x,{title:"Backend Development",type:"backend"}))),w=a(582),E=a(31);var _=()=>i.createElement(i.Fragment,null,i.createElement(l.A,{title:"Home"}),i.createElement(n.A,null,i.createElement(r.A,{title:"Welcome to my showcase",subTitle:"I am Sanjeera Dissanayake."}),i.createElement(m,{title:"A multi-disciplinary Full Stack Developer",content:"with over 10 years experience in front-end development and  4 years of back-end development..",link:"/projects",linkText:"View Projects"}),i.createElement(v,null,i.createElement(x,{title:"The Title",content:"The content"})),i.createElement(w.A,{title:"Featured Projects",introduction:"Here are some of my projects."}),i.createElement(E.A,{title:"Latest Blog Posts",introduction:"Here are some of my blogs."})))},1629:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4DaNM5If/8QAGBABAQADAAAAAAAAAAAAAAAAAQACAxH/2gAIAQEAAQUCDtlr4QpO3JL/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAYEAADAQEAAAAAAAAAAAAAAAAAEBEBIf/aAAgBAQAGPwItxcIv/8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAECFh/9oACAEBAAE/IWFCbDlHWUeRr//aAAwDAQACAAMAAAAQmw//xAAWEQADAAAAAAAAAAAAAAAAAAABEGH/2gAIAQMBAT8QFX//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPxCH/8QAGxABAQADAAMAAAAAAAAAAAAAAREAITEQUZH/2gAIAQEAAT8QYxdssWYvU/RR+IeBKBPWJtB7Mduf/9k="},"images":{"fallback":{"src":"/static/2247c39f145df7505f72ce04ceaeef39/71357/macbook-color.jpg","srcSet":"/static/2247c39f145df7505f72ce04ceaeef39/982db/macbook-color.jpg 750w,\\n/static/2247c39f145df7505f72ce04ceaeef39/e4f86/macbook-color.jpg 1080w,\\n/static/2247c39f145df7505f72ce04ceaeef39/c255e/macbook-color.jpg 1366w,\\n/static/2247c39f145df7505f72ce04ceaeef39/71357/macbook-color.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/2247c39f145df7505f72ce04ceaeef39/b99ea/macbook-color.webp 750w,\\n/static/2247c39f145df7505f72ce04ceaeef39/acf6c/macbook-color.webp 1080w,\\n/static/2247c39f145df7505f72ce04ceaeef39/8245d/macbook-color.webp 1366w,\\n/static/2247c39f145df7505f72ce04ceaeef39/74526/macbook-color.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7078125}')},3234:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7c28e5696eb27affae765b6d60f487d9/b15f1/abstract-building.jpg","srcSet":"/static/7c28e5696eb27affae765b6d60f487d9/4f7c9/abstract-building.jpg 625w,\\n/static/7c28e5696eb27affae765b6d60f487d9/1b704/abstract-building.jpg 1250w,\\n/static/7c28e5696eb27affae765b6d60f487d9/b15f1/abstract-building.jpg 2500w","sizes":"(min-width: 2500px) 2500px, 100vw"},"sources":[{"srcSet":"/static/7c28e5696eb27affae765b6d60f487d9/dc158/abstract-building.webp 625w,\\n/static/7c28e5696eb27affae765b6d60f487d9/c47c6/abstract-building.webp 1250w,\\n/static/7c28e5696eb27affae765b6d60f487d9/6946a/abstract-building.webp 2500w","type":"image/webp","sizes":"(min-width: 2500px) 2500px, 100vw"}]},"width":2500,"height":1670}')}}]);
//# sourceMappingURL=component---src-pages-index-js-6a050309fb2610b2c8a1.js.map