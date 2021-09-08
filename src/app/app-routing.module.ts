import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const routes: Routes = [
 {path:'add-new',component:AddPropertyComponent},
 {path:'property-detail/:id',component:PropertyDetailComponent},
 {path:'rent-property',component:PropertyListComponent},
 {path:'',component:PropertyListComponent},
 {path:'**',component:PropertyListComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
