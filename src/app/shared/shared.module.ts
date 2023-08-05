import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ButtonWithIconComponent } from './components/button-with-icon/button-with-icon.component'

@NgModule({
  declarations: [
    ButtonWithIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonWithIconComponent
  ]
})
export class SharedModule { }
