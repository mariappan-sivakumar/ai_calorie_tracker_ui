import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodStateService } from 'src/app/core/service/food-state.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
})
export class ResultComponent {
  data;

  constructor(private foodState: FoodStateService) {
    this.data = this.foodState.result;
  }
}
