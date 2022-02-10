import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
books:any;
editalert:boolean=false;
  constructor(private booksService:BooksService) { }

  ngOnInit(): void {
    this.booksService.getOne(localStorage.getItem("id")).subscribe((res)=>
    {
      this.books=res
    }
    
    );

  }

  save(information:any)
  {

    this.booksService.updateBook(localStorage.getItem("id"),information).subscribe((res)=>
    {
     this.editalert=true;
    }
    );
    localStorage.clear();
    // window.location.reload()
 
  }


}
