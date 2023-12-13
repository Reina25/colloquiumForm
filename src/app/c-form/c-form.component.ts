import { Component, OnInit, ViewChild } from '@angular/core';
import { FormServiceService } from '../service/form-service.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-c-form',
  templateUrl: './c-form.component.html',
  styleUrls: ['./c-form.component.css']
})
export class CFormComponent implements OnInit {

  constructor(private formService: FormServiceService, private http: HttpClient){}

  studentFirstName:any;

  submitted:boolean=false;

  @ViewChild('cForm') yourForm: NgForm;
  
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


  


  selectedOption1: any 
  savedOption1: any;

  selectedOption2: any 
  savedOption2: any;

  selectedOption3: any 
  savedOption3: any;

  selectedOption4: any 
  savedOption4: any;

  selectedOptionExtra: any 
  savedOptionExtra: any;

  selectedOption5: any 
  savedOption5: any;

  selectedOption6: any 
  savedOption6: any;

  selectedOption7: any 
  savedOption7: any;





ngOnInit() {




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

  this.savedOption5 = sessionStorage.getItem('selectedOption5');

  if (this.savedOption5) {
    this.selectedOption5 = this.savedOption5;
    this.saveSelection5(this.selectedOption5);
   
  }

  this.savedOptionExtra = sessionStorage.getItem('selectedOptionExtra');

  if (this.savedOptionExtra) {
    this.selectedOptionExtra = this.savedOptionExtra;
    this.saveSelectionExtra(this.selectedOptionExtra);
   
  }

  this.savedOption6 = sessionStorage.getItem('selectedOption6');

  if (this.savedOption6) {
    this.selectedOption6 = this.savedOption6;
    this.saveSelection6(this.selectedOption6);
   
  }


  this.savedOption7 = sessionStorage.getItem('selectedOption7');

  if (this.savedOption7) {
    this.selectedOption7 = this.savedOption7;
    this.saveSelection7(this.selectedOption7);
   
  }



}



// save student response of survey (if refreshed or traversed from page to page)
saveSelection1(newValue: string) {
  this.selectedOption1 = newValue;
  sessionStorage.setItem('selectedOption1', this.selectedOption1);
}

saveSelection2(newValue: string) {
  this.selectedOption2 = newValue;
  sessionStorage.setItem('selectedOption2', this.selectedOption2);
}
saveSelection3(newValue: string) {
  this.selectedOption3 = newValue;
  sessionStorage.setItem('selectedOption3', this.selectedOption3);
}
saveSelection4(newValue: string) {
  this.selectedOption4 = newValue;
  sessionStorage.setItem('selectedOption4', this.selectedOption4);
}
saveSelection5(newValue: string) {
  this.selectedOption5 = newValue;
  sessionStorage.setItem('selectedOption5', this.selectedOption5);
}

saveSelection6(newValue: string) {
  this.selectedOption6 = newValue;
  sessionStorage.setItem('selectedOption6', this.selectedOption6);
}

saveSelection7(newValue: string) {
  this.selectedOption7 = newValue;
  sessionStorage.setItem('selectedOption7', this.selectedOption7);
}

saveSelectionExtra(newValue: string) {
  this.selectedOptionExtra = newValue;
  sessionStorage.setItem('selectedOptionExtra', this.selectedOptionExtra);
}

// submit student response and redirect to iConnect once done
  onSubmit(User: { studentName: string,
    radios1: string,
    studentPhoneCode: string,
    studentPhone: string,
    studentEmail: string,
    studentPlaceBirth: string,
    studentDateBirth: string,
    personalPhoto: File, }){
    this.submitted = true;
   
    this.formService.onSubmit(User);

    setTimeout(() => {
      window.location.href = 'https://icas.bau.edu.lb:8443/cas/login?service=https://mis.bau.edu.lb/web/v12/iconnectv12/cas/sso.aspx';
    }, 5000); 

  }


}
