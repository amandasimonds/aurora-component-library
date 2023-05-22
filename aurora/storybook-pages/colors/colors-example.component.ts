import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import * as colors from '../../projects/ngx-aurora-pattern-library/src/lib/styles/tokens/tokens.json';
@Component({
    selector: 'epd-pl-colors-example',
    templateUrl: './colors-example.component.html',
    styleUrls: ['./colors-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class ColorsExampleComponent implements OnInit {
    public colors = colors;
    public colorsArray;

    constructor() {
        this.colorsArray =  Object.entries(this.colors['apl-color']);
    }

    ngOnInit() {
        console.log(typeof this.colorsArray, this.colorsArray)
    }
}
