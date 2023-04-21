import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = 'user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private toastrService:ToastrService) { 
    this.userObservable = this.userSubject.asObservable();
  }

  getUSerObservable():Observable<User>{
    return this.userSubject.asObservable();
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user:User) => {
          let userAny = user as any;
          this.setUserToLocalStorage(userAny.user);
          this.userSubject.next(userAny);
          this.toastrService.success(`Welcome ${userAny.user.name}!`, 'Login successful!')

        },
        error: (err) => {
          this.toastrService.error(err.error.message, 'Login failed!')
        }
      })
    );
  }

  logout(){
    this.setUserToLocalStorage({} as User);
    this.userSubject.next({} as User);
    window.location.reload();
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJSON = localStorage.getItem(USER_KEY);
    if(userJSON){
      return JSON.parse(userJSON);
    }
    return new User();
  }
}
