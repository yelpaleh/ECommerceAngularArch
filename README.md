# AngularV20App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

##------------------------------------------------

**##**Angular E-Commerce Application - v20.0** **

**##Design layout**
 ![image](https://github.com/user-attachments/assets/10fed42f-e202-4f3c-bc93-99051191f5c2)

**##Create Angular Application** – ng new e-commerce
 ![image](https://github.com/user-attachments/assets/ff5b7824-6c07-4aca-b743-ba284b8f3f03)


**##Features folder structure**
 ![image](https://github.com/user-attachments/assets/586e5d8b-fd91-4ec7-a12d-c2994028744c)

**##Layout folder structure**
 ![image](https://github.com/user-attachments/assets/c241d081-c93d-4dbb-911c-8e2650bfee7f)




**##Step 1: Generate All Components (Standalone)**
Run the following CLI commands in your terminal:

 ng g c layout/header --standalone
 ng g c layout/footer --standalone
 ng g c layout/sidebar --standalone
 ng g c dashboard --standalone
 ng g c about --standalone
 ng g c customer --standalone
 ng g c product --standalone
 ng g c order --standalone
 ng g c report --standalone
 ng g c contact --standalone

**##This will create the directory structure:**
src/app/
 ![image](https://github.com/user-attachments/assets/8b7bf14d-2ceb-414e-81ff-6acec8f0494a)

**##Design layout component – header/sidebar/footer**
Style Header, Footer & Navigation (follow code base)

**App.ts** - app.ts (for main layout)
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Sidebar } from './layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Sidebar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-v20-app';
}


**App.html**
<div class="w-100 m-0">
  <app-header></app-header>
  <div class="row min-vh-100">
    <!-- Sidebar -->
    <div class="col-md-2 bg-light border-end px-3 py-4">
      <app-sidebar></app-sidebar>
    </div>
    <div class="col-md-10 px-4 py-4">
      <router-outlet></router-outlet>
    </div>
  </div>
  <app-footer></app-footer>
</div>

**Add css – all styles to their relative css files like style.css. header.cs, footer.css etc.**

**// Step 3: app.routes.ts**
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

Add Authentication Guard – NA
Login Form - NA

**Configure/Register routes in app.config.ts file** 

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

**Install Bootstrap via npm:npm install bootstrap**
// Step 4: Bootstrap styles (angular.json)
Update angular.json (if present) or use styles.css:
Add this to src/styles.css:
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
**Design Dashboard component**

Step 1: Install ng2-charts and Chart.js
npm install chart.js
npm install ng2-charts@^4 chart.js
Refer Dashboard .html and .ts file

 ![image](https://github.com/user-attachments/assets/82073671-a91f-4fb6-b156-aac766c033c0)



