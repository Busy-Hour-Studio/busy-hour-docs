"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[294],{1207:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var t=n(1527),s=n(6225),a=n(1056);const o={sidebar_position:2,sidebar_label:"Initializing Services"},r="Initializing Services",l={id:"react-native/initializing-services",title:"Initializing Services",description:"In this section, we will show you how to initialize all avaiable Busy Hour Services in your React Native apps.",source:"@site/docs/react-native/initializing-services.mdx",sourceDirName:"react-native",slug:"/react-native/initializing-services",permalink:"/docs/react-native/initializing-services",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react-native/initializing-services.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Initializing Services"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/react-native/getting-started"},next:{title:"Messaging",permalink:"/docs/react-native/messaging"}},c={},h=[{value:"Initializing Activity Feeds",id:"initializing-activity-feeds",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"Initializing Messaging",id:"initializing-messaging",level:2},{value:"Initializing Messaging",id:"initializing-messaging-1",level:3},{value:"Quick Example",id:"quick-example-1",level:3},{value:"Initializing Push Notifications",id:"initializing-push-notifications",level:3},{value:"Quick Example",id:"quick-example-2",level:3}];function d(i){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"initializing-services",children:"Initializing Services"}),"\n",(0,t.jsx)(e.p,{children:"In this section, we will show you how to initialize all avaiable Busy Hour Services in your React Native apps."}),"\n",(0,t.jsx)(e.h2,{id:"initializing-activity-feeds",children:"Initializing Activity Feeds"}),"\n",(0,t.jsxs)(e.p,{children:["To use the activity feeds functionality, you need to initialize the activity feeds service first. To initialize the activity feeds service, you can use ",(0,t.jsx)(e.code,{children:"useInitActivityFeed"})," hook which is exported from the ",(0,t.jsx)(e.code,{children:"@busy-hour/react-native/hooks"})," package. The hook itself takes a boolean argument which determines if the service should be initialized or not."]}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)("span",{children:a.u})}),"\n",(0,t.jsx)(e.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import { useInitActivityFeed } from '@busy-hour/react-native/hooks';\n\nexport default Main() {\n  // highlight-start\n  // We recommend you to use a state as the argument instead of fixed value\n  // therefore the initialization will only happen once the service are initialized\n  useInitActivityFeed(true)\n  // highlight-end\n\n  return <MainApp />\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"initializing-messaging",children:"Initializing Messaging"}),"\n",(0,t.jsx)(e.p,{children:"To use the messaging functionality, you need to initialize two of the following services:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Messaging"}),"\n",(0,t.jsx)(e.li,{children:"Push Notifications"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"initializing-messaging-1",children:"Initializing Messaging"}),"\n",(0,t.jsxs)(e.p,{children:["To initialize only the messaging service without the notification, you can use the ",(0,t.jsx)(e.code,{children:"useInitMessaging"})," hook which is exported from the ",(0,t.jsx)(e.code,{children:"@busy-hour/react-native/hooks"})," package. The hook itself takes a boolean argument which determines if the service should be initialized or not."]}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)("span",{children:a.u})}),"\n",(0,t.jsx)(e.h3,{id:"quick-example-1",children:"Quick Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import { useInitMessaging } from '@busy-hour/react-native/hooks';\n\nexport default Main() {\n  // highlight-start\n  // We recommend you to use a state as the argument instead of fixed value\n  // therefore the initialization will only happen once the service are initialized\n  useInitMessaging(true)\n  // highlight-end\n\n  return <MainApp />\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"initializing-push-notifications",children:"Initializing Push Notifications"}),"\n",(0,t.jsxs)(e.p,{children:["To receive the new incoming messages as a notification, you need to initialize the notification services. To initialize it, you can use the ",(0,t.jsx)(e.code,{children:"useInitNotification"})," hook which is exported from the ",(0,t.jsx)(e.code,{children:"@busy-hour/react-native/hooks"})," package. Like the messaging service, the hook itself takes a boolean argument which determines if the service should be initialized or not."]}),"\n",(0,t.jsxs)(e.p,{children:["When initializing the notification service, you will get an object as the return value which contains ",(0,t.jsx)(e.code,{children:"isInitialized"})," and ",(0,t.jsx)(e.code,{children:"isError"})," properties to determine if the service is initialized or not."]}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)("span",{children:a.u})}),"\n",(0,t.jsx)(e.h3,{id:"quick-example-2",children:"Quick Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import { useInitNotification } from '@busy-hour/react-native/hooks';\n\nexport default Main() {\n  // highlight-start\n  // We recommend you to use a state as the argument instead of fixed value\n  // therefore the initialization will only happen once the service are initialized\n  const { isInitialized, notificationToken, isError, } = useInitNotification(true)\n  // highlight-end\n\n  return <MainApp />\n}\n"})})]})}function u(i={}){const{wrapper:e}={...(0,s.a)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(d,{...i})}):d(i)}},6225:(i,e,n)=>{n.d(e,{Z:()=>r,a:()=>o});var t=n(959);const s={},a=t.createContext(s);function o(i){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function r(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(s):i.components||s:o(i.components),t.createElement(a.Provider,{value:e},i.children)}},1056:i=>{i.exports=JSON.parse('{"u":"Please keep in mind that in this quick example, we use fixed value to tell the hook that the service should be initialized. For real world applications, you should use a state as the argument instead of fixed value."}')}}]);