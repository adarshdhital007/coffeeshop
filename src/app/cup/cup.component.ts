import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css'],
})
export class CupComponent {
  @Input() item?: string;
  @Input() disabled: boolean = false;
  @Input() isBigger: boolean = false;
  @Input() recipe: { name: string; quantity: number }[] = [];

  constructor() {
  }
}
