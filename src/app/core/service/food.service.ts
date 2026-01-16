import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private baseUrl = 'https://calorie-tracker-1rfg.onrender.com/api/food';

  constructor(private http: HttpClient) {}

  manualInput(foodName: string, quantity: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/manual_input`, {
      food_name: foodName,
      quantity: quantity,
    });
  }

  aiInput(prompt: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/ai_input`, {
      prompt,
    });
  }

  imageInput(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/from-image`, formData);
  }
}
