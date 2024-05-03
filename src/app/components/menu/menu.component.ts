import { FoodService } from './../../services/food.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FoodData } from '../types/food-data.type';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { CreateModalComponent } from '../create-modal/create-modal.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  imports: [CardComponent, CommonModule, CreateModalComponent],
})
export class MenuComponent implements OnInit {
  isCreating: boolean = false;
  foodData!: FoodData[];

  constructor(private service: FoodService) {}

  toggleCreateMode() {
    this.isCreating = true;
  }

  onModalClosed() {
    this.isCreating = false;
    this.getFoodData();
  }

  ngOnInit(): void {
    this.getFoodData();
  }

  getFoodData(): void {
    this.foodData = [];
    this.service.getData().subscribe((data: FoodData[]) => {
      this.foodData = data;
    });
  }
}
