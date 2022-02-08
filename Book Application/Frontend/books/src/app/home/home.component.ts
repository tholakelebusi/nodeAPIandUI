import { Component, OnInit } from '@angular/core';
import { BooksApiService } from 'src/app/service/book-api.service';
import { BooksClass } from 'src/app/interface/books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allbooks:any;
  employees:any;
  editform:boolean=false;
  constructor(private booksService:BooksApiService) { }

  ngOnInit(
  ): void {
    this.booksService.getAllBooks().subscribe((res)=>
    {
      this.allbooks=res;
      
    })
 
  }

  update(id:any)
  {
localStorage.setItem("id",id);
this.booksService.getOne(id).subscribe((res)=>
{
  this.employees=res
}

);
this.editform=true;

  }

  save(information:any)
  {

    this.booksService.updateBook(localStorage.getItem("id"),information).subscribe((res)=>
    {
      this.employees=res
    }
    );
    this.editform=false;
    window.location.reload()
    this.allbooks();
  }
  delete(id:any)
  {
this.booksService.deleteBook(id).subscribe((res)=>
{

})
window.location.reload()
  }
  
}

