import { Component } from '@angular/core';

@Component({
  selector: 'aurora-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class AuroraButtonComponent {

  public classes = [];
  public disabled = false;
  public color = 'black';

  constructor() { }

}
