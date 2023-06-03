import { Component, Input } from '@angular/core';

@Component({
    selector: 'aurora-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
    @Input() label = 'Chip Label';
}
