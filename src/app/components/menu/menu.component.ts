import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public drinks: Array<any> = []
  constructor(
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {
    this.getAllCocktails()
  }

  getAllCocktails() {
    this.cocktailService.getAllCocktails().subscribe({
      next: (cocktails) => {
        this.drinks = cocktails.drinks
      },
      error: (error) => {
        console.error('Error getting messages: ', error)
      }
    })
  }

}
