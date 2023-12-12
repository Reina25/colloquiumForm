import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../service/form-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-c-form',
  templateUrl: './c-form.component.html',
  styleUrls: ['./c-form.component.css']
})
export class CFormComponent implements OnInit {

  constructor(private formService: FormServiceService){}

  studentFirstName:any;

  submitted:boolean=false;

  cForm: NgForm;

  q1: string = "اسم الطالب الكامل";
  q2: string = "الجنس";
  q3: string = "رقم الهاتف";
  q4: string = "البريد الالكتروني الخاص بالجامعة ";
  q5: string = "مكان الولادة";
  q6: string = "تاريخ الولادة";

  q7: string = "صورة شمسية";
  q8: string = "هوية";
  q9: string = "إخراج قيد";
  q10: string = "شهادة مصادقة";
  q11: string = "ثانوية عامة أو ما يعادلها مصدقة";
  q12: string = "ملف تدريب مصدق من وزارة الصحة (طب وتغذية)";
  q13: string = "معادلة (طب)"


  


  selectedOption1:any 
  savedOption1:any;

  selectedOption2:any 
  savedOption2:any;

  selectedOption3:any 
  savedOption3:any;

  selectedOption4:any 
  savedOption4:any;




ngOnInit() {

  // get saved student and event data from saved data in local storage




 // save student response of survey (if changed)
  this.savedOption1 = sessionStorage.getItem('selectedOption1');

  if (this.savedOption1) {
    this.selectedOption1 = this.savedOption1;
    this.saveSelection1(this.selectedOption1);

  }

  this.savedOption2 = sessionStorage.getItem('selectedOption2');

  if (this.savedOption2) {
    this.selectedOption2 = this.savedOption2;
    this.saveSelection2(this.selectedOption2);
    
  }

  this.savedOption3 = sessionStorage.getItem('selectedOption3');

  if (this.savedOption3) {
    this.selectedOption3 = this.savedOption3;
    this.saveSelection3(this.selectedOption3);
  
  }

  this.savedOption4 = sessionStorage.getItem('selectedOption4');

  if (this.savedOption4) {
    this.selectedOption4 = this.savedOption4;
    this.saveSelection4(this.selectedOption4);
   
  }



}



// save student response of survey (if refreshed or traversed from page to page)
saveSelection1(newValue: string) {
  this.selectedOption1=newValue;
  sessionStorage.setItem('selectedOption1', this.selectedOption1);
}

saveSelection2(newValue: string) {
  this.selectedOption2=newValue;
  sessionStorage.setItem('selectedOption2', this.selectedOption2);
}
saveSelection3(newValue: string) {
  this.selectedOption3=newValue;
  sessionStorage.setItem('selectedOption3', this.selectedOption3);
}
saveSelection4(newValue: string) {
  this.selectedOption4=newValue;
  sessionStorage.setItem('selectedOption4', this.selectedOption4);
}

// submit student response and redirect to iConnect once done
  onSubmit(User: {studentID: string, eventID: string, radios1: string, radios2: string, radios3: string, suggestions: string}){
    this.submitted = true;
   
    this.formService.onSubmit(User);

    setTimeout(() => {
      window.location.href = 'https://icas.bau.edu.lb:8443/cas/login?service=https://mis.bau.edu.lb/web/v12/iconnectv12/cas/sso.aspx';
    }, 5000); 

  }


}
