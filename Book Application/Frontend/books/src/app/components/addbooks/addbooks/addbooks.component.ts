import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksClass } from 'src/app/interface/books';
import { BooksApiService } from 'src/app/service/book-api.service';


@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.scss']
})
export class AddbooksComponent implements OnInit {


 form=new FormGroup({
   title: new FormControl('', Validators.required),
 author: new FormControl('', Validators.required),
 description: new FormControl('',Validators.minLength(6)),
 image:new FormControl( '', Validators.required)
});



  submitted = false;




  constructor(private bookService:BooksApiService,
    public router:Router
   
    ) { }

  ngOnInit(): void {
 
}



  addNewBook(add:BooksClass){
    this.bookService.addNewBook(add).subscribe((result)=>{
    
    });
  }

  get f() 
  {
    console.log(this.form.controls);
    return this.form.controls;
    
    
  }

  onSubmit() 
  {
    this.submitted = true;
console.log("press");
  this.bookService.addNewBook(this.form.value).subscribe(
      (res) => {
        console.log("Succesfully Registered");
        
    },
      (error) => {
        console.log(
          'Username already exist'
        );
      }
    );
  }
}
