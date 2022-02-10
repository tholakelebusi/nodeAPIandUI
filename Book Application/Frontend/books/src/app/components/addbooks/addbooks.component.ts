import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.scss']
})
export class AddbooksComponent implements OnInit {

  submitted = false;
  allbooks:any;
  addedalert:boolean=false;
  addform:boolean=true;
form: FormGroup = new FormGroup({
  title: new FormControl(''),
  author: new FormControl(''),
  description: new FormControl(''),
  image: new FormControl('')
});

constructor(private formBuilder: FormBuilder,private router:Router,
  private bookService:BooksService) {}
ngOnInit(): void {
  this.form = this.formBuilder.group(
    {
      title: ['', Validators.required],
      author: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]]
    },
  );
}


get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}
onSubmit(): void {
  this.submitted = true;

    this.bookService.addNewBook(this.form.value).subscribe(
        (res) => {
          this.addform=false;
        this.addedalert=true;
          this.router.navigateByUrl('/');
      },(err) => {

          this.addedalert=false;
       
        }
      );
 
  
}
onReset(): void {
  this.submitted = false;
  this.form.reset();
}

}
