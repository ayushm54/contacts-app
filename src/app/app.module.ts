import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ContactListComponent },
      { path: 'addContact', component: AddContactComponent },
      { path: 'edit', component: EditContactComponent }
    ],
    {onSameUrlNavigation: 'reload'}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatProgressBarModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ContactListComponent,
    AddContactComponent,
    DeleteContactComponent,
    ContactDetailsComponent,
    EditContactComponent
  ],
  entryComponents: [
    DeleteContactComponent,
    ContactDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
