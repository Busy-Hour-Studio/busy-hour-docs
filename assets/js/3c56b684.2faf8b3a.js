"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[8966],{5178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var i=n(1527),s=n(6225),o=n(9425);const c={sidebar_position:2,sidebar_label:"Managing Activity Feeds Comments"},d="Managing Activity Feeds Comments",r={id:"react-native/v2/comments/managing-comments",title:"Managing Activity Feeds Comments",description:"In this section, we will show you how to manage activity feeds from the the activity feeds comments service.",source:"@site/docs/react-native/v2/comments/managing-comments.mdx",sourceDirName:"react-native/v2/comments",slug:"/react-native/v2/comments/managing-comments",permalink:"/docs/react-native/v2/comments/managing-comments",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react-native/v2/comments/managing-comments.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Managing Activity Feeds Comments"},sidebar:"tutorialSidebar",previous:{title:"Listening to Activity Feeds Comments",permalink:"/docs/react-native/v2/comments/listening-to-feeds-comments"},next:{title:"@busy-hour/node",permalink:"/docs/nodejs"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Managing Activity Feeds Comments",id:"managing-activity-feeds-comments-1",level:2},{value:"Creating Activity Feeds Comments",id:"creating-activity-feeds-comments",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"Updating Activity Feeds Comments",id:"updating-activity-feeds-comments",level:2},{value:"Quick Example",id:"quick-example-1",level:3},{value:"Deleting Activity Feeds Comments",id:"deleting-activity-feeds-comments",level:2},{value:"Quick Example",id:"quick-example-2",level:3},{value:"Liking Activity Feeds Comment",id:"liking-activity-feeds-comment",level:2},{value:"Quick Example",id:"quick-example-3",level:3},{value:"Disliking Activity Feeds",id:"disliking-activity-feeds",level:2},{value:"Quick Example",id:"quick-example-4",level:3}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"managing-activity-feeds-comments",children:"Managing Activity Feeds Comments"}),"\n",(0,i.jsx)(t.p,{children:"In this section, we will show you how to manage activity feeds from the the activity feeds comments service."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(o.Z,{}),"\n",(0,i.jsx)(t.h2,{id:"managing-activity-feeds-comments-1",children:"Managing Activity Feeds Comments"}),"\n",(0,i.jsxs)(t.p,{children:["To start managing your activity feeds (e.g. ",(0,i.jsx)(t.code,{children:"create"}),", ",(0,i.jsx)(t.code,{children:"delete"}),", etc.), you will need to use the ",(0,i.jsx)(t.code,{children:"useCommentManager"})," hook which is exported from the ",(0,i.jsx)(t.code,{children:"@busy-hour/react-native/hooks"})," or ",(0,i.jsx)(t.code,{children:"@busy-hour/react-native/hooks/v2"})," package. The hook then will return an object detailed as below:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"createComment"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"function"})}),(0,i.jsx)(t.td,{children:"Create a new activity feed comment"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"updateComment"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"function"})}),(0,i.jsx)(t.td,{children:"Update an existing activity feed comment"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"deleteComment"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"function"})}),(0,i.jsx)(t.td,{children:"Delete an existing activity feed comment"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"likeComment"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"function"})}),(0,i.jsx)(t.td,{children:"Like an activity feed comment"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"dislikeComment"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"function"})}),(0,i.jsx)(t.td,{children:"Disike an activity feed comment"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"creating-activity-feeds-comments",children:"Creating Activity Feeds Comments"}),"\n",(0,i.jsxs)(t.p,{children:["To create an activity feed comment, you can use the ",(0,i.jsx)(t.code,{children:"createComment"})," function which is one of the return properties of the ",(0,i.jsx)(t.code,{children:"useCommentManager"})," hook. To use it, you need to pass some properties which detailed as below."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"feedId"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"The id of the feed to create the comment for"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"attribute"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"object"})}),(0,i.jsx)(t.td,{children:"Custom information for the comment"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import { useCommentManager } from '@busy-hour/react-native/hooks';\n\nexport default function Main() {\n  // highlight-next-line\n  const { createComment } = useCommentManager();\n\n  const createNewComment = () => {\n    // highlight-start\n    return createComment({\n      feedId: 'the-feed-id',\n      attribute: {\n        message: 'I like the feeds',\n      },\n    });\n    // highlight-end\n  };\n\n  return <MainApp />;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"updating-activity-feeds-comments",children:"Updating Activity Feeds Comments"}),"\n",(0,i.jsxs)(t.p,{children:["To update an activity feed comment, you ca use the ",(0,i.jsx)(t.code,{children:"updateComment"})," function which is one of the return properties of the ",(0,i.jsx)(t.code,{children:"useCommentManager"})," hook. To use it, you need to pass the ",(0,i.jsx)(t.code,{children:"commentId"})," of the activity feed comments and the final attributes for the comment."]}),"\n",(0,i.jsx)(t.h3,{id:"quick-example-1",children:"Quick Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import { useCommentManager } from '@busy-hour/react-native/hooks';\n\nexport default function Main() {\n  // highlight-next-line\n  const { updateComment } = useCommentManager();\n\n  const updateExistingComment = () => {\n    // highlight-start\n    return updateComment('the-comment-id', {\n      attribute: {\n        message: 'I like the feeds',\n      },\n    });\n    // highlight-end\n  };\n\n  return <MainApp />;\n}\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Keep in mind that the ",(0,i.jsx)(t.code,{children:"updateComment"})," function will replace the whole attribute for the comment not partially."]})}),"\n",(0,i.jsx)(t.h2,{id:"deleting-activity-feeds-comments",children:"Deleting Activity Feeds Comments"}),"\n",(0,i.jsxs)(t.p,{children:["To delete an activity feed comment, you can use the ",(0,i.jsx)(t.code,{children:"deleteComment"})," function which is one of the return properties of the ",(0,i.jsx)(t.code,{children:"useCommentManager"})," hook. To use it, you need to pass the ",(0,i.jsx)(t.code,{children:"commentId"})," of the activity feed comments."]}),"\n",(0,i.jsx)(t.h3,{id:"quick-example-2",children:"Quick Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import { useCommentManager } from '@busy-hour/react-native/hooks';\n\nexport default function Main() {\n  // highlight-next-line\n  const { deleteComment } = useCommentManager();\n\n  const deleteExistingComment = () => {\n    // highlight-start\n    return deleteComment('the-comment-id');\n    // highlight-end\n  };\n\n  return <MainApp />;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"liking-activity-feeds-comment",children:"Liking Activity Feeds Comment"}),"\n",(0,i.jsxs)(t.p,{children:["To like an activity feed, you can use the ",(0,i.jsx)(t.code,{children:"likeComment"})," function which is one of the return properties of the ",(0,i.jsx)(t.code,{children:"useCommentManager"})," hook. To use it, you need to pass the ",(0,i.jsx)(t.code,{children:"feedId"})," of the activity feed and a ",(0,i.jsx)(t.code,{children:"liked"})," boolean to determined to remove the like or not."]}),"\n",(0,i.jsx)(t.h3,{id:"quick-example-3",children:"Quick Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import { useCommentManager } from '@busy-hour/react-native/hooks';\n\nexport default function Main() {\n  // highlight-next-line\n  const { likeComment } = useCommentManager();\n\n  const likeExistingComment = () => {\n    // highlight-start\n    return likeComment('the-comment-id', false); // Do not remove the like\n    // highlight-end\n  };\n\n  return <MainApp />;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"disliking-activity-feeds",children:"Disliking Activity Feeds"}),"\n",(0,i.jsxs)(t.p,{children:["To like an activity feed, you can use the ",(0,i.jsx)(t.code,{children:"dislikeComment"})," function which is one of the return properties of the ",(0,i.jsx)(t.code,{children:"useCommentManager"})," hook. To use it, you need to pass the ",(0,i.jsx)(t.code,{children:"feedId"})," of the activity feed and a ",(0,i.jsx)(t.code,{children:"liked"})," boolean to determined to remove the dislike or not."]}),"\n",(0,i.jsx)(t.h3,{id:"quick-example-4",children:"Quick Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import { useCommentManager } from '@busy-hour/react-native/hooks';\n\nexport default function Main() {\n  // highlight-next-line\n  const { dislikeComment } = useCommentManager();\n\n  const dislikeExistingComment = () => {\n    // highlight-start\n    return dislikeComment('the-comment-id', true); // remove the dislike\n    // highlight-end\n  };\n\n  return <MainApp />;\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9425:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(3448),s=(n(959),n(1527));const o=function(){return(0,s.jsxs)("ol",{children:[(0,s.jsxs)("li",{children:["App Initialized (see"," ",(0,s.jsx)(i.Z,{to:"../../getting-started#initializing-busy-hour-projectapp",children:"Initializing Busy Hour Project/App"}),")"]}),(0,s.jsxs)("li",{children:["Main Service Initialized (see"," ",(0,s.jsx)(i.Z,{to:"../../getting-started#initializing-busy-hour-main-service",children:"Initializing Busy Hour Main Service"}),")"]}),(0,s.jsxs)("li",{children:["Activity Feed Service Initialized (see"," ",(0,s.jsx)(i.Z,{to:"../../initializing-services#initializing-activity-feeds",children:"Initializing Activity Feeds"}),")"]})]})}},6225:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>c});var i=n(959);const s={},o=i.createContext(s);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);