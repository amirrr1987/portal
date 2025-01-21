import AcceptorComment from "@/views/Acceptor/src/Comment";

import AcceptorCommentList from "@/pages/Acceptor/Comment/List";
export default [
  {
    path: "comment",
    name: "AcceptorComment",
    component: AcceptorComment,
    redirect: "/comment/list",
    children: [
      {
        path: "list",
        name: "AcceptorCommentList",
        component: AcceptorCommentList,
      },
    ],
  },
];
