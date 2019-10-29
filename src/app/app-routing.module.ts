import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Country/list/list.component';
import { AddComponent } from './Country/add/add.component';
import { EditComponent } from './Country/edit/edit.component';

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
