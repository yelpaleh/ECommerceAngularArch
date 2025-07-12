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
import { authGuard } from './guard/auth.guard';
import { LoginComponent } from './login.component/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AngularLifeCycleComponent } from './features/angular-life-cycle.component/angular-life-cycle.component';
import { ParentLifeCycleComponent } from './features/angular-life-cycle.component/parent-life-cycle.component';

export const routes: Routes = [
    // Login (without layout)
    { path: 'login', component: LoginComponent },

    // Protected area wrapped in layout
    {
        path: '',
        component: LayoutComponent,
        canActivateChild: [authGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'about', component: About },
            { path: 'customer', component: Customer, canActivate: [authGuard] },
            { path: 'product', component: ProductComponent, canActivate: [authGuard] },
            { path: 'order', component: Order, canActivate: [authGuard] },
            { path: 'report', component: Report, canActivate: [authGuard] },
            { path: 'contact', component: Contact },
        ]
    },
    // Other routes - not secured
    
    { path: 'control-flow-demo', component: ControlFlowDemo },
    { path: 'data-binding-demo', component: DataBindingDemo },
    { path: 'template-driven-forms', component: TemplateDrivenForms },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
    {path: 'parent-life-cycle', component: ParentLifeCycleComponent },
    {path: 'angular-life-cycle', component: AngularLifeCycleComponent },
    // Wildcard
    { path: '**', redirectTo: 'login' }
];
