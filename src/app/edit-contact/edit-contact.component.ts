import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContactService } from '../contact-service';

@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html',
    styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
    contactToEdit;
    contactForm;
    restCall = true;
    errorMessage = 'No data changed!.';
    showErrorMessage = false;
    constructor(private contactService: ContactService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,
                private router: Router) {

        this.contactToEdit = this.contactService.getDataForEditPage();
        this.contactForm = this.formBuilder.group({
            name: this.contactToEdit.name,
            mobileNumber: this.contactToEdit.mobileNumber
        });
    }

    ngOnInit() {
        this.restCall = true;
        this.showErrorMessage = false;
    }

    editContact(updatedContactDetails) {
        if (updatedContactDetails.name === this.contactToEdit.name &&
            updatedContactDetails.mobileNumber === this.contactToEdit.mobileNumber) {
            this.showErrorMessage = true;
        } else {
            this.restCall = false;
            this.showErrorMessage = false;
            const updatedDetails = {
                existingName: this.contactToEdit.name,
                newName: updatedContactDetails.name,
                mobileNumber: updatedContactDetails.mobileNumber
            };
            this.contactService.editContact(updatedDetails).subscribe((data: any) => {
                this.restCall = true;
                if (data.message === 'Success') {
                    const snackBarRef = this.snackBar.open('Contact edited successfully', 'Close', {
                        duration: 2000,
                        panelClass: 'snackBarText'
                    });

                    snackBarRef.afterDismissed().subscribe({
                        next: this.afterAddContact.bind(this)
                    });
                }
                else {
                    this.snackBar.open('Error editing contact! Please try again.', 'Close', {
                        duration: 2000,
                        panelClass: 'snackBarErrorText'
                    });
                }
            });
        }
    }

    afterAddContact() {
        this.router.navigate(['']);
    }
}

