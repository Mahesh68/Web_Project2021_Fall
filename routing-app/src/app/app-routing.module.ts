import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorRootComponent } from './authors/components/author-root/author-root.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OfferingsComponent } from './components/offerings/offerings.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductNotSelectedComponent } from './components/product-not-selected/product-not-selected.component';
import { ProductsComponent } from './components/products/products.component';
import { CrudAddEditComponent } from './crud/components/crud-add-edit/crud-add-edit.component';
import { CrudRootComponent } from './crud/components/crud-root/crud-root.component';
import { CanActivateAdminGuard } from './guards/can-activate-admin.guard';
import { CustomPreloadingStrategy } from './services/custom-preloading-strategy.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'authors', component: AuthorRootComponent },
  { path: 'services', component: OfferingsComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: '', component: ProductNotSelectedComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),
    data: { preload: true, delay: 5000 }
  },
  { path: 'admin', component: AdminComponent, canActivate: [CanActivateAdminGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'crud',
    component: CrudRootComponent,
    children: [
      { path: 'add', component: CrudAddEditComponent },
      { path: 'edit/:id', component: CrudAddEditComponent }
    ],
    canActivate: [CanActivateAdminGuard]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],      // Default
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
