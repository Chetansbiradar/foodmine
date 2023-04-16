import { Injectable } from '@angular/core';
import { Food } from '../shared/models/foods';
import { sampleFoods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {
  }
  getAll():Food[]{
    return sampleFoods
  }

  getFoodBySearch(search:string):Food[]{
    return sampleFoods.filter(food=>food.name.toLowerCase().includes(search.toLowerCase()))
  }
}
