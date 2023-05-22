import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuroraBackdropComponent } from './backdrop.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuroraBackdropComponent],
  exports: [AuroraBackdropComponent]
})
export class AuroraBackdropModule { }
