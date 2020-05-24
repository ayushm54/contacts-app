import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

import { Product-listComponent } from './product-list.component';

import { Product-listComponent } from './product-list/product-list.component';

import { Top-barComponent } from './top-bar/top-bar.component';

import { Product-alertsComponent } from './product-alerts/product-alerts.component';

import { Product-detailsComponent } from './product-details/product-details.component';

import { Cart-serviceService } from './services/cart-service/cart-service.service';

import { Cart-componentComponent } from './cart-component/cart-component.component';

import { ShippingComponent } from './shipping-component/shipping.component';

import { Top-barComponent } from './top-bar/top-bar.component';

import { Contact-listComponent } from './contact-list/contact-list.component';

import { Contact-serviceService } from './contact-service.service';

import { Aad-contactComponent } from './add-contact/aad-contact.component';

import { Dialog-overviewComponent } from './dialog-component/dialog-overview.component';

import { Delete-contacrComponent } from './delete-contact/delete-contacr.component';

import { Contact-detailsComponent } from './contact-details/contact-details.component';

import { Edit-contactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
