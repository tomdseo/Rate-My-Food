import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newFood: any;
  newRating: any;
  allFood: any;
  selectedFood: any;
  selectedFoodAvgRating: any;

  constructor(private _httpService: HttpService) {
  }

  dataFromChild(eventData) {
    console.log(eventData);
  }

  ngOnInit() {
    this.getAllFood();
    this.newFood = {name : "", image: ""}
    this.newRating = {value: 5, comment: ""}
    this.selectedFood = {name: "", image: "placeholder"}
    this.selectedFoodAvgRating = 5;
  }

  getAllFood() {
    let observable = this._httpService.getAllFood();
    observable.subscribe(data => {
      console.log("Showing all Food", data);
      this.allFood = data;
    });
  }

  onNewFood() {
    let observable = this._httpService.createFood(this.newFood);
    observable.subscribe(obj => {
      console.log("Task from Post Back!", obj);
    });
    this.getAllFood();
  }

  onShowFood(food): void {
    console.log("Showing Task", food);
    this.selectedFood = food;
    if(food.ratings.length > 0) {
      let sum = 0;
      for(let rating of food.ratings) {
        sum += rating.value;
      }
      this.selectedFoodAvgRating = (Math.round((sum / food.ratings.length) * 10)/10);
    } else {
      this.selectedFoodAvgRating = "#";
    }
  }

  onNewRating(newRatingFoodID) {
    this.newRating.value = parseInt(this.newRating.value);
    let observable2 = this._httpService.addRating(newRatingFoodID, this.newRating);
    observable2.subscribe(obj => {
      console.log("Added Rating to This " + obj[0].name)
      this.newRating = { value: 5, comment: ""}
    });
    this.getAllFood(); //shows all food
  }
}



