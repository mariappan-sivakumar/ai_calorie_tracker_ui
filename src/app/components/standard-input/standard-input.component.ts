import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/core/service/food.service';
import { FoodStateService } from 'src/app/core/service/food-state.service';

@Component({
  selector: 'app-standard-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './standard-input.component.html',
  styleUrl: './standard-input.component.css',
})
export class StandardInputComponent {
  foodName = '';
  grams = 0;
  loading = false;

  constructor(
    private foodService: FoodService,
    private foodState: FoodStateService,
    private router: Router
  ) {}

  analyze() {
    this.loading = true;

    this.foodService.manualInput(this.foodName, this.grams).subscribe({
      next: (res) => {
        this.loading = false;
        this.foodState.result = res;
        this.router.navigate(['/result']);
      },
      error: () => {
        this.loading = false;
        alert('Failed to analyze food');
      },
    });
  }
}
