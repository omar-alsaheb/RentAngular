import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
 {path:'add-new',component:AddPropertyComponent},
 {path:'property-detail/:id',component:PropertyDetailComponent},
 {path:'rent-property',component:PropertyListComponent},
 {path:'login',component:UserLoginComponent},
 {path:'signup',component:UserRegisterComponent},

 {path:'',component:PropertyListComponent},
 {path:'**',component:PropertyListComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
