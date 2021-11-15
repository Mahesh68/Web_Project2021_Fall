import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { BsNavComponent } from './components/bs-nav/bs-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthorsModule } from './authors/authors.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductNotSelectedComponent } from './components/product-not-selected/product-not-selected.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CustomErrorHandler } from './error-handlers/custom.errorhandler';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CrudModule } from './crud/crud.module';
import { OfferingsComponent } from './components/offerings/offerings.component';

@NgModule({
  declarations: [
    RootComponent,
    BsNavComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductNotSelectedComponent,
    ProductDetailsComponent,
    AdminComponent,
    LoginComponent,
    OfferingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthorsModule,
    CrudModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
