import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealTabsComponent } from '../meal-tabs/meal-tabs.component';

@Component({
  selector: 'app-log-meal-layout',
  standalone: true,
  imports: [RouterOutlet, MealTabsComponent],
  templateUrl: './log-meal-layout.component.html',
  styleUrls: ['./log-meal-layout.component.css'],
})
export class LogMealLayoutComponent {}
