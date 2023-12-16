"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[3938],{4649:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(1527),r=t(6225),s=t(9425);const a={sidebar_position:2,sidebar_label:"Creating New Activity Feeds"},c="Creating New Activity Feeds",o={id:"react-native/v1/activity-feed/creating-new-feed",title:"Creating New Activity Feeds",description:"In this section, we will show you how to create new activity feeds from the activity feeds service.",source:"@site/docs/react-native/v1/activity-feed/creating-new-feed.mdx",sourceDirName:"react-native/v1/activity-feed",slug:"/react-native/v1/activity-feed/creating-new-feed",permalink:"/docs/react-native/v1/activity-feed/creating-new-feed",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react-native/v1/activity-feed/creating-new-feed.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Creating New Activity Feeds"},sidebar:"tutorialSidebar",previous:{title:"Listening to Activity Feeds",permalink:"/docs/react-native/v1/activity-feed/listening-to-feeds"},next:{title:"v2 React Native",permalink:"/docs/react-native/v2"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create New Activity Feeds",id:"create-new-activity-feeds",level:2},{value:"Quick Example",id:"quick-example",level:3}];function u(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"creating-new-activity-feeds",children:"Creating New Activity Feeds"}),"\n",(0,n.jsx)(i.p,{children:"In this section, we will show you how to create new activity feeds from the activity feeds service."}),"\n",(0,n.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(s.Z,{}),"\n",(0,n.jsx)(i.h2,{id:"create-new-activity-feeds",children:"Create New Activity Feeds"}),"\n",(0,n.jsxs)(i.p,{children:["To create a new activity feeds, you can use the ",(0,n.jsx)(i.code,{children:"useFeedCreator"})," hook which is exported from the ",(0,n.jsx)(i.code,{children:"@busy-hour/react-native/hooks"})," package. The hook will return a function that allowing you to create a new activity feed."]}),"\n",(0,n.jsx)(i.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import { useFeedCreator } from '@busy-hour/react-native/hooks/v1';\n\nexport default function Main() {\n  // highlight-next-line\n  const createFeed = useFeedCreator()\n\n  return <MainApp />\n}\n"})})]})}function v(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},9425:(e,i,t)=>{t.d(i,{Z:()=>s});var n=t(3448),r=(t(959),t(1527));const s=function(){return(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["App Initialized (see"," ",(0,r.jsx)(n.Z,{to:"../../getting-started#initializing-busy-hour-projectapp",children:"Initializing Busy Hour Project/App"}),")"]}),(0,r.jsxs)("li",{children:["Main Service Initialized (see"," ",(0,r.jsx)(n.Z,{to:"../../getting-started#initializing-busy-hour-main-service",children:"Initializing Busy Hour Main Service"}),")"]}),(0,r.jsxs)("li",{children:["Activity Feed Service Initialized (see"," ",(0,r.jsx)(n.Z,{to:"../../initializing-services#initializing-activity-feeds",children:"Initializing Activity Feeds"}),")"]})]})}},6225:(e,i,t)=>{t.d(i,{Z:()=>c,a:()=>a});var n=t(959);const r={},s=n.createContext(r);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);