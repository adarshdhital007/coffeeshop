import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css'],
})
export class CupComponent {
  @Input() item?: string;
  @Input() recipe: { name: string; quantity: number }[] = [];

  constructor() {
  }
}
