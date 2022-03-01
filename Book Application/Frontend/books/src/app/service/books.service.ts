import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

 url: string ="http://localhost:3000/books";
  constructor(private http: HttpClient) {}

  
  getAllBooks() {
    return this.http.get(this.url).pipe(
      map(response => response)
  );
}

addNewBook(addDetails:any)
{
  return this.http.post(`${this.url}`,addDetails);

}

public updateBook(BookInformation_id:any,BookInformation:any){
  return this.http.put(`${this.url}/${BookInformation_id}`,BookInformation);
}

public deleteBook(id: any){
  return this.http.delete(`${this.url}/${id}`);
}

public getOne(id:any)
{
  return this.http.get(`${this.url}/${id}`);
}

}
