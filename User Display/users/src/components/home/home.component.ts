import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allUsers:any;
  selectedUser:any;
  card:boolean=false;
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    //getting all users.
    this.usersService.getAllUsers().subscribe((res)=>
    {
      this.allUsers=res;
    
      
    })
  }

  //geting details f selected user
  viewUser(id:any)
  {
    this.card=true;
    this.usersService.getOneUser(id).subscribe((res)=>
    {
      this.selectedUser=res
    })
  }

  
  
}
