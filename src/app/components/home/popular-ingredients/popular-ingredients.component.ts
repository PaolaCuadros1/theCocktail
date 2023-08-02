import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popular-ingredients',
  templateUrl: './popular-ingredients.component.html',
  styleUrls: ['./popular-ingredients.component.scss']
})
export class PopularIngredientsComponent implements OnInit {

  popularIngredients = [
    { img: 'assets/images/Vodka.png', name: 'Vodka' },
    { img: 'assets/images/Gin.png', name: 'Gin' },
    { img: 'assets/images/Rum.png', name: 'Rum' },
    { img: 'assets/images/Tequila.png', name: 'Tequila' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
