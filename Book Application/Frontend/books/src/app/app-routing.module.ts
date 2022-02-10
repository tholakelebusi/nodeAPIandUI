import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './components/addbooks/addbooks.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path:'',outlet:'',component:HomeComponent
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
