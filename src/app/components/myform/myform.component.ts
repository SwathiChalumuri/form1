import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {
  profileForm: FormGroup;
  obj = {};
  constructor(public ser:ServicesService) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      fn: new FormControl(''),
      ln: new FormControl(''),
      dept: new FormControl(''),
      email: new FormControl(''),
      phno: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
    });
  }
  onSubmit(){
    console.log(this.profileForm.value);
    this.obj = this.profileForm.value;
    this.ser.postData(this.obj).subscribe(res=>{
      console.log(res);
    })
  }

}
