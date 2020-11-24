import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandlerquestionsComponent } from './handlerquestions/handlerquestions.component';
import { ResultcoffeeComponent } from './resultcoffee/resultcoffee.component';

const routes: Routes = [
  {path:'', component: HandlerquestionsComponent},
  {path:'result', component: ResultcoffeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
