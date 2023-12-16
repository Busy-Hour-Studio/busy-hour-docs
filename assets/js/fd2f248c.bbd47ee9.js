"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[7731],{9228:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=s(1527),n=s(6225),i=s(738);const o={sidebar_position:2,sidebar_label:"Updating a User"},d="Updating a User",a={id:"nodejs/users/updating-a-user",title:"Updating a User",description:"In this section, we will show you how to update a pre-existing Busy Hour User.",source:"@site/docs/nodejs/users/updating-a-user.mdx",sourceDirName:"nodejs/users",slug:"/nodejs/users/updating-a-user",permalink:"/docs/nodejs/users/updating-a-user",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/nodejs/users/updating-a-user.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Updating a User"},sidebar:"tutorialSidebar",previous:{title:"Creating a User",permalink:"/docs/nodejs/users/creating-a-user"},next:{title:"Authenticate User",permalink:"/docs/nodejs/users/authenticate-user"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Updating a User",id:"updating-a-user-1",level:2},{value:"Quick Example",id:"quick-example",level:3}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"updating-a-user",children:"Updating a User"}),"\n",(0,r.jsx)(t.p,{children:"In this section, we will show you how to update a pre-existing Busy Hour User."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(i.Z,{}),"\n",(0,r.jsx)(t.h2,{id:"updating-a-user-1",children:"Updating a User"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"You can update a Busy Hour User with any Master API Key or a Project API Key that only specificly for the project user you want to update."})}),"\n",(0,r.jsxs)(t.p,{children:["To update a Busy Hour App, you can use the ",(0,r.jsx)(t.code,{children:"user.update"})," function from the ",(0,r.jsx)(t.code,{children:"@busy-hour/node"})," package. The function take an object with the following properties:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"userId"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"The ID of the user"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"avatar"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"string"})," | ",(0,r.jsx)(t.code,{children:"null"})]}),(0,r.jsx)(t.td,{children:"The avatar of the user"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"nickname"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"The nickname of the user"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"attributes"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"object"})}),(0,r.jsx)(t.td,{children:"Any custom attributes of the user in JSON format"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="src/main.ts"',children:"import BusyHourNode from '@busy-hour/node';\n\n// Create an instance of BusyHourNode with your API key (Master/Project)\n// highlight-next-line\nconst nodeSdk = new BusyHourNode({ apiKey: 'your-api-key' });\n\n// highlight-start\nnodeSdk.user.update('your-user-id', {\n  avatar: null,\n  nickname: 'your-user-nickname',\n  attributes: {\n    'your-custom-attribute-key': 'your-custom-attribute-value',\n  },\n});\n// highlight-end\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},738:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(3448),n=(s(959),s(1527));const i=function(){return(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Busy Hour Account (",(0,n.jsx)(r.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,n.jsxs)("li",{children:["Generate a Master/Project API Key from"," ",(0,n.jsx)(r.Z,{to:"https://busyhour.id/dashboard/settings",children:"Dashboard/Settings"})," ","or from"," ",(0,n.jsx)(r.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]})]})}},6225:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>o});var r=s(959);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);