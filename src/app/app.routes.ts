import { Routes } from '@angular/router';
//import { App } from './app';
import { Dashboard } from './features/dashboard/dashboard';
import { About } from './features/about/about';
import { Customer } from './features/customer/customer';
import { ProductComponent } from './features/product/product';
import { Order } from './features/order/order';
import { Report } from './features/report/report';
import { Contact } from './features/contact/contact';
import { ControlFlowDemo } from './features/control-flow-demo/control-flow-demo';
import { DataBindingDemo } from './features/data-binding-demo/data-binding-demo';
import { TemplateDrivenForms } from './features/template-driven-forms/template-driven-forms';

export const routes: Routes = [

    { path: '', component: Dashboard },
    { path: 'about', component: About },
    { path: 'customer', component: Customer },
    { path: 'product', component: ProductComponent },
    { path: 'order', component: Order },
    { path: 'report', component: Report },
    { path: 'contact', component: Contact },
    { path: 'control-flow-demo', component: ControlFlowDemo },
    { path: 'data-binding-demo', component: DataBindingDemo },
    { path: 'template-driven-forms', component: TemplateDrivenForms },
];
