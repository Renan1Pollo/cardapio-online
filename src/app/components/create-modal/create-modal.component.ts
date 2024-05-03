import { FoodData } from './../types/food-data.type';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../shared/input/input.component';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-create-modal',
  standalone: true,
  templateUrl: './create-modal.component.html',
  styleUrl: './create-modal.component.scss',
  imports: [CommonModule, InputComponent],
})
export class CreateModalComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: FoodService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      image: [null, Validators.required],
    });
  }

  createFood() {
    if (this.form.invalid) {
      return;
    }

    const data = this.getFoodData();
    this.service.postData(data);
    this.closeModal();
  }

  closeModal() {
    this.modalClosed.emit();
  }

  getFoodData(): FoodData {
    return {
      title: this.form.value.title,
      price: this.form.value.price,
      image: this.form.value.image,
    };
  }
}
