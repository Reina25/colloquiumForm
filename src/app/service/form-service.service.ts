import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  studentID: string;

  hash: any;
  
  fullName: any;

  private studentData: any = {}; 




  constructor(private http: HttpClient) { }

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

   

        this.fullName = this.setStudentName(this.studentData.fullName);
        this.fullName = this.saveStudentName();

        // this.faculty = this.setFaculty(this.studentData.faculty);
        // this.faculty = this.saveFaculty();

        // this.campus = this.setCampus(this.studentData.campus);
        // this.campus = this.saveCampus();



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
