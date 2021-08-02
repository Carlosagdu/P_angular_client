import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "user", title: "User Profile", icon: "nc-single-02", class: "" },
  { path: "posts", title: "Posts", icon: "nc-paper", class: "" },
  // { path: "about_me", title: "About me", icon: "nc-tile-56", class: "" },
];

@Component({
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
