import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/core/service/food.service';
import { FoodStateService } from 'src/app/core/service/food-state.service';

@Component({
  selector: 'app-ai-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './smart-input.component.html',
  styleUrl: './smart-input.component.css',
})
export class SmartInputComponent {
  @Output() result = new EventEmitter<any>();
  text = '';
  loading = false;
  constructor(
    private foodService: FoodService,
    private foodState: FoodStateService,
    private router: Router) {}

  analyze() {
    this.loading=true;
    this.foodService
      .aiInput(this.text)
      .subscribe({
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
