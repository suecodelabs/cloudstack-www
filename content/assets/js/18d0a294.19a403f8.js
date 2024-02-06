"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5878],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),u=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},h="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,p=h["".concat(i,".").concat(d)]||h[d]||k[d]||o;return a?l.createElement(p,r(r({ref:t},c),{},{components:a})):l.createElement(p,r({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[h]="string"==typeof e?e:n,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=a(87462),n=(a(67294),a(3905));const o={layout:"post",title:"Apache CloudStack Weekly News - 11 February 2013",slug:"apache_cloudstack_weekly_news_11"},r=void 0,s={permalink:"/blog/apache_cloudstack_weekly_news_11",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2013-02-11-apache_cloudstack_weekly_news_11.md",source:"@site/blog/2013-02-11-apache_cloudstack_weekly_news_11.md",title:"Apache CloudStack Weekly News - 11 February 2013",description:"In the past week, the 4.0.1-incubating release passed its VOTE on the general@incubator.apache.org list, work continued on 4.1.0, and there were active discussions on using Gerrit, cloud-init, and whether memory usage has increased following the adoption of the Spring framework.",date:"2013-02-11T00:00:00.000Z",formattedDate:"February 11, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 11 February 2013",slug:"apache_cloudstack_weekly_news_11"},prevItem:{title:"Apache CloudStack 4.0.1-incubating Released",permalink:"/blog/apache_cloudstack_4_0_11"},nextItem:{title:"Apache CloudStack Weekly News - 4 February 2013",permalink:"/blog/apache_cloudstack_weekly_news_4"}},i={authorsImageUrls:[]},u=[],c={toc:u},h="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In the past week, the 4.0.1-incubating release passed its VOTE on the general@incubator.apache.org list, work continued on 4.1.0, and there were active discussions on using Gerrit, cloud-init, and whether memory usage has increased following the adoption of the Spring framework. "),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-MajorDiscussionsandIssues"}),"Major Discussions and Issues"),(0,n.kt)("p",null,"Some of the major discussions and issues that have taken place on cloudstack-dev and cloudstack-users in the past week. This is by no means exhaustive, if you need to be up-to-date on ",(0,n.kt)("b",null,"all")," development issues in the project, you'll definitely want to be subscribed to the mailing lists!"),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-Gerritproposedasreviewmechanism"}),"Gerrit proposed as review mechanism"),(0,n.kt)("p",null,"Alex Huang ",(0,n.kt)("a",{href:"http://markmail.org/message/inerurmjtc6v57ba",class:"external-link",rel:"nofollow"},"kicked off a discussion")," about using ",(0,n.kt)("a",{href:"http://code.google.com/p/gerrit/",class:"external-link",rel:"nofollow"},"Gerrit"),". David Nalley pointed out that ",(0,n.kt)("a",{href:"http://markmail.org/message/kitfyx5cqvyeopwl",class:"external-link",rel:"nofollow"},'many of the problems Alex looks to solve with Gerrit are "social/cultural problems"')," that a technical solution alone won't fix. "),(0,n.kt)("p",null,'Hugo Trippaers also voiced concerns about implementing Gerrit, saying that "a formal process like Gerrit" isn\'t necessary. '),(0,n.kt)("blockquote",null,(0,n.kt)("p",null,"The committer status is granted based on the trust we put in a certain individuals to take care of the CloudStack project, for me that included taking the responsibility that any contributions are up to spec. I want to trust my fellow committers that they know what they are doing and i don't feel the need to second guess that by wanting to look over their code before they can commit it.")),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-Cloudinitvs.homegrownscripts"}),"Cloud-init vs. homegrown scripts"),(0,n.kt)("p",null,"David Nalley ",(0,n.kt)("a",{href:"http://markmail.org/message/qs7k4akccoh7slk5",class:"external-link",rel:"nofollow"},"raised a question from the Ghent Build-a-Cloud-Day"),' about "whether or not to package the SSH key reset and password reset utilities, or whether we should focus our PW/SSH efforts on cloud-init." '),(0,n.kt)("p",null,'Wido den Hollander voiced support for cloud-init, saying "We want CloudStack to be accepted by more and more users and they probably want to use cloud-init. cloud-init has cool Puppet and Chef plugins as well which make it very ',(0,n.kt)("br",null),'easy to get it all up and running."'),(0,n.kt)("p",null,'Chiradeep Vittal says he likes cloud-init, but worried that adopting cloud-init would be "hurting the investment of existing CloudStack users who have built hundreds of templates with the extant scripts." '),(0,n.kt)("p",null,'Wido says that "the scripts should keep working" but preferred to avoid packaging the homegrown scripts and encouraging new users/new setups to go with cloud-init.'),(0,n.kt)("p",null,"Chip ",(0,n.kt)("a",{href:"http://markmail.org/message/y5z3c7fnpotyzdmb",class:"external-link",rel:"nofollow"},"says that")," \"I'm in agreement that the existing scripts would need to remain as a supported option for quite some time.  I consider things like that to actually be related to our semver version numbering, although it's not specifically our CS query API, it's a similar interface expectation.\""),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-ChangestoCPUandmemoryovercommitfeature"}),"Changes to CPU and memory overcommit feature"),(0,n.kt)("p",null,"Abhinandan Prateek forwarded a note from Bharat Kumar about changes to the way capacity is calculated in CloudStack. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",null,"I have made changes to the way capacity is calculated in CloudStack ,",(0,n.kt)("br",null),"please review and comment."),(0,n.kt)("p",null,"I will illustrate this with an example."),(0,n.kt)("p",null,"let us say we have a host with",(0,n.kt)("br",null),"Actual Total capacity=4GB ram,"),(0,n.kt)("p",null,"and the overcommit ratio be 2."),(0,n.kt)("p",null,"Current way       ",(0,n.kt)("br",null),"Total capacity= 4*2= 8GB.",(0,n.kt)("br",null),"Values after deploying 4 VMs with 1GB in service offering.",(0,n.kt)("br",null),"Allocated per vm =1GB.",(0,n.kt)("br",null),"Used=4GB",(0,n.kt)("br",null),"Available=8-4=4GB"),(0,n.kt)("p",null,"now if we decrease the overcommit ratio to 1",(0,n.kt)("br",null),"Total Capacity = 4*1=4GB.",(0,n.kt)("br",null),"used Capacity = 4GB.",(0,n.kt)("br",null),"Available = 4-4=0. (implies 100% usage. can also go to more than 100%)")),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-JVMMemoryusageincreasedwithlatestmaster"}),"JVM Memory usage increased with latest master"),(0,n.kt)("p",null,"The latest master is ",(0,n.kt)("a",{href:"http://markmail.org/message/ye35yeey6ooxyegb",class:"external-link",rel:"nofollow"},"consuming nearly 900MB of memory"),", according to Koushik Das. "),(0,n.kt)("p",null,"There's some discussion as to the cause of this, and ",(0,n.kt)("a",{href:"https://issues.apache.org/jira/browse/CLOUDSTACK-1169",class:"external-link",rel:"nofollow"},"CLOUDSTACK-1168")," (\"Memory usage is very high\") has been created. If you're testing master/4.1 and run into this problem, it'd be helpful to update the ticket with your experience and the environment you're seeeing the issue in. "),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-Blockerstorunautomatedtests"}),"Blockers to run automated tests"),(0,n.kt)("p",null,"Sudha Ponnaganti ",(0,n.kt)("a",{href:"http://markmail.org/message/yn3eb7gqzzfzadqt",class:"external-link",rel:"nofollow"},"brought up a couple of issues")," on February 8th that are blocking automated testing. ",(0,n.kt)("a",{href:"https://issues.apache.org/jira/browse/CLOUDSTACK-1216",class:"external-link",rel:"nofollow"},"CLOUDSTACK-1216")," has been fixed, ",(0,n.kt)("a",{href:"https://issues.apache.org/jira/browse/CLOUDSTACK-1200",class:"external-link",rel:"nofollow"},"CLOUDSTACK-1200")," (Unknown column 'vm_instance.disk_offering_id' in table vm_instance, db exception shown in MS log) is still unresolved."),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-CloudStack4.0.1incubatingpassesVOTE"}),"CloudStack 4.0.1-incubating passes VOTE"),(0,n.kt)("p",null,"Joe Brockmeier ",(0,n.kt)("a",{href:"http://markmail.org/message/ef4exivtkmhekhxh",class:"external-link",rel:"nofollow"},"announced on Friday")," that the first point release from the CloudStack 4.0 branch has passed its vote on general@incubator.apache.org with +1 votes from Jim Jagielski, Olivier Lamy, and Alex Karasulu. No -1 or +0 votes were cast. "),(0,n.kt)("p",null,"The release has been pushed to the mirrors and will be announced on Tuesday, February 12. "),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-ACS4.1ReleaseScheduleReminder"}),"ACS 4.1 Release Schedule Reminder"),(0,n.kt)("p",null,"Chip Childers sent out a reminder ",(0,n.kt)("a",{href:"http://markmail.org/thread/k7xf5jmznsf6gruo",class:"external-link",rel:"nofollow"},"about the release schedule for CloudStack 4.1.0")," on Monday. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",null,"2013-02-28 is the end of our test phase, and should be the end of the doc finalization for the release."),(0,n.kt)("p",null,"We'll shift into a mode where the 4.1 branch should only be updated by me after that date (after you ask for a cherry-pick for a critical bug or translation update).")),(0,n.kt)("p",null,'Chip also noted that there are 15 features/improvements listed as "open" for 4.1, and asked that the reporter/assignee update to "In Progress" or move the target release to 4.2 or Future, as appropriate.'),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-UpcomingEvents"}),"Upcoming Events"),(0,n.kt)("p",null,"John Kinsella has ",(0,n.kt)("a",{href:"http://markmail.org/thread/frj26yjlgn7gty6x",class:"external-link",rel:"nofollow"},"announced the first Bay Area CloudStack Meetup to be held in San Jose")," on February 20th. "),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,"Build a Cloud Day (BACD)"),": ",(0,n.kt)("a",{href:"http://buildacloud.org/about-diy-cloud-computing/cloud-events/viewevent/138-build-a-cloud-day-scale11x.html",class:"external-link",rel:"nofollow"},"Full day BACD")," at SCALE on Friday (22 February 2013)."),(0,n.kt)("li",null,(0,n.kt)("b",null,"SCALE 11x"),": Meet with CloudStack folks at SCALE (23-24 February 2013). The CloudStack project will have a booth at the event, plus a number of talks on the schedule:",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://www.socallinuxexpo.org/scale11x/presentations/taking-open-cloud-11-cloudstack",class:"external-link",rel:"nofollow"},"Taking the Cloud to 11 with CloudStack")," - Joe Brockmeier"))),(0,n.kt)("li",null,(0,n.kt)("b",null,"ApacheCon North America"),": ApacheCon NA is in Portland, Oregon from 26 February to 28 February. Cloud is a hot topic at ApacheCon North America and you'll find quite a bit of CloudStack content on the schedule:",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/126/",class:"external-link",rel:"nofollow"},"Apache CloudStack's Plugin Model: Balancing the Cathedral with a Bazaar")," - Donal Lafferty"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/127/",class:"external-link",rel:"nofollow"},"Top 10 Network Issues in Apache CloudStack")," - Kirk Kosinski"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/128/",class:"external-link",rel:"nofollow"},"Advanced CloudStack Troubleshooting using Log Analysis")," - Kirk Kosinski"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/129/",class:"external-link",rel:"nofollow"},"Scalable Object Storage with Apache CloudStack and Apache Hadoop")," - Chiradeep Vittal"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/116/",class:"external-link",rel:"nofollow"},"Getting to Know Apache CloudStack")," - Joe Brockmeier"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/145/",class:"external-link",rel:"nofollow"},"DevCloud: A CloudStack Sandbox")," - Sebastien Goasguen"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/146/",class:"external-link",rel:"nofollow"},"Powering CloudStack with Ceph RDB")," - Patrick McGarry"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/147/",class:"external-link",rel:"nofollow"},"Software Defined Networking in Apache CloudStack")," - Chiradeep Vittal")))),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-Jira"}),"Jira"),(0,n.kt)("p",null,"Status for 4.1 as of Monday, 11 February - by priority:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"5 ",(0,n.kt)("a",{href:"http://is.gd/blockers41acs",class:"external-link",rel:"nofollow"},"Blocker bugs")),(0,n.kt)("li",null,"13 ",(0,n.kt)("a",{href:"http://is.gd/critical41acs",class:"external-link",rel:"nofollow"},"Critical bugs")),(0,n.kt)("li",null,"212 ",(0,n.kt)("a",{href:"http://is.gd/major41acs",class:"external-link",rel:"nofollow"},"Major bugs")),(0,n.kt)("li",null,"35 ",(0,n.kt)("a",{href:"http://is.gd/minor41acs",class:"external-link",rel:"nofollow"},"Minor bugs"))),(0,n.kt)("p",null,"Of the remaining bugs for 4.1.0, 103 are ",(0,n.kt)("a",{href:"http://is.gd/unassigned41acs",class:"external-link",rel:"nofollow"},"currently unassigned"),"."),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-NewCommittersandPPMCMembers"}),"New Committers and PPMC Members"),(0,n.kt)("p",null,"No new committers or PPMC members were announced this week. "),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-11February2013-ContributingtotheApacheCloudStackWeeklyNews"}),"Contributing to the Apache CloudStack Weekly News"),(0,n.kt)("p",null,"If you have an event, discussion, or other item to contribute to the ",(0,n.kt)("em",null,"Weekly News"),", you can add it directly to the ",(0,n.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News",class:"external-link",rel:"nofollow"},"wiki")," by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including ",(0,n.kt)("a",{href:"",title:"News"},"News"),": ",(0,n.kt)("em",null,"description of topic")," or email the newsletter editor directly (jzb at apache.org), again with the subject ",(0,n.kt)("a",{href:"",title:"News"},"News"),": ",(0,n.kt)("em",null,"description of topic"),". ",(0,n.kt)("b",null,"Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.")," "))}k.isMDXComponent=!0}}]);