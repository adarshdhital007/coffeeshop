import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  constructor(private http: HttpClient) { }

  getCoffeeItems(): Observable<any[]> {

    return this.http.get<any[]>('../assets/list.json');
  }
}
