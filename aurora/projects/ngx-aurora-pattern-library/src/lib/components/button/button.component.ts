import { Component, Input } from '@angular/core';

@Component({
    selector: 'aurora-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class AuroraButtonComponent {
    public classes = [];
    @Input() public mode: 'text' | 'primary' | 'secondary' = 'primary';
    @Input() public color: 'primary' | '' = 'primary';
    @Input() public icon = '';
    @Input() public disabled = false;

    
}
