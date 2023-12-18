import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CFormComponent } from './c-form/c-form.component';
import { CheckInfoComponent } from './check-info/check-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CFormComponent,
    CheckInfoComponent,
    PageNotFoundComponent,
    FormSubmittedComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
