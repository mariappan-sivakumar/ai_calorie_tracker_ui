import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-meal-tabs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './meal-tabs.component.html',
  styleUrls: ['./meal-tabs.component.css'],
})
export class MealTabsComponent {
  constructor(private router: Router) {}

  go(tab: 'standard' | 'smart' | 'image') {
    this.router.navigate([tab]);
  }
}
