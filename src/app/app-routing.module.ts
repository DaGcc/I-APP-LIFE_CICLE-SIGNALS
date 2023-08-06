import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlonePageComponent } from './alone/pages/alone-page/alone-page.component';
import { ToolBarComponent } from './shared/components/tool-bar/tool-bar.component';

const routes: Routes = [
  {
    path: 'alone',
    component: AlonePageComponent
  },
  // {
  //   path: 'nav',
  //   component: ToolBarComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
