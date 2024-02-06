"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6262],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},64278:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const r={layout:"post",title:"CloudStack and GitOps at Enterprise Scale \u2013 The Success of AT&T",tags:["case-studies"],authors:[],slug:"cloudstack-and-gitops-at-scale"},i=void 0,s={permalink:"/blog/cloudstack-and-gitops-at-scale",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2024-01-08-cloudstack-and-gitops-at-scale/index.md",source:"@site/blog/2024-01-08-cloudstack-and-gitops-at-scale/index.md",title:"CloudStack and GitOps at Enterprise Scale \u2013 The Success of AT&T",description:"AT&T is a provider of telecommunications, media, and technology",date:"2024-01-08T00:00:00.000Z",formattedDate:"January 8, 2024",tags:[{label:"case-studies",permalink:"/blog/tags/case-studies"}],hasTruncateMarker:!0,authors:[],frontMatter:{layout:"post",title:"CloudStack and GitOps at Enterprise Scale \u2013 The Success of AT&T",tags:["case-studies"],authors:[],slug:"cloudstack-and-gitops-at-scale"},prevItem:{title:"Apache CloudStack 4.19.0.0 Release",permalink:"/blog/cloudstack-4.19.0.0-release"},nextItem:{title:"CloudStack India User Group 2024",permalink:"/blog/india-user-group-2024"}},l={authorsImageUrls:[]},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/blog/cloudstack-and-gitops-at-scale"},(0,a.kt)("img",{src:o(55353).Z,title:"CSC",width:"1200",height:"629"}))),(0,a.kt)("h1",{id:"cloudstack-and-gitops-at-enterprise-scale--the-success-of-att"},"CloudStack and GitOps at Enterprise Scale \u2013 The Success of AT&T"),(0,a.kt)("p",null,"AT&T is a provider of telecommunications, media, and technology\nservices. The company offers wireless communications, data/broadband\nand internet services, local and long-distance telephone services,\ntelecommunications equipment, managed networking, and wholesale\nservices. AT&T is a 125+ year old telecommunications company based in\nDallas, Texas. Their main purpose is to create connection \u2013 a\nconnection to friends, family, work, commerce, education, health,\nentertainment and more by using advanced technology and delivering\nservices globally."),(0,a.kt)("p",null,"During the annual CloudStack Collaboration Conference 2023, Alex\nDometrius, Associate Director - Technology at AT&T, presented the talk\nCloudStack and GitOps at Enterprise Scale, where he outlined their\njourney with Apache CloudStack and the architecture they used to\nmanaged their CloudStack-based platform using GitOps."),(0,a.kt)("p",null,"In the spirit of continuous improvement, Alex\u2019s team looked for an\nopportunity to improve on how they do infrastructure provisioning\nwithin the enterprise ultimately leading to deployment of CloudStack."),(0,a.kt)("p",null,"After reviewing a few different cloud management platforms, AT&T\ndecided to deploy CloudStack as a centrally-managed and\ncentrally-supported IaaS platform, because if its multi-tenancy,\nallowing the application teams within the business to maintain their\nown-dedicated environments. Other reasons to choose CloudStack were\nthe CloudStack Terraform Provider and Native APIs, over-provisioning\ncapabilities and ability to manage the CloudStack-based platform using\nGitOps."),(0,a.kt)("p",null,"In their talk during the CloudStack Collaboration Conference, Alex\nDometrius shares more about the issued solved and the success with\nCloudStack. As a follow up of their talk at the event, we asked a few\nquestions to the AT&T team, to understand more about their choice of\ntechnology and learn for their experience of managing infrastructure\nat a large-scale and enterprise level."),(0,a.kt)("iframe",{width:"100%",height:"480p",src:"https://www.youtube.com/embed/Bc1a8YHdEq4?si=V7QZM660_YS9pjKp",title:"YouTube video player",frameborder:"0",allow:"accelerometer;\nautoplay; clipboard-write; encrypted-media; gyroscope;\npicture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("div",{class:"text-center"},"Alex Dometrius, Associate Director - Technology at AT&T, presents at CloudStack Collaboration Conference 2023."),(0,a.kt)("strong",null,"Why AT&T chose open-source technologies?"),(0,a.kt)("p",null,"Our team has a long history of consuming and contributing to\nopen-source projects and we strive to use open-source technology\nwherever possible. At risk of stating the clich\xe9 benefits of using\nopen-source software, there are several reasons why we lean towards\nopen-source solutions. Cost of entry is generally lower when deploying\nopen-source which allows us to deliver solutions to the business much\nfaster. These costs can also remain lower if there is an active\nuser/contributor community like what we found with CloudStack."),(0,a.kt)("strong",null,"During your talk, you mentioned running PoCs of CloudStack and other technologies. What do you recommended to be tested during a PoC?"),(0,a.kt)("p",null,"Why you chose CloudStack?\xa0  Each use case is different obviously. The\nscale of the implementation, how users will interact with the\nplatform, how migration from present state to future state can be\ncarried out when deploying a new cloud platform are all items we took\ninto consideration. As mentioned, CloudStack checked several of the\nrequirements we had: multi-tenancy capabilities, support for\ninfrastructure as code, project quota controls, an active open-source\ncommunity, etc."),(0,a.kt)("strong",null,"How does CloudStack fit with the other technologies AT&T uses internally?"),(0,a.kt)("p",null,"CloudStack\u2019s ability to support VMWare was another reason we chose to\ndeploy it. We have an existing VMWare footprint and we chose\nCloudStack as a mechanism to help continue to support VMWare workloads\nwhile also moving to a KVM-focused VM platform. For our team, it was\nless about how CloudStack fit into our existing technology stack, as\nthis stack has a lot of legacy, home-grown tools, and more about the\ncapabilities CloudStack will provide as an enabler for us to move to a\nmore modern private cloud platform."),(0,a.kt)("strong",null,"Do you run your datacenter ipv4 or ipv4/ipv6 or ipv6 only?"),(0,a.kt)("p",null,"Both ipv4 and ipv6. "),(0,a.kt)("strong",null,"Why don\u2019t you push back your container image cloudstack mgmt to the community? Do you have plans to contribute to the community?"),(0,a.kt)("p",null,"We have already begun contributing back to the community as mentioned\nwith our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack/pull/7889"},"PR for fiber channel multi-path for\nKVM"),". We will look at\nwhat makes sense to contribute regarding the cloudstack management\ncontainer."),(0,a.kt)("strong",null,"What workloads are managed by CloudStack?"),(0,a.kt)("p",null,"Our expectation is essentially all workloads in the enterprise\ncan/could be managed with CloudStack. Web applications, Kubernetes\nclusters, databases, etc."),(0,a.kt)("h4",null,"More about AT&T: ",(0,a.kt)("a",{href:"https://www.att.com"},"https://www.att.com")))}p.isMDXComponent=!0},55353:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/banner-9480f9285440863dfe7769e74c41ba98.jpg"}}]);