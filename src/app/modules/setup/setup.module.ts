import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTypeComponent } from './create-type/create-type.component';
import { SetupRoutingModule } from "src/app/modules/setup/setup.routing";
import { DataTablesModule } from "angular-datatables";
import { FormsModule } from "@angular/forms";
import { TextMaskModule } from "angular2-text-mask/dist/angular2TextMask";
import { NgbTabsetModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { CreateClassComponent } from './create-class/create-class.component';
import { HttpClientModule } from "@angular/common/http";
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateShapeComponent } from './create-shape/create-shape.component';
import { CreateTemperComponent } from './create-temper/create-temper.component';
import { CreateCoatingComponent } from './create-coating/create-coating.component';
import { CreateOilingComponent } from './create-oiling/create-oiling.component';
import { CreateSurfaceComponent } from './create-surface/create-surface.component';
import { CreateOriginComponent } from './create-origin/create-origin.component';
import { CreateAnnealingComponent } from './create-annealing/create-annealing.component';
import { CreateDefectComponent } from './create-defect/create-defect.component';
import { CreateFinishComponent } from './create-finish/create-finish.component';
import { CreatePackagingComponent } from './create-packaging/create-packaging.component';
import { CreateWeighBridgeComponent } from './create-weigh-bridge/create-weigh-bridge.component';
import { CreateMachineDetailComponent } from './create-machine-detail/create-machine-detail.component';
import { CreateHardnessComponent } from './create-hardness/create-hardness.component';



@NgModule({
  declarations: [CreateTypeComponent, CreateClassComponent, CreateCategoryComponent, CreateShapeComponent, CreateTemperComponent, CreateCoatingComponent, CreateOilingComponent, CreateSurfaceComponent, CreateOriginComponent, CreateAnnealingComponent, CreateDefectComponent, CreateFinishComponent, CreatePackagingComponent, CreateWeighBridgeComponent, CreateMachineDetailComponent, CreateHardnessComponent],
  imports: [
    CommonModule,
    SetupRoutingModule,
    CommonModule,
    SharedModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    TextMaskModule,
    NgbTabsetModule,
  ]
})
export class SetupModule { 
}
