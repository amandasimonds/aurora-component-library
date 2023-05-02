import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorsExampleComponent } from './colors-example.component';

@NgModule({
    declarations: [
        ColorsExampleComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
    ],
    exports: [
        ColorsExampleComponent
    ]
})
export class ColorsExampleModule {
}
