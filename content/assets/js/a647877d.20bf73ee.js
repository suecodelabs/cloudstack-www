"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={layout:"post",title:"Announcing Apache CloudStack 4.2.1",tags:["announcement"],slug:"announcing_apache_cloudstack_4_21"},l=void 0,c={permalink:"/blog/announcing_apache_cloudstack_4_21",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2014-01-10-announcing_apache_cloudstack_4_21.md",source:"@site/blog/2014-01-10-announcing_apache_cloudstack_4_21.md",title:"Announcing Apache CloudStack 4.2.1",description:"The Apache CloudStack project is pleased to announce the 4.2.1 release of the CloudStack cloud orchestration platform. This is a minor release of the 4.2.0 branch which released on Oct 1, 2013. The 4.2.1 release contains more than 150 bug fixes. As a bug fix release, no new features are included in 4.2.1.",date:"2014-01-10T00:00:00.000Z",formattedDate:"January 10, 2014",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Announcing Apache CloudStack 4.2.1",tags:["announcement"],slug:"announcing_apache_cloudstack_4_21"},prevItem:{title:"Realhostip Service is Being Retired",permalink:"/blog/realhostip_service_is_being_retired"},nextItem:{title:"[CVE-2013-6398] CloudStack Virtual Router stop/start modifies firewall rules allowing additional access",permalink:"/blog/cve_2013_6398_cloudstack_virtual"}},i={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Apache CloudStack project is pleased to announce the 4.2.1 release of the CloudStack cloud orchestration platform. This is a minor release of the 4.2.0 branch which released on Oct 1, 2013. The 4.2.1 release contains more than 150 bug fixes. As a bug fix release, no new features are included in 4.2.1."),(0,r.kt)("p",null,"The 4.2.1 release includes fixes for a number of issues; including problems with Xenserver VMSnapshots, UCS, device ID for Xen, configurable option to choose single Vs multipart upload for S3 API, allowing network with public IP Address without needing SourceNAT, and documentation fixes."),(0,r.kt)("p",null,"As a minor release it is a simple upgrade from 4.2.0 with no architectural changes. CloudStack Management Servers Services, and all SystemVMs will require a restart."),(0,r.kt)("p",null,"This release also addresses two security issues CVE-2013-6398 and CVE-2014-0031"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Documentation")),(0,r.kt)("p",null,"The 4.2.1 release notes includes full list of corrected issues as well as upgrade instructions from previous versions of Apache CloudStack. Please see the ",(0,r.kt)("a",{href:"http://cloudstack.apache.org/docs/en-US/Apache_CloudStack/4.2.1/html/Release_Notes/index.html"},"Release Notes")," for a full list of corrected issues and upgrade instructions."),(0,r.kt)("p",null,"The official installation, administration and API documentation for each release are available on our ",(0,r.kt)("a",{href:"http://cloudstack.apache.org/docs"},"Documentation Page"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Downloads")),(0,r.kt)("p",null,"The official source code for the 4.2.1 release can be downloaded from our ",(0,r.kt)("a",{href:"http://cloudstack.apache.org/downloads.html"},"Downloads Page"),"."),(0,r.kt)("p",null,"In addition to the official source code release, individual contributors have also made convenience binaries in the form or RPM and Deb packages available from the download page. "),(0,r.kt)("p",null,(0,r.kt)("strong",null,"About Apache CloudStack")),(0,r.kt)("p",null,"Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS) software platform that allows users to build feature-rich public and private cloud environments. CloudStack includes an intuitive user interface and rich APIs for managing the compute, networking, software, and storage infrastructure resources. The project became an Apache top level project in March 2013."),(0,r.kt)("p",null,"For additional marketing or communications information, please contact the ",(0,r.kt)("a",{href:"mailto:marketing@cloudstack.apache.org"},"marketing mailing list"),"."),(0,r.kt)("p",null,"To learn how to join and contribute to the Apache CloudStack community please visit our ",(0,r.kt)("a",{href:"http://cloudstack.apache.org"},"website"),"."))}d.isMDXComponent=!0}}]);