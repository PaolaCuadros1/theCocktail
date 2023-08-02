import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  letters: string = ''
  constructor() { }

  ngOnInit(): void {
    this.generateAbecesary()
  }

  generateAbecesary() {
    for (let i = 65; i <= 90; i++) {
      const slash = (i == 65 || i == 91) ? '' : '/'
      this.letters = `${this.letters}${slash}${String.fromCharCode(i)}`
    }
  }

}
