import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aurora-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuroraCardComponent  {

    @Input() public size: 'auto' | 'sm' | 'md' = 'auto';

}
