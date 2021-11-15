import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyOneComponent } from './components/lazy-one/lazy-one.component';
import { LazyTwoComponent } from './components/lazy-two/lazy-two.component';

const routes: Routes = [
  { path: '', component: LazyOneComponent },
  // { path: 'one', component: LazyOneComponent },
  { path: 'two', component: LazyTwoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
