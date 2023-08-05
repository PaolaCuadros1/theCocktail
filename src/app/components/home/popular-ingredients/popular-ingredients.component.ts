import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popular-ingredients',
  templateUrl: './popular-ingredients.component.html',
  styleUrls: ['./popular-ingredients.component.scss']
})
export class PopularIngredientsComponent implements OnInit {

  popularIngredients = [
    { img: 'assets/images/Vodka.png', name: 'Vodka', bgColor: '#dfbed8' },
    { img: 'assets/images/Gin.png', name: 'Gin', bgColor: '#c5dba1' },
    { img: 'assets/images/Rum.png', name: 'Rum', bgColor: '#dbb6a1' },
    { img: 'assets/images/Tequila.png', name: 'Tequila', bgColor: '#c5dba1' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
