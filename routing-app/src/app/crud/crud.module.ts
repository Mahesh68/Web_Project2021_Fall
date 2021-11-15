import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrudRootComponent } from './components/crud-root/crud-root.component';
import { CrudAddEditComponent } from './components/crud-add-edit/crud-add-edit.component';
import { ProductsService } from './services/products.service';
import { PubSubService } from './services/pub-sub.service';

@NgModule({
  declarations: [
    CrudRootComponent,
    CrudAddEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CrudRootComponent,
    CrudAddEditComponent
  ],
  providers: [ProductsService, PubSubService]
})
export class CrudModule { }
