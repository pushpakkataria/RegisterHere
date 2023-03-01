import { Component } from '@angular/core';
import { FormControl ,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'livetest';
loginform =new FormGroup({
  Firstname:new FormControl('',[Validators.required,Validators.minLength(50) ]),
  Lastname:new FormControl('',[Validators.required,Validators.minLength(50) ]),
  EmailAddress:new FormControl('',[Validators.required,Validators.minLength(254) ]),
  Phonenumber:new FormControl('',[Validators.required,Validators.minLength(10) ]),
  OrganizationName:new FormControl('',[Validators.required,Validators.minLength(1000) ]),
  OrganizationAddress:new FormControl('',[Validators.required,Validators.minLength(1000) ]),
  password:new FormControl('',[Validators.required,Validators.minLength(16) ])
})
Submit(){
  console.warn(this.loginform.value)
}
get Firstname(){
  return this.loginform.get('Firstname')
}
get Lastname(){
  return this.loginform.get('Lastname')
}
get EmailAddress(){
  return this.loginform.get('EmailAddress')
}
get Phonenumber(){
  return this.loginform.get('Phonenumber')
}
get OrganizationName(){
  return this.loginform.get('OrganizationName')
}
get OrganizationAddress(){
  return this.loginform.get('OrganizationAddress')
}
get password(){
  return this.loginform.get('password')
}
set(){
   this.loginform.reset()
}
  }
