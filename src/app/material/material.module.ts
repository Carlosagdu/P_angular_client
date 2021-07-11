import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

const MaterialModules = [MatSidenavModule];

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules],
})
export class MaterialModule {}
