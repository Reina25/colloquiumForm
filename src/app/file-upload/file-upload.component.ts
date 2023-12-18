import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UploadedFile } from '../model/uploadedFile';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {



ngOnInit() {
  const storedFiles = localStorage.getItem('uploadedFiles');
  if (storedFiles) {
    this.uploadedFiles = JSON.parse(storedFiles);
  }

  const storedFile1 = localStorage.getItem('selectedFile1');
  if (storedFile1) {
    this.selectedFile1 = JSON.parse(storedFile1);
  }}



@Input() label: string = '';
@Output() filesChanged: EventEmitter<UploadedFile[]> = new EventEmitter<UploadedFile[]>();
@Input() fieldName: string = '';
@Input() question: string = '';
@Output() selectedFileChanged: EventEmitter<any> = new EventEmitter<any>();


uploadedFiles: UploadedFile[] = [];

selectedFile1: any | undefined;

@ViewChild('fileInput') fileInput!: ElementRef;

onFileSelected2(event: any) {
  const selectedFile: File = event.target.files[0];
  if (selectedFile && selectedFile.type === 'image/jpeg') {
    const reader = new FileReader();
    reader.onload = () => {
      const imageContent = reader.result;
      const uploadedFile: UploadedFile = {
        name: this.fieldName,
        content: imageContent as string
      };
      this.uploadedFiles.push(uploadedFile);

      if (this.fieldName === 'personalPhoto') {
        this.selectedFileChanged.emit(selectedFile); // Emit selected file changes for personalPhoto
      } else if (this.fieldName === 'image2') {
        this.selectedFileChanged.emit(selectedFile); // Emit selected file changes for otherDocument
      }

      this.filesChanged.emit(this.uploadedFiles);
      // Other handling like localStorage, etc.
    };
    reader.readAsDataURL(selectedFile);
  }
}



// onFileSelected2(event: any) {
//   const file: File = event.target.files[0];
//   if (file && file.type === 'image/jpeg') {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const uploadedFile: UploadedFile = {
//         name: this.fieldName,
//         content: reader.result as string // Assuming you want base64 representation
//       };
//       this.uploadedFiles.push(uploadedFile);
//       this.selectedFile1 = uploadedFile;
//       // Save to localStorage or sessionStorage
//       localStorage.setItem('uploadedFiles', JSON.stringify(this.uploadedFiles));
//       localStorage.setItem('selectedFile1', JSON.stringify(this.selectedFile1));
//       this.filesChanged.emit(this.uploadedFiles);
      
//       this.filesChanged.emit(this.selectedFile1);

//     };
//     reader.readAsDataURL(file);
//   }
// }


deleteFile(file: UploadedFile) {
  this.uploadedFiles = this.uploadedFiles.filter(f => f !== file);
  localStorage.setItem('uploadedFiles', JSON.stringify(this.uploadedFiles));
  localStorage.setItem('selectedFile1', null);
  const storedFile1 = localStorage.getItem('selectedFile1');
  if (storedFile1) {
    this.selectedFile1 = JSON.parse(storedFile1);
  }
  this.fileInput.nativeElement.value = '';

}


}
