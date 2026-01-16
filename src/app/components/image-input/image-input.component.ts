import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/core/service/food.service';
import { FoodStateService } from 'src/app/core/service/food-state.service';

@Component({
  selector: 'app-image-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css'],
})
export class ImageInputComponent {
  @Output() result = new EventEmitter<any>();

  file!: File;
  hint = '';
  loading = false;

  constructor(
    private foodService: FoodService,
    private foodState: FoodStateService,
    private router: Router) {}

  onFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
  }

  analyze() {
    if (!this.file) {
      return;
    }
    this.loading=true
    const formData = new FormData();
    formData.append('image', this.file);

    if (this.hint) {
      formData.append('hint', this.hint);
    }

    this.foodService.imageInput(formData).subscribe({
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
