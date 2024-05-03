import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from "../../shared/input/input.component";

@Component({
    selector: 'app-create-modal',
    standalone: true,
    templateUrl: './create-modal.component.html',
    styleUrl: './create-modal.component.scss',
    imports: [CommonModule, InputComponent]
})
export class CreateModalComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      image: [null, Validators.required],
    });
  }

  closeModal() {
    this.modalClosed.emit();
  }

  printForm() {
    console.log(this.form);
  }
}
