import { Component, Input } from '@angular/core';

@Component({
    selector: 'aurora-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class AuroraButtonComponent {
    @Input() public kind: 'text' | 'primary' | 'secondary' = 'primary';
    @Input() public color: 'primary' | '' = 'primary';
    @Input() public icon = '';
    @Input() public disabled = false;
    @Input() public label = 'Button' 

    public get classes(): string[] {
        return [this.kind]
    }

    
}
