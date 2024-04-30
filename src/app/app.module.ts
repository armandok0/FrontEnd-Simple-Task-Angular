import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { UserCreateComponent } from './user-create/user-create.component';

export enum ROUTER_TOKENS {
  LOGO = '',
  CUSTOMERS = 'customers',
  PRODUCTS = 'products',
  USERS = 'users',
  USERSCREATE = 'users/create',
}

export const ROUTES: Routes = [
  { path: ROUTER_TOKENS.LOGO, redirectTo: '', pathMatch: 'full'},
  { path: ROUTER_TOKENS.CUSTOMERS, component: CustomersComponent },
  { path: ROUTER_TOKENS.PRODUCTS, component: ProductsComponent },
  { path: ROUTER_TOKENS.USERS, component: UsersComponent },
  { path: ROUTER_TOKENS.USERSCREATE, component: UserCreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    UsersComponent,
    ProductsComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
