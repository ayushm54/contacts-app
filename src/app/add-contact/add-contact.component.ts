import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../contact-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

    contactForm;
    restCall = true;
    constructor(private formBuilder: FormBuilder,
                private contactService: ContactService,
                public snackBar: MatSnackBar,
                private router: Router) {
        this.contactForm = this.formBuilder.group({
            name: '',
            mobileNumber: ''
        });
    }

    ngOnInit() {

    }

    onSubmit(newContact) {
        this.restCall = false;
        this.contactService.addNewContact(newContact).subscribe((data: any) => {
            this.restCall = true;
            if (data.message === 'Success') {
                const snackBarRef = this.snackBar.open('Contact Saved successfully', 'Close' , {
                    duration: 2000,
                    panelClass: 'snackBarText'
                });

                snackBarRef.afterDismissed().subscribe({
                    next: this.afterAddContact.bind(this)
                });
            }
            else {
                this.snackBar.open('Error saving contact! Please try again.', 'Close' , {
                    duration: 2000,
                    panelClass: 'snackBarErrorText'
                });
            }
        });
    }

    afterAddContact() {
        this.router.navigate(['']);
    }
}
