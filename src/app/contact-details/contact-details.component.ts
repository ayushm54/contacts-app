import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private dialogRef: MatDialogRef<ContactDetailsComponent>) {
    }

    ngOnInit() {

    }

    closeDialog() {
        this.dialogRef.close(true);
    }
}
