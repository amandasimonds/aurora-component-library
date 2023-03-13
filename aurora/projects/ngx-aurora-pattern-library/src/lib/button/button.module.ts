import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraButtonComponent } from './button.component';



@NgModule({
  declarations: [AuroraButtonComponent],
  imports: [
    CommonModule,
  ],
  exports: [AuroraButtonComponent]
})
export class AuroraButtonModule { }
