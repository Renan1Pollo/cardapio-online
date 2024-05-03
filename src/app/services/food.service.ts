import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../environment/environment';
import { FoodData } from '../components/types/food-data.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  postData(data: FoodData): Observable<FoodData> {
    return this.http.post<FoodData>(env.apiUrl, data);
  }

  getData(): Observable<FoodData[]> {
    return this.http.get<FoodData[]>(env.apiUrl);
  }
}
