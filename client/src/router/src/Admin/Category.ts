import AdminCategory from "@/views/Admin/src/Category";
//////////////////////////////////
// Start Pages Admin Category Folder
import AdminCategoryCreate from "@/pages/Admin/Category/Create";
import AdminCategoryList from "@/pages/Admin/Category/List";
import AdminCategoryEdit from "@/pages/Admin/Category/Edit";
//  End  Pages Admin Category Folder
//////////////////////////////////

export default [
  {
    path: "category",
    name: "AdminCategory",
    component: AdminCategory,
    redirect: "/category/",
    children: [
      {
        path: "create",
        name: "AdminCategoryCreate",
        component: AdminCategoryCreate,
      },
      {
        path: "list",
        name: "AdminCategoryList",
        component: AdminCategoryList,
      },
      {
        path: ":id/edit",
        name: "AdminCategoryEdit",
        component: AdminCategoryEdit,
      },
    ],
  },
];
