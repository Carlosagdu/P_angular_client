import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { AuthLoginComponent } from "./auth/auth-login/auth-login.component";
import { IndexLandingTwoComponent } from "./core/components/index-landing-two/index-landing-two.component";
import { MasterPageComponent } from "./core/components/master-page/master-page.component";
import { PageBlogDetailComponent } from "./core/components/page-blog-detail/page-blog-detail.component";
import { PageBlogListSidebarComponent } from "./core/components/page-blog-list-sidebar/page-blog-list-sidebar.component";
import { PageHistoryComponent } from "./core/components/page-history/page-history.component";
import { UserComponent } from "./adminPages/user/user.component";
import { PostComponent } from "./adminPages/post/post.component";
import { TableComponent } from "./adminPages/table/table.component";
import { NewPostComponent } from "./adminPages/newPost/newPost.component";
import { AboutMeComponent } from "./adminPages/aboutme/aboutme.component";

const routes: Routes = [
  {
    path: "",
    component: MasterPageComponent,
    children: [
      { path: "", component: IndexLandingTwoComponent },
      {
        path: "blog",
        component: PageBlogListSidebarComponent,
      },
      { path: "blog/:id", component: PageBlogDetailComponent },
      { path: "aboutme", component: PageHistoryComponent },
      { path: "login", component: AuthLoginComponent },
    ],
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      { path: "user", component: UserComponent },
      { path: "posts", component: TableComponent },
      { path: "posts/new", component: NewPostComponent },
      { path: "about_me", component: AboutMeComponent },
      // { path: "icons", component: IconsComponent },
      // { path: "maps", component: MapsComponent },
      // { path: "notifications", component: NotificationsComponent },
      // { path: "upgrade", component: UpgradeComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
