import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getAllFood() {
    return this._http.get('/food');
  }

  createFood(newFood) {
    return this._http.post('/food', newFood);
  }

  getFood(id) {
    return this._http.get('/food/'+id);
  }

  addRating(id, newRating) {
    return this._http.put('/food/'+id, newRating);
  }

}


