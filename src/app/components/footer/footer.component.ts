import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  letters: Array<string> = []

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.generateAbecesary()
  }

  generateAbecesary() {
    for (let i = 65; i <= 90; i++) {
      this.letters.push(String.fromCharCode(i))
    }
  }

  onClick(letter: string){
    this.router.navigate(['cocktails', {letterOrIngredient: letter, searchBy: 'search'}])
  }

}
