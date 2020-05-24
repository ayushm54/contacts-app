import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private REST_API_SERVER = 'http://localhost:3000/';
    dataToEdit;

    constructor(private http: HttpClient) { }

    setDataForEditPage(dataToEdit) {
        this.dataToEdit = dataToEdit;
    }

    getDataForEditPage() {
        return this.dataToEdit;
    }

    getContactList() {
        return this.http.get(this.REST_API_SERVER + 'contacts').pipe(catchError(this.handleError));
    }

    addNewContact(contact) {
        return this.http.post(this.REST_API_SERVER + 'contacts/add', contact).pipe(catchError(this.handleError));
    }

    deleteContact(contact) {
        return this.http.post(this.REST_API_SERVER + 'contacts/delete', contact).pipe(catchError(this.handleError));
    }

    editContact(updatedContactDetails) {
        return this.http.post(this.REST_API_SERVER + 'contacts/edit', updatedContactDetails);
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
