import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  studentID: string;

  hash: any;




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
