import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import {NavigationStart} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allbooks:any;
  books:any;
  editform:boolean=false;
  popup:boolean=true;
  animal: any;
  name:any;
  addform:boolean=true;
  deletealert:boolean=false;
  constructor(private booksService:BooksService,
    private router:Router) { }

  ngOnInit(
  ): void {
    this.booksService.getAllBooks().subscribe((res)=>
    {
      this.allbooks=res;
      
    }),
 
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
   		
      }
   })
  }

  update(id:any)
  {
    
    this.editform=true;
    this.addform=false;
localStorage.setItem("id",id);

  }

 
  delete(id:any)
  {
    this.deletealert=true;
this.booksService.deleteBook(id).subscribe((res)=>
{
  window.location.reload()
})


  }

}

