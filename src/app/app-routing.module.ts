import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLoginComponent } from "./auth/auth-login/auth-login.component";
import { IndexLandingTwoComponent } from "./core/components/index-landing-two/index-landing-two.component";
import { MasterPageComponent } from "./core/components/master-page/master-page.component";
import { PageBlogDetailComponent } from "./core/components/page-blog-detail/page-blog-detail.component";
import { PageBlogListSidebarComponent } from "./core/components/page-blog-list-sidebar/page-blog-list-sidebar.component";
import { PageHistoryComponent } from "./core/components/page-history/page-history.component";

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
