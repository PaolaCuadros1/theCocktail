import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/cocktails/cocktails.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cocktails', component: MenuComponent},
  {path: 'cocktails/:letter', component: MenuComponent},
  {path: 'cocktail/:id', component: IngredientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
