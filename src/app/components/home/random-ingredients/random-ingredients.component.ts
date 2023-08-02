import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random-ingredients',
  templateUrl: './random-ingredients.component.html',
  styleUrls: ['./random-ingredients.component.scss']
})
export class RandomIngredientsComponent implements OnInit {

  randomIngredients = [
    { img: 'assets/images/Limeade.png', name: 'Limeade' },
    { img: 'assets/images/Chocolate-Syrup.png', name: 'Chocolate Syrup' },
    { img: 'assets/images/Melon-Liqueur.png', name: 'Melon Liqueur' },
    { img: 'assets/images/Kiwi-Liqueur.png', name: 'Kiwi Liqueur' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
