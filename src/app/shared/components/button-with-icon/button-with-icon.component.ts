import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss']
})
export class ButtonWithIconComponent implements OnInit {
  @Input() type: string = 'button';
  @Input() iconName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
