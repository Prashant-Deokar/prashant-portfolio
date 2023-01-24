import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  model: any = {};
  contactForm!:FormGroup
  constructor( private formBuilder:FormBuilder, private http:HttpClient,private profileService:ProfileService){}

  ngOnInit() {
this.contactForm=this.formBuilder.group({

})


     }
     onSubmit(){
      console.log(this.contactForm.value);
      
      this.profileService.sentMessage(this.contactForm.value).subscribe(res=>{
        alert("dsdsd")
       console.log(res);
    
      });
      
     }


}
