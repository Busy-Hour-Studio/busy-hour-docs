"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[7623],{4589:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(1527),i=t(6225),r=t(4752);const a={sidebar_position:1,sidebar_label:"Listening to Messages"},c="Listening to Messages",o={id:"react/v2/messaging/listening-to-messages",title:"Listening to Messages",description:"In this section, we will show you how to listen to messages from the messaging service.",source:"@site/docs/react/v2/messaging/listening-to-messages.mdx",sourceDirName:"react/v2/messaging",slug:"/react/v2/messaging/listening-to-messages",permalink:"/docs/react/v2/messaging/listening-to-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react/v2/messaging/listening-to-messages.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Listening to Messages"},sidebar:"tutorialSidebar",previous:{title:"v2 React Messaging",permalink:"/docs/react/v2/messaging"},next:{title:"Managing Chats",permalink:"/docs/react/v2/messaging/managing-chats"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Listen to Latest Messages",id:"listen-to-latest-messages",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"Listen to Specific Latest Messages",id:"listen-to-specific-latest-messages",level:2},{value:"Quick Example",id:"quick-example-1",level:3}];function h(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"listening-to-messages",children:"Listening to Messages"}),"\n",(0,n.jsx)(s.p,{children:"In this section, we will show you how to listen to messages from the messaging service."}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(r.Z,{}),"\n",(0,n.jsx)(s.h2,{id:"listen-to-latest-messages",children:"Listen to Latest Messages"}),"\n",(0,n.jsxs)(s.p,{children:["To listen to all latest messages (e.g. ",(0,n.jsx)(s.code,{children:"group only"}),", ",(0,n.jsx)(s.code,{children:"private only"}),", or ",(0,n.jsx)(s.code,{children:"both"}),"), you can use the ",(0,n.jsx)(s.code,{children:"useLastMessageListener"})," hook which is exported from the ",(0,n.jsx)(s.code,{children:"@busy-hour/react/hooks"})," or ",(0,n.jsx)(s.code,{children:"@busy-hour/react/hooks/v2"})," package. The hook then will return an object detailed as below:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"chats"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"message[]"})}),(0,n.jsx)(s.td,{children:"The last messages chat"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"listenLastMessages"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"function"})}),(0,n.jsx)(s.td,{children:"Listen to latest messages"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"removeLastMessageListener"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"function"})}),(0,n.jsx)(s.td,{children:"Remove the listener"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import React, { useEffect } from 'react';\nimport { useLastMessageListener } from '@busy-hour/react/hooks';\n\nexport default function Main() {\n  // highlight-next-line\n  const { listenLastMessages, removeLastMessageListener } =\n    useLastMessageListener();\n\n  useEffect(() => {\n    // highlight-start\n    // Start listening to all incoming last messages\n    listenLastMessages();\n\n    return () => {\n      // Stop listening to all incoming last messages\n      removeLastMessageListener();\n    };\n    // highlight-end\n  }, []);\n\n  return <MainApp />;\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"listen-to-specific-latest-messages",children:"Listen to Specific Latest Messages"}),"\n",(0,n.jsxs)(s.p,{children:["To listen to specific messages (e.g ",(0,n.jsx)(s.code,{children:"chat with specific type"}),"), you can use the ",(0,n.jsx)(s.code,{children:"listenLastMessages"})," function from ",(0,n.jsx)(s.code,{children:"useLastMessageListener"})," hook. The function accept an object as the argument, for more detail about the argument properties see the detail from this table:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"type"})}),(0,n.jsxs)(s.td,{children:["(",(0,n.jsx)(s.code,{children:"ChatType"})," | ",(0,n.jsx)(s.code,{children:"string"}),")[]"]}),(0,n.jsx)(s.td,{children:"Type of the messages to listen into"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"limit"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"number"})," (optional)"]}),(0,n.jsxs)(s.td,{children:["Total message to retrieve (default: ",(0,n.jsx)(s.code,{children:"undefined"}),")"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"orderBy"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"asc"})," | ",(0,n.jsx)(s.code,{children:"desc"})," (optional)"]}),(0,n.jsxs)(s.td,{children:["Order of the messages to retrieve (default: ",(0,n.jsx)(s.code,{children:"desc"}),")"]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"quick-example-1",children:"Quick Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import React, { useEffect } from 'react';\nimport { ChatType } from '@busy-hour/react/enums/v2';\nimport { useLastMessageListener } from '@busy-hour/react/hooks';\n\nexport default function Main() {\n  // highlight-next-line\n  const { listenLastMessages, removeLastMessageListener } =\n    useLastMessageListener();\n\n  useEffect(() => {\n    // highlight-start\n    // Start listening to all incoming last messages\n    listenLastMessages({\n      type: [ChatType.PRIVATE, ChatType.GROUP, 'your-custom-type-if-any'],\n    });\n\n    return () => {\n      // Stop listening to all incoming last messages\n      removeLastMessageListener();\n    };\n    // highlight-end\n  }, []);\n\n  return <MainApp />;\n}\n"})})]})}function g(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4752:(e,s,t)=>{t.d(s,{Z:()=>r});var n=t(3448),i=(t(959),t(1527));const r=function(){return(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["App Initialized (see"," ",(0,i.jsx)(n.Z,{to:"../../getting-started#initializing-busy-hour-projectapp)",children:"Initializing Busy Hour Project/App"}),")"]}),(0,i.jsxs)("li",{children:["Main Service Initialized (see",(0,i.jsx)(n.Z,{to:"../../getting-started#initializing-busy-hour-main-service",children:"Initializing Busy Hour Main Service"}),")"]}),(0,i.jsxs)("li",{children:["Messaging Service Initialized (see"," ",(0,i.jsx)(n.Z,{to:"../../initializing-services#initializing-messaging",children:"Initializing Messaging"}),")"]})]})}},6225:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>a});var n=t(959);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);