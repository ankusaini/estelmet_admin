import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTypeComponent } from "src/app/modules/setup/create-type/create-type.component";



const routes: Routes = [
  {
    path: 'createType',
    component : CreateTypeComponent,
  },
 
   
    ]
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { 
}
