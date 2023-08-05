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
  cocktailName: string = ''
  cocktailImage: string = ''
  cocktailIngredients: Array<any> = []
  ingredients: Array<any> = []
  colors: Array<string> = ['#DFBED8', '#636670', '#DBB6A1']


  constructor(
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cocktailId = this.activatedRoute.snapshot.params['id']
    this.getCocktailById()
  }

  getCocktailById(){
    this.cocktailService.getCocktailById(this.cocktailId).subscribe({
      next: (cocktail) => {
        cocktail.drinks.forEach( (element:any) => {
          this.cocktailName = element.strDrink
          this.cocktailImage = element.strDrinkThumb
          for(let i = 1; i <= 15; i++){
            if(element[`strIngredient${i}`] != null){
              this.cocktailIngredients.push({name: element[`strIngredient${i}`], position: i})
            }
          }
        });
      },
      error: () => {

      },
      complete: () => {
        this.getIngredientData()
      }
    })
  }

  getIngredientData(){
    this.cocktailIngredients.forEach(async (ingredient) => {
      this.cocktailService.getIngredientByName(ingredient.name).subscribe({
        next: (result) => {
          result.ingredients.forEach((ingredientData: any) => {
            this.ingredients.push({id: ingredientData.idIngredient, name: ingredientData.strIngredient})
          });
        }
      })
    });
  }

  getCocktailsByIngredient(){

  }

}
