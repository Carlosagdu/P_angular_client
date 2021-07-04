import { Routes } from "@angular/router";

import { UserComponent } from "../adminPages/user/user.component";

export const AdminLayoutRoutes: Routes = [
  { path: "user", component: UserComponent },
];
