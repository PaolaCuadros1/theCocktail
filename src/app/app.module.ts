import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MenuComponent } from './components/cocktails/cocktails.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { HeroComponent } from './components/home/hero/hero.component'
import { HomeComponent } from './components/home/home.component'
import { LatestDrinksComponent } from './components/home/latest-drinks/latest-drinks.component'
import { PopularDrinksComponent } from './components/home/popular-drinks/popular-drinks.component'
import {
    PopularIngredientsComponent
} from './components/home/popular-ingredients/popular-ingredients.component'
import { RandomDrinksComponent } from './components/home/random-drinks/random-drinks.component'
import {
    RandomIngredientsComponent
} from './components/home/random-ingredients/random-ingredients.component'
import { IngredientsComponent } from './components/ingredients/ingredients.component'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    PopularDrinksComponent,
    PopularIngredientsComponent,
    LatestDrinksComponent,
    RandomDrinksComponent,
    RandomIngredientsComponent,
    MenuComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
