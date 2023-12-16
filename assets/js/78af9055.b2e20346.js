"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[607],{2311:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var r=n(1527),i=n(6225),t=n(4752);const d={sidebar_position:3,sidebar_label:"Managing Group Messages"},o="Managing Group Messages",c={id:"react/v1/messaging/managing-group-messages",title:"Managing Group Messages",description:"In this section, we will show you how to manage group messages from the messaging service.",source:"@site/docs/react/v1/messaging/managing-group-messages.mdx",sourceDirName:"react/v1/messaging",slug:"/react/v1/messaging/managing-group-messages",permalink:"/docs/react/v1/messaging/managing-group-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react/v1/messaging/managing-group-messages.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Managing Group Messages"},sidebar:"tutorialSidebar",previous:{title:"Sending Messages",permalink:"/docs/react/v1/messaging/sending-messages"},next:{title:"v1 React Activity Feed",permalink:"/docs/react/v1/feed"}},h={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Managing Group Messages",id:"managing-group-messages-1",level:2},{value:"Creating Group Messages",id:"creating-group-messages",level:2},{value:"Member Object",id:"member-object",level:3},{value:"Quick Example",id:"quick-example",level:3},{value:"Updating Group Messages",id:"updating-group-messages",level:2},{value:"Quick Example",id:"quick-example-1",level:3},{value:"Deleting Group Messages",id:"deleting-group-messages",level:2},{value:"Quick Example",id:"quick-example-2",level:3},{value:"Adding Members",id:"adding-members",level:2},{value:"Quick Example",id:"quick-example-3",level:3},{value:"Removing Members",id:"removing-members",level:2},{value:"Quick Example",id:"quick-example-4",level:3},{value:"Leave Group",id:"leave-group",level:2},{value:"Quick Example",id:"quick-example-5",level:3}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"managing-group-messages",children:"Managing Group Messages"}),"\n",(0,r.jsx)(s.p,{children:"In this section, we will show you how to manage group messages from the messaging service."}),"\n",(0,r.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.Z,{}),"\n",(0,r.jsx)(s.h2,{id:"managing-group-messages-1",children:"Managing Group Messages"}),"\n",(0,r.jsxs)(s.p,{children:["To start managing your group messages (e.g. ",(0,r.jsx)(s.code,{children:"create"}),", ",(0,r.jsx)(s.code,{children:"update"}),", ",(0,r.jsx)(s.code,{children:"delete"}),", etc.), you will need to use the ",(0,r.jsx)(s.code,{children:"useGroupManager"})," hook which is exported from the ",(0,r.jsx)(s.code,{children:"@busy-hour/react/hooks/v1"})," package. The hook then will return an object detailed as below:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"createGroup"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"function"})}),(0,r.jsx)(s.td,{children:"Create a new group messages"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"updateGroup"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"function"})}),(0,r.jsx)(s.td,{children:"Update an existing group messages"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"deleteGroup"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"function"})}),(0,r.jsx)(s.td,{children:"Delete an existing group messages"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"addMembers"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"function"})}),(0,r.jsx)(s.td,{children:"Add member to the group messages"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"removeMembers"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"function"})}),(0,r.jsx)(s.td,{children:"Remove member to the group messages"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"leaveGroup"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"function"})}),(0,r.jsx)(s.td,{children:"Leave from group messages"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"creating-group-messages",children:"Creating Group Messages"}),"\n",(0,r.jsxs)(s.p,{children:["To create a group message, you can use the ",(0,r.jsx)(s.code,{children:"createGroup"})," function which is one of the return properties of the ",(0,r.jsx)(s.code,{children:"useGroupManager"})," hook. To use it, you need to pass some properties which detailed as below."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"avatar"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"string"})," (optional)"]}),(0,r.jsx)(s.td,{children:"The avatar of the group messages"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"name"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"string"})," (optional)"]}),(0,r.jsx)(s.td,{children:"The name of the group messages"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"description"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"string"})," (optional)"]}),(0,r.jsx)(s.td,{children:"The description of the group messages"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"members"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Member[]"})}),(0,r.jsx)(s.td,{children:"List of member to be added to the group messages"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"member-object",children:"Member Object"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"userId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"User id to be added"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"role"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"GroupRole"})}),(0,r.jsxs)(s.td,{children:["User role, import from ",(0,r.jsx)(s.code,{children:"@busy-hour/react/enums/v1"})]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import { useGroupManager } from '@busy-hour/react/hooks/v1';\nimport { GroupRole } from '@busy-hour/react/enums/v1';\n\nexport default function Main() {\n  // highlight-next-line\n  const { createGroup } = useGroupManager();\n\n  const createGroupMessages = async () => {\n    // highlight-start\n    return createGroup({\n      name: 'My Group',\n      description: 'This is my group',\n      members: [\n        {\n          userId: 'your-user-id',\n          role: GroupRole.ADMIN,\n        },\n        {\n          userId: 'other-user-id',\n          role: GroupRole.MEMBER,\n        },\n      ],\n    });\n    // highlight-end\n  };\n\n  return <MainApp />;\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"updating-group-messages",children:"Updating Group Messages"}),"\n",(0,r.jsxs)(s.p,{children:["To update a group message, you can use the ",(0,r.jsx)(s.code,{children:"updateGroup"})," function which is one of the return properties of the ",(0,r.jsx)(s.code,{children:"useGroupManager"})," hook. To use it, you need to pass some properties which detailed as below."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"groupChatId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"Group chat id to be updated"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"avatar"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"string"})," (optional)"]}),(0,r.jsx)(s.td,{children:"The avatar of the group messages"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"name"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"string"})," (optional)"]}),(0,r.jsx)(s.td,{children:"The name of the group messages"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"description"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"string"})," (optional)"]}),(0,r.jsx)(s.td,{children:"The description of the group messages"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"quick-example-1",children:"Quick Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import { useGroupManager } from '@busy-hour/react/hooks/v1';\n\nexport default function Main() {\n  // highlight-next-line\n  const { updateGroup } = useGroupManager();\n\n  const updateGroupMessages = async () => {\n    // highlight-start\n    return updateGroup('group-chat-id', {\n      name: 'My new Group',\n      description: 'This is my group',\n    });\n    // highlight-end\n  };\n\n  return <MainApp />;\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"deleting-group-messages",children:"Deleting Group Messages"}),"\n",(0,r.jsxs)(s.p,{children:["To delete a group message, you can use the ",(0,r.jsx)(s.code,{children:"deleteGroup"})," function which is one of the return properties of the ",(0,r.jsx)(s.code,{children:"useGroupManager"})," hook. To use it, you just need to pass the group ",(0,r.jsx)(s.code,{children:"chatId"})," to delete."]}),"\n",(0,r.jsx)(s.h3,{id:"quick-example-2",children:"Quick Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import { useGroupManager } from '@busy-hour/react/hooks/v1';\n\nexport default function Main() {\n  // highlight-next-line\n  const { deleteGroup } = useGroupManager();\n\n  const deleteGroupMessages = async () => {\n    // highlight-next-line\n    return deleteGroup('group-chat-id');\n  };\n\n  return <MainApp />;\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"adding-members",children:"Adding Members"}),"\n",(0,r.jsxs)(s.p,{children:["To add a member to a group message, you can use the ",(0,r.jsx)(s.code,{children:"addMembers"})," function which is one of the return properties of the ",(0,r.jsx)(s.code,{children:"useGroupManager"})," hook. To use it, you need to pass some properties which detailed as below."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"groupChatId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"Group chat id to be updated"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"members"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Member[]"})}),(0,r.jsx)(s.td,{children:"List of member to be added to the group messages"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"quick-example-3",children:"Quick Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import { useGroupManager } from '@busy-hour/react/hooks/v1';\nimport { GroupRole } from '@busy-hour/react/enums/v1';\n\nexport default function Main() {\n  // highlight-next-line\n  const { addMembers } = useGroupManager();\n\n  const addGroupMembers = async () => {\n    // highlight-start\n    return addMembers('group-chat-id', [\n      {\n        userId: 'other-user-id-1',\n        role: GroupRole.MODERATOR,\n      },\n      {\n        userId: 'other-user-id-2',\n        role: GroupRole.MEMBER,\n      },\n    ]);\n    // highlight-end\n  };\n\n  return <MainApp />;\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"removing-members",children:"Removing Members"}),"\n",(0,r.jsxs)(s.p,{children:["To remove a member to a group message, you can use the ",(0,r.jsx)(s.code,{children:"removeMembers"})," function which is one of the return properties of the ",(0,r.jsx)(s.code,{children:"useGroupManager"})," hook. To use it, you need to pass some properties which detailed as below."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"groupChatId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"Group chat id to be updated"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"members"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string[]"})}),(0,r.jsx)(s.td,{children:"List of member user id to be removed from the group messages"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"quick-example-4",children:"Quick Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import { useGroupManager } from '@busy-hour/react/hooks/v1';\nimport { GroupRole } from '@busy-hour/react/enums/v1';\n\nexport default function Main() {\n  // highlight-next-line\n  const { removeMembers } = useGroupManager();\n\n  const removeGroupMembers = async () => {\n    // highlight-start\n    return removeMembers('group-chat-id', [\n      'other-user-id-1',\n      'other-user-id-2',\n    ]);\n    // highlight-end\n  };\n\n  return <MainApp />;\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"leave-group",children:"Leave Group"}),"\n",(0,r.jsxs)(s.p,{children:["To leave a group message, you can use the ",(0,r.jsx)(s.code,{children:"leaveGroup"})," function which is one of the return properties of the ",(0,r.jsx)(s.code,{children:"useGroupManager"})," hook. To use it, you just need to pass the group ",(0,r.jsx)(s.code,{children:"chatId"})," to leave."]}),"\n",(0,r.jsx)(s.h3,{id:"quick-example-5",children:"Quick Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import { useGroupManager } from '@busy-hour/react/hooks/v1';\n\nexport default function Main() {\n  // highlight-next-line\n  const { leaveGroup } = useGroupManager();\n\n  const leaveGroupMessages = async () => {\n    // highlight-start\n    return leaveGroup('group-chat-id');\n    // highlight-end\n  };\n\n  return <MainApp />;\n}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4752:(e,s,n)=>{n.d(s,{Z:()=>t});var r=n(3448),i=(n(959),n(1527));const t=function(){return(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["App Initialized (see"," ",(0,i.jsx)(r.Z,{to:"../../getting-started#initializing-busy-hour-projectapp)",children:"Initializing Busy Hour Project/App"}),")"]}),(0,i.jsxs)("li",{children:["Main Service Initialized (see",(0,i.jsx)(r.Z,{to:"../../getting-started#initializing-busy-hour-main-service",children:"Initializing Busy Hour Main Service"}),")"]}),(0,i.jsxs)("li",{children:["Messaging Service Initialized (see"," ",(0,i.jsx)(r.Z,{to:"../../initializing-services#initializing-messaging",children:"Initializing Messaging"}),")"]})]})}},6225:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>d});var r=n(959);const i={},t=r.createContext(i);function d(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);