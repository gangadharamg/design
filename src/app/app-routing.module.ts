import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
      path:"", component: MainPageComponent},
              
         {
             path:"blog",component:BlogPageComponent
         }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
