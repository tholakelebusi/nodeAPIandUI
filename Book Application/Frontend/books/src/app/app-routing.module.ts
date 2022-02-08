import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './components/addbooks/addbooks/addbooks.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path:'',component:HomeComponent
},
{path:'add',component:AddbooksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }