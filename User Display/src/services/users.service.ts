import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string ="https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {}


//get all users
  getAllUsers() {
    return this.http.get(this.url).pipe(
      map(response => response)
  );
}

//get selected user
public getOneUser(id:any)
{
  return this.http.get(`${this.url}/${id}`);
}

}