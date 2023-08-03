import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/cocktails/cocktails.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cocktails', component: MenuComponent},
  {path: 'cocktails/:letter', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
