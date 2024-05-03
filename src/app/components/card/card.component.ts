import { Component, Input } from '@angular/core';
import { FoodData } from '../types/food-data.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() menuItem!: FoodData;
}
