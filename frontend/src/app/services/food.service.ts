import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) {
  }

  getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  getFoodBySearch(search:string):Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL+search)
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getFoodsByTag(tag:string):Observable<Food[]>{
    return tag==='All'?
    this.getAll():
    this.http.get<Food[]>(FOODS_BY_TAG_URL+tag);
  }

  getFoodById(id:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL+id);
  }
}
