import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationEnd } from '@angular/router';
import { ContactService } from '../contact-service';
import { DeleteContactComponent } from '../delete-contact/delete-contact.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
    contacts;
    originalContacts;
    restCall = false;
    mySubscription: any;
    displayedColumns: string[] = ['index', 'name', 'phoneNumber', 'actions'];
    constructor(private contactService: ContactService,
        public dialog: MatDialog,
        public snackBar: MatSnackBar,
        private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
        this.mySubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                // Trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
            }
        });
    }

    ngOnInit() {
        this.restCall = false;
        this.contactService.getContactList().subscribe((data: any[]) => {
            this.contacts = data;
            this.originalContacts = data;
            this.restCall = true;
        });
    }

    openDeleteDialog(contact) {
        const dialogRef = this.dialog.open(DeleteContactComponent, {
            data: contact
        });
        dialogRef.afterClosed().subscribe((deleted: boolean) => {
            if (deleted) {
                const snackBarRef = this.snackBar.open('Contact deleted successfully', 'Refresh', {
                    duration: 2000,
                    panelClass: 'snackBarText'
                });

                snackBarRef.afterDismissed().subscribe({
                    next: this.afterDeleteContact.bind(this)
                });
            }
        });
    }

    afterDeleteContact() {
        this.router.navigate(['']);
    }

    ngOnDestroy() {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    }

    editContact(element) {
        this.contactService.setDataForEditPage(element);
        this.router.navigate(['/edit']);
    }

    openContactDetails(element) {
        const dialogRef = this.dialog.open(ContactDetailsComponent, {
            data: element
        });
    }

    filterList(event: any) {
        const name = String(event.target.value);
        if (name !== '') {
            this.contacts = this.contacts.filter((item) => {
                return item.name.startsWith(name);
            });
        } else {
            this.contacts = this.originalContacts;
        }
    }
}
