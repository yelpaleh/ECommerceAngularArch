import { Routes } from '@angular/router';
//import { App } from './app';
import { Dashboard } from './features/dashboard/dashboard';
import { About } from './features/about/about';
import { Customer } from './features/customer/customer';
import { Product } from './features/product/product';
import { Order } from './features/order/order';
import { Report } from './features/report/report';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
   
    { path: '', component: Dashboard },
    { path: 'about', component: About },
    { path: 'customer', component: Customer },
    { path: 'product', component: Product },
    { path: 'order', component: Order },
    { path: 'report', component: Report },
    { path: 'contact', component: Contact },

];
