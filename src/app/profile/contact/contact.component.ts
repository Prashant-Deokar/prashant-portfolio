import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

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
name:[' ',(Validators.required)],
Subject:[' ',(Validators.required)],
email:[' ',(Validators.required)],
Message:[' ',(Validators.required)]
})


     }
     onSubmit(){
      console.log(this.contactForm.value);
      
      if(this.contactForm.valid){
        this.profileService.sentMessage(this.contactForm.value).subscribe(res=>{
          alert("sucessfully")
         console.log(res);
      
        });
      }
      
      
     }


}
