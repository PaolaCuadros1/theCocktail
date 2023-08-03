import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-menu',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class MenuComponent implements OnInit {

  drinks: Array<any> = []
  navigationSubscription
  letter: string = ''

  constructor(
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.letter = this.activatedRoute.snapshot.params['letter']
        this.letter == undefined ? this.getAllCocktails() : this.getCocktailsByFirstLetter()
      }
    });
  }

  ngOnInit(): void { }

  getAllCocktails() {
    this.cocktailService.getAllCocktails().subscribe({
      next: (cocktails) => {
        this.drinks = cocktails.drinks
      },
      error: (error) => {
        console.error('Error getting all cocktails: ', error)
      }
    })
  }

  getCocktailsByFirstLetter(){
    this.cocktailService.getCocktailsByFirstLetter(this.letter).subscribe({
      next: (cocktails) => {
        this.drinks = cocktails.drinks
      },
      error: (error) => {
        console.error('Error getting cocktails by letter: ', error)
      }
    })
  }

}
