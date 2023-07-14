import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';

@NgModule({
    declarations: [InputComponent],
    imports: [ReactiveFormsModule, CommonModule],
    exports: [InputComponent],
})
export class InputModule {}
