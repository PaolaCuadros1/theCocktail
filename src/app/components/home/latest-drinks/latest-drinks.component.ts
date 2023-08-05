import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'latest-drinks',
  templateUrl: './latest-drinks.component.html',
  styleUrls: ['./latest-drinks.component.scss']
})
export class LatestDrinksComponent implements OnInit {

  lastesDrinks = [
    { img: 'assets/images/Cocktail-Horses-Neck.png', name: 'Cocktail Horse’s Neck' },
    { img: 'assets/images/Planters-Punch.png', name: 'Planter’s Punch' },
    { img: 'assets/images/Ramos-Gin-Fizz.png', name: 'Ramos Gin Fizz' },
    { img: 'assets/images/Gin-Lemon.png', name: 'Gin Lemon' },
    { img: 'assets/images/Gin-Tonic.png', name: 'Gin Tonic' },
    { img: 'assets/images/Vodka-Tonic.png', name: 'Vodka Tonic' },
    { img: 'assets/images/Vodka-Lemon.png', name: 'Vodka Lemon' },
    { img: 'assets/images/Vodka-Slime.png', name: 'Vodka Slime' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
