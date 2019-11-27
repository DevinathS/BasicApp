import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './features/components/contacts/contacts.component';
import { HomeComponent } from './features/components/home/home.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'contacts' , component: ContactsComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
