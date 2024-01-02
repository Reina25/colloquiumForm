import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  studentID: string;

  hash: any;
  
  fullName: any;

  program: any;

  private studentData: any = {}; 




  constructor(private http: HttpClient,  private router: Router) { }

  // set and get student ID and hash

  setStudentID(studentID: string) {
    this.studentID = studentID;
    return studentID;
  }


  getStudentID() {
    return this.studentID;
  }

  setHash(hash: string) {
    this.hash = hash;
    return hash;
  }


  getHash() {
    return this.hash;
  }




  //  set get and save student data

  setStudentName(studentName: string) {
    this.fullName = studentName;
    return studentName;
  }

  getStudentName() {
    return this.fullName;
  }

    saveStudentName() {
    return localStorage.setItem('studentName', this.getStudentName());
  }

  getSavedStudentName() {
    return localStorage.getItem('studentName')
  }

  setStudentProgram(program: string) {
    this.program = program;
    return program;
  }

  getStudentProgram() {
    return this.program;
  }

    saveStudentProgram() {
    return localStorage.setItem('program', this.getStudentProgram());
  }

  getSavedStudentProgram() {
    return localStorage.getItem('program')
  }


  

  // save and get saved student ID and hash

  saveStudentID() {
    return localStorage.setItem('studentID', this.getStudentID());
  }

  getSavedStudentID() {
    return localStorage.getItem('studentID')
  }

  saveHash() {
    return localStorage.setItem('hash', this.getHash());
  }

  getSavedHash() {
    return localStorage.getItem('hash')
  }


  fetchStudentData() {
    this.http.get<any>(
      'http://172.30.2.8:121/api/Student/'+ this.getStudentID()
    )
      .subscribe((response) => {
       
        const student = response[0]; 

     
        
        this.studentData.fullName = student.arabicFullName;
        this.studentData.faculty = student.faculty;
        this.studentData.campus = student.campus;
        this.studentData.program = student.program;

   

        this.studentData.fullName = this.setStudentName(this.studentData.fullName);
        this.studentData.fullName = this.saveStudentName();

        this.studentData.program = this.setStudentProgram(this.studentData.program);
        this.studentData.program = this.saveStudentProgram();


      });
  }




  onSubmit(User: {   studentName: string,
    radios1: string,
    studentPhoneCode: string,
    studentPhone: string,
    studentEmail: string,
    studentPlaceBirth: string,
    studentDateBirth: string,
    personalPhoto: string, 
    completePhone: string
  }) {

    console.log(User);
    const headers = new HttpHeaders({ 'myHeader': 'BAUEventSurvey' });
    this.http.post<{ name: string }>(
      'https://colloquiumform-default-rtdb.firebaseio.com/formResposnse.json',
      User, { headers: headers })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
