import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aurora-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent  {

    @Input() public size: 'auto' | 'sm' | 'md' = 'auto';

}
