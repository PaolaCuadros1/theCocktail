import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random-drinks',
  templateUrl: './random-drinks.component.html',
  styleUrls: ['./random-drinks.component.scss']
})
export class RandomDrinksComponent implements OnInit {

  randomDrinks = [
    { img: 'assets/images/Pure-Passion.png', name: 'Pure Passion' },
    { img: 'assets/images/Egg-Nog-4.png', name: 'Egg Nog #4' },
    { img: 'assets/images/Kiwi-Papaya-Smoothie.png', name: 'Kiwi Papaya Smoothie' },
    { img: 'assets/images/Wine-Punch.png', name: 'Wine Punch' },
    { img: 'assets/images/Arise-My-Love.png', name: 'Arise My Love' },
    { img: 'assets/images/Screwdriver.png', name: 'Screwdriver' },
    { img: 'assets/images/After-Five.png', name: 'After Five' },
    { img: 'assets/images/151-Florida-Bushwacker.png', name: '151 Florida Bushwacker' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
