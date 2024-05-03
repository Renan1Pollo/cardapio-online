import { Component } from '@angular/core';
import { FoodData } from '../types/food-data.type';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  imports: [
    CardComponent,
    CommonModule,
  ],
})
export class MenuComponent {
  foodData: FoodData[] = [
    {
      id: 1,
      title: 'Hamburguer de Frango',
      image: 'https://source.unsplash.com/random/1',
      price: 14.99,
    },
    {
      id: 2,
      title: 'Pizza Margherita',
      image: 'https://source.unsplash.com/random/2',
      price: 19.99,
    },
    {
      id: 3,
      title: 'Salada Caesar',
      image: 'https://source.unsplash.com/random/3',
      price: 9.99,
    },
    {
      id: 4,
      title: 'Sopa de Legumes',
      image: 'https://source.unsplash.com/random/4',
      price: 6.99,
    },
    {
      id: 5,
      title: 'Camarão Grelhado',
      image: 'https://source.unsplash.com/random/5',
      price: 24.99,
    },
    {
      id: 6,
      title: 'Pasta Carbonara',
      image: 'https://source.unsplash.com/random/6',
      price: 16.99,
    },
    {
      id: 7,
      title: 'Sushi Variado',
      image: 'https://source.unsplash.com/random/7',
      price: 29.99,
    },
    {
      id: 8,
      title: 'Wrap de Vegetais',
      image: 'https://source.unsplash.com/random/8',
      price: 11.99,
    },
    {
      id: 9,
      title: 'Torta de Maçã',
      image: 'https://source.unsplash.com/random/9',
      price: 7.99,
    },
    {
      id: 10,
      title: 'Cerveja Artesanal',
      image: 'https://source.unsplash.com/random/10',
      price: 5.99,
    },
  ];
}
