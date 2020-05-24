import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactService } from '../contact-service';

@Component({
    selector: 'app-delete-contact',
    templateUrl: './delete-contact.component.html',
    styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent {
    restCall = true;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private dialogRef: MatDialogRef<DeleteContactComponent>,
                private contactService: ContactService) {
    }

    deleteContact() {
        this.restCall = false;
        this.contactService.deleteContact({
            name: this.data.name
        }).subscribe((data: any) => {
            this.restCall = true;
            if (data.message === 'Success') {
                this.dialogRef.close(true);
            }
        });
    }
}
