"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return a?o.createElement(f,c(c({ref:t},i),{},{components:a})):o.createElement(f,c({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,c[1]=l;for(var u=2;u<r;u++)c[u]=a[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},51370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={layout:"post",title:"Apache CloudStack LTS Maintenance Release 4.17.2.0",authors:["rohit"],tags:["announcement"],slug:"apache-cloudstack-lts-release-41720"},c=void 0,l={permalink:"/blog/apache-cloudstack-lts-release-41720",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2022-12-16-apache-cloudstack-lts-release-41720.md",source:"@site/blog/2022-12-16-apache-cloudstack-lts-release-41720.md",title:"Apache CloudStack LTS Maintenance Release 4.17.2.0",description:"Apache CloudStack LTS Maintenance Release 4.17.2.0",date:"2022-12-16T00:00:00.000Z",formattedDate:"December 16, 2022",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!0,authors:[{name:"Rohit Yadav",title:"PMC Member",url:"https://github.com/rohityadavcloud",imageURL:"https://github.com/rohityadavcloud.png",key:"rohit"}],frontMatter:{layout:"post",title:"Apache CloudStack LTS Maintenance Release 4.17.2.0",authors:["rohit"],tags:["announcement"],slug:"apache-cloudstack-lts-release-41720"},prevItem:{title:"Apache CloudStack Year in Review - 2022",permalink:"/blog/year-in-review-2022"},nextItem:{title:"Apache CloudStack Use Cases, Benefits and its Projected Future",permalink:"/blog/apache-cloudstack-use-cases-benefits"}},s={authorsImageUrls:[void 0]},u=[{value:"Apache CloudStack LTS Maintenance Release 4.17.2.0",id:"apache-cloudstack-lts-maintenance-release-41720",level:2},{value:"Documentation",id:"documentation",level:3},{value:"Downloads",id:"downloads",level:3}],i={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{href:"/blog/apache-cloudstack-lts-release-41720"},(0,n.kt)("img",{src:"/img/imported/73240143-71f2-48f9-b80e-650df203613d",width:"100%"})),(0,n.kt)("h2",{id:"apache-cloudstack-lts-maintenance-release-41720"},"Apache CloudStack LTS Maintenance Release 4.17.2.0"),(0,n.kt)("p",null,"The Apache CloudStack project is pleased to announce the release of CloudStack 4.17.2.0."),(0,n.kt)("p",null,"The CloudStack 4.17.2.0 release is a maintenance release as part of its 4.17.x  LTS branch and contains more than 20 fixes since the CloudStack 4.17.1.0 release."),(0,n.kt)("p",null,"CloudStack LTS branches are supported for 18 months and will receive updates for the first 12 months and only security updates in the last 6 months."),(0,n.kt)("p",null,"Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS) software platform that allows users to build feature-rich public and private cloud environments. CloudStack includes an intuitive user interface and rich API for managing the compute, networking, software, and storage resources. The project became an Apache top-level project in March, 2013."),(0,n.kt)("p",null,"ore information about Apache CloudStack can be found at:"),(0,n.kt)("a",{href:"https://cloudstack.apache.org/"},"https://cloudstack.apache.org"),(0,n.kt)("h3",{id:"documentation"},"Documentation"),(0,n.kt)("p",null,"What's new in  CloudStack 4.17.2.0:"),(0,n.kt)("a",{href:"https://docs.cloudstack.apache.org/en/4.17.2.0/releasenotes/about.html"},"https://docs.cloudstack.apache.org/en/4.17.2.0/releasenotes/about.html"),(0,n.kt)("p",null,"The 4.17.2.0 release notes include a full list of issues fixed, as well as upgrade instructions from previous versions of Apache CloudStack, and can\nbe found at:"),(0,n.kt)("a",{href:"https://docs.cloudstack.apache.org/en/4.17.2.0/releasenotes/"},"https://docs.cloudstack.apache.org/en/4.17.2.0/releasenotes/"),(0,n.kt)("p",null,"The official installation, administration, and API documentation for each of the releases are available on our documentation page:"),(0,n.kt)("a",{href:"https://docs.cloudstack.apache.org/"},"https://docs.cloudstack.apache.org/"),(0,n.kt)("h3",{id:"downloads"},"Downloads"),(0,n.kt)("p",null,"The official source code for the 4.17.2.0 release can be downloaded from our downloads page:"),(0,n.kt)("a",{href:"https://cloudstack.apache.org/downloads.html"},"https://cloudstack.apache.org/downloads.html"),(0,n.kt)("p",null,"In addition to the official source code release, individual contributors have also made convenience binaries available on the Apache CloudStack download page, and can be found at:"),(0,n.kt)("a",{href:"https://download.cloudstack.org/el/7/"},"https://download.cloudstack.org/el/7/"),(0,n.kt)("a",{href:"https://download.cloudstack.org/el/8/"},"https://download.cloudstack.org/el/8/"),(0,n.kt)("a",{href:"https://download.cloudstack.org/ubuntu/dists/"},"https://download.cloudstack.org/ubuntu/dists/"),(0,n.kt)("a",{href:"https://www.shapeblue.com/packages/"},"https://www.shapeblue.com/packages/"))}p.isMDXComponent=!0}}]);