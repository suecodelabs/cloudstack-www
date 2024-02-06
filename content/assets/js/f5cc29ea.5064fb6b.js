"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8634],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>h});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=c(l),d=n,h=k["".concat(i,".").concat(d)]||k[d]||p[d]||o;return l?a.createElement(h,r(r({ref:t},u),{},{components:l})):a.createElement(h,r({ref:t},u))}));function h(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=l.length,r=new Array(o);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[k]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=l[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},48688:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=l(87462),n=(l(67294),l(3905));const o={layout:"post",title:"Apache CloudStack Weekly News - 4 September 2013",slug:"apache_cloudstack_weekly_news_42"},r=void 0,s={permalink:"/blog/apache_cloudstack_weekly_news_42",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2013-09-05-apache_cloudstack_weekly_news_42.md",source:"@site/blog/2013-09-05-apache_cloudstack_weekly_news_42.md",title:"Apache CloudStack Weekly News - 4 September 2013",description:"Welcome back to another exciting issue of the Apache CloudStack Weekly News. This week, 4.2.0 enters it's fourth round of voting, we welcome several new committers and look at some of the major discussions on the Apache CloudStack mailing lists, and much more.",date:"2013-09-05T00:00:00.000Z",formattedDate:"September 5, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 4 September 2013",slug:"apache_cloudstack_weekly_news_42"},prevItem:{title:"Announcing Apache CloudStack CloudMonkey 5.0.0!",permalink:"/blog/announcing_apache_cloudstack_cloudmonkey_5"},nextItem:{title:"Announcing the CloudStack Collaboration Conference - Europe",permalink:"/blog/announcing_the_cloudstack_collaboration_conference"}},i={authorsImageUrls:[]},c=[],u={toc:c},k="wrapper";function p(e){let{components:t,...l}=e;return(0,n.kt)(k,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome back to another exciting issue of the ",(0,n.kt)("a",{href:"http://cloudstack.apache.org",class:"external-link",rel:"nofollow"},"Apache CloudStack")," Weekly News. This week, 4.2.0 enters it's fourth round of voting, we welcome several new committers and look at some of the major discussions on the Apache CloudStack mailing lists, and much more. "),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-4September2013-MajorDiscussions"}),"Major Discussions"),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-4September2013-4.2isNowbeingVotedOn"}),"4.2 is Now being Voted On"),(0,n.kt)("p",null,"The fourth round of voting is now ",(0,n.kt)("a",{href:"http://markmail.org/message/xxfksrwvabkip2lb",class:"external-link",rel:"nofollow"},"open")," on the 4.2 release. This release is full of new features, fixes and thousands of hours of work from everyone in the community. It's important to test and cast your vote on the release. Remember that all members of the community are ",(0,n.kt)("a",{href:"http://cloudstack.apache.org/bylaws.html",class:"external-link",rel:"nofollow"},"eligible to cast a vote")," and note any issues that they have with the current release candidate. "),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-4September2013-4.2IssuesClosure"}),"4.2 Issues Closure"),(0,n.kt)("p",null,"Sudha Ponnaganti has throughout the 4.2 put ",(0,n.kt)("a",{href:"http://markmail.org/message/pwmlzcq7nwtcfdg5",class:"external-link",rel:"nofollow"},"together a list")," of the current blocker and critical issues that need to be reviewed. If you have issues that have been resolved please review, test, and close out please. "),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-4September2013-HighQualityDocumentation"}),"High Quality Documentation"),(0,n.kt)("p",null,"For some time now there has been discussion around a possible replacement to our current use DocBook for our primary document editor. Sebastien Goasguen started a ",(0,n.kt)("a",{href:"http://markmail.org/message/5z2umxi3whcyqddy",class:"external-link",rel:"nofollow"},"discussion")," to look at ",(0,n.kt)("a",{href:"http://daringfireball.net/projects/markdown/",class:"external-link",rel:"nofollow"},"Markdown by Daring Fireball"),". With there being concern about how to create and maintain high quality documentation, this is an important thread to participate in for anyone interested in the release documents. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",null,"After seeing lots of frustrated people with folks I decided to try something out with markdown."),(0,n.kt)("p",null,"I used pandoc to convert some docbook files to markdown and I used a structure for a book based on 'The little mongodb' book.",(0,n.kt)("br",null),"We can generate epub and pdf using latex."),(0,n.kt)("p",null,"See: ",(0,n.kt)("a",{href:"https://github.com/runseb/cloudstack-books",class:"external-link",rel:"nofollow"},"link")),(0,n.kt)("p",null,'There are two "books" aimed at being step by step recipes. Not long, not convoluted, single OS, etc\u2026simple step by step.'),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/runseb/cloudstack-books/blob/master/en/clients.markdown",class:"external-link",rel:"nofollow"},"link"),(0,n.kt)("br",null),(0,n.kt)("a",{href:"https://github.com/runseb/cloudstack-books/blob/master/en/installation.markdown",class:"external-link",rel:"nofollow"},"link")),(0,n.kt)("p",null,"I am still sanitizing the installation one based on 4.2 ."),(0,n.kt)("p",null,"Comments, flames ?")),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-4September2013-CloudStackPlanet"}),"CloudStack Planet"),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-4September2013-SpeakinginTechPodcastTheRegister"}),"Speaking in Tech Podcast - The Register"),(0,n.kt)("p",null,"Aaron Delp joined in as a part of talking cloud and especially CloudStack as part of an ",(0,n.kt)("a",{href:"http://markmail.org/message/ddyi72tzrfhcvycr",class:"external-link",rel:"nofollow"},"interview with The Register"),' and their "Speaking in Tech" podcast series. '),(0,n.kt)("p",null,"Aaron's section on ACS is from 17:45 to 26:00 - ",(0,n.kt)("a",{href:"http://www.theregister.co.uk/2013/08/01/speaking_in_tech_episode_69/",class:"external-link",rel:"nofollow"},"http://www.theregister.co.uk/2013/08/01/speaking_in_tech_episode_69/")),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-4September2013-CloudStackAppliancesReleased"}),"CloudStack Appliances Released"),(0,n.kt)("p",null,"Ilya Musayev a committer of the ACS project and founder of CloudSands project has recently ",(0,n.kt)("a",{href:"http://markmail.org/message/cumk7jl2lt2e35jg",class:"external-link",rel:"nofollow"},"announced the release")," of a set of pre-built management server appliances available for open use based off the ACS 4.1.1 code base. There are appliances for VMware, Xen and KVM hypervisors. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",null,"Objective: Speed up the Apache CloudStack adoption by abstracting the need of going through install process and using pre-installed package instead. Especially useful for a quick POC."),(0,n.kt)("p",null,"vSphere:",(0,n.kt)("br",null),"Short URL: ",(0,n.kt)("a",{href:"http://s.apache.org/vapp-acs411-vsphere",class:"external-link",rel:"nofollow"},"link"),(0,n.kt)("br",null),"Long URL: ",(0,n.kt)("a",{href:"http://download.cloudsand.com/appliances/cloudstack/centos6.4-x86_64-cloudstack-4.1.1.ova",class:"external-link",rel:"nofollow"},"link")),(0,n.kt)("p",null,"KVM:",(0,n.kt)("br",null),"Short URL: ",(0,n.kt)("a",{href:"http://s.apache.org/vapp-acs411-kvm",class:"external-link",rel:"nofollow"},"link"),(0,n.kt)("br",null),"Long URL: ",(0,n.kt)("a",{href:"http://download.cloudsand.com/appliances/cloudstack/centos6.4-x86_64-cloudstack-4.1.1.qcow2.bz2",class:"external-link",rel:"nofollow"},"link")),(0,n.kt)("p",null,"XEN:",(0,n.kt)("br",null),"Short URL: ",(0,n.kt)("a",{href:"http://s.apache.org/vapp-acs411-xen",class:"external-link",rel:"nofollow"},"link"),(0,n.kt)("br",null),"Full URL: ",(0,n.kt)("a",{href:"http://download.cloudsand.com/appliances/cloudstack/centos6.4-x86_64-cloudstack-4.1.1.vhd.bz2",class:"external-link",rel:"nofollow"},"link")),(0,n.kt)("p",null,"Minimum Requirements:",(0,n.kt)("br",null),"1 CPU x 2 GB of RAM"),(0,n.kt)("p",null,"Testing:"),(0,n.kt)("p",null,"Please spend few minutes on testing these out, you can import it as a template into your ACS - power on and see the details on initial start.",(0,n.kt)("br",null),"I've tested vSphere and KVM version. I don't have XEN instance to try.")),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-4September2013-Events"}),"Events"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://lanyrd.com/2013/build-a-cloud-day-london/",class:"external-link",rel:"nofollow"},"Build a Cloud Day - London"))," being hosted by Sebastien Goasguen, being held on September 5."),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://www.cloudplugfest.org/about-cloud-plugfests",class:"external-link",rel:"nofollow"},"Cloud Plug Fest"))," offers a variety of Tutorials and sessions, including OpenStack and CloudStack, in Madrid, Spain September 16-20."),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://lanyrd.com/2013/build-a-cloud-day-geneva-switzerland/",class:"external-link",rel:"nofollow"},"Build a Cloud Day - Switzerland"))," has Sebastien Goasguen teaching you and helping you build clouds across Europe on September 26."),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://lanyrd.com/2013/cloudstack-collaboration-conference/",class:"external-link",rel:"nofollow"},"CloudStack Collaboration Conference"))," planning is well underway for Amsterdam, Netherlands. Put it on your calendar now for November 20-22.")),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-4September2013-NewCommittersandPMCMembers"}),"New Committers and PMC Members"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Ilya Musayev has been invited to join the CloudStack PMC, and ",(0,n.kt)("a",{href:"http://markmail.org/message/263fp7wl56lhrwon",class:"external-link",rel:"nofollow"},"has accepted"),"."),(0,n.kt)("li",null,"Vijay Bhamidipati has been invited by the PMC to become a committer and ",(0,n.kt)("a",{href:"http://markmail.org/message/ol43ltkhkwnihgnd",class:"external-link",rel:"nofollow"},"has accepted"),"."),(0,n.kt)("li",null,"Toshiaki Hatano has been invited by the PMC to become a committer and ",(0,n.kt)("a",{href:"http://markmail.org/message/yrduvvabhtkdravy",class:"external-link",rel:"nofollow"},"has accepted"),"."),(0,n.kt)("li",null,"Kirk Kosinski has been invited by the PMC to become a committer and ",(0,n.kt)("a",{href:"http://markmail.org/message/6abmubyyzpgtdzru",class:"external-link",rel:"nofollow"},"has accepted"),"."),(0,n.kt)("li",null,"Ian Duffy has been invited by the PMC to become a committer and ",(0,n.kt)("a",{href:"http://markmail.org/message/jugi22z546nuljgp",class:"external-link",rel:"nofollow"},"has accepted"),".")))}p.isMDXComponent=!0}}]);