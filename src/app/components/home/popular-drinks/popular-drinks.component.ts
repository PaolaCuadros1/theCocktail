import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popular-drinks',
  templateUrl: './popular-drinks.component.html',
  styleUrls: ['./popular-drinks.component.scss']
})
export class PopularDrinksComponent implements OnInit {

  popularDrinks = [
    { img: 'assets/images/mojito.png', name: 'Mojito' },
    { img: 'assets/images/Old-Fashioned.png', name: 'Old Fashioned' },
    { img: 'assets/images/Long-Island-Tea.png', name: 'Long Island Tea' },
    { img: 'assets/images/Negroni.png', name: 'Negroni' },
    { img: 'assets/images/Whiskey-Sour.png', name: 'Whiskey Sour' },
    { img: 'assets/images/Dry-Martini.png', name: 'Dry Martini' },
    { img: 'assets/images/Daiquiri.png', name: 'Daiquiri' },
    { img: 'assets/images/Margarita.png', name: 'Margarita' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
