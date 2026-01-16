import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FoodService } from './core/service/food.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
     FormsModule,
      RouterOutlet,
       RouterLink,
        RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AI Calorie Tracker';
  foodName = '';
  grams = 0;
  aiPrompt = '';
  imageQuantity = '1 serving';
  imageFile?: File;

  result: any;

  constructor(private foodService: FoodService) {}

  submitManual() {
    this.foodService.manualInput(this.foodName, this.grams)
      .subscribe(res => this.result = res);
  }

  submitAI() {
    this.foodService.aiInput(this.aiPrompt)
      .subscribe(res => this.result = res);
  }

  onImageSelect(event: any) {
    this.imageFile = event.target.files[0];
  }

  submitImage() {
    if (!this.imageFile) return;
  
    const formData = new FormData();
    formData.append('image', this.imageFile);
    formData.append('quantity', this.imageQuantity);
  
    this.foodService.imageInput(formData)
      .subscribe((res: any) => {
        this.result = res;
      });
  }
  
}
