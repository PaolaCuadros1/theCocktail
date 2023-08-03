import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { PopularDrinksComponent } from './components/home/popular-drinks/popular-drinks.component';
import { PopularIngredientsComponent } from './components/home/popular-ingredients/popular-ingredients.component';
import { LatestDrinksComponent } from './components/home/latest-drinks/latest-drinks.component';
import { RandomDrinksComponent } from './components/home/random-drinks/random-drinks.component';
import { RandomIngredientsComponent } from './components/home/random-ingredients/random-ingredients.component';
import { MenuComponent } from './components/cocktails/cocktails.component';

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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
