import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'epd-pl-colors-example',
    templateUrl: './colors-example.component.html',
    styleUrls: [ './colors-example.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ColorsExampleComponent {

}
