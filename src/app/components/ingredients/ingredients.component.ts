import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  cocktailId: number =  0

  constructor(
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cocktailId = this.activatedRoute.snapshot.params['id']
  }

  getCocktailById(){
    this.cocktailService.getCocktailById(this.cocktailId).subscribe({
      next: (cocktail) => {
        console.log('cocktail --- ', cocktail)
      },
      error: () => {

      }
    })
  }

}
