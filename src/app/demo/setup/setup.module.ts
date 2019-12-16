import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupRoutingModule } from './setup-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryModule } from '../inventory/inventory.module';
import { UsersListModule } from '../users/users-list/users-list.module';
import { DispatchRoutingModule } from '../dispatch/dispatch-routing.module';
import { CreateTypeComponent } from './create-type/create-type.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { CreateShapeComponent } from './create-shape/create-shape.component';
import { CreateTemperComponent } from './create-temper/create-temper.component';
import { CreateCoatingComponent } from './create-coating/create-coating.component';
import { CreateOilingComponent } from './create-oiling/create-oiling.component';
import { CreateSurfaceComponent } from './create-surface/create-surface.component';
import { CreateAnnealingComponent } from './create-annealing/create-annealing.component';
import { CreateWeighBridgeComponent } from './create-weigh-bridge/create-weigh-bridge.component';
import { CreatePackagingComponent } from './create-packaging/create-packaging.component';
import { CreateOriginComponent } from './create-origin/create-origin.component';
import { CreateMachineDetailComponent } from './create-machine-detail/create-machine-detail.component';
import { CreateHardnessComponent } from './create-hardness/create-hardness.component';
import { CreateFinishComponent } from './create-finish/create-finish.component';
import { CreateDefectComponent } from './create-defect/create-defect.component';
import { OwnCompanyComponent } from './own-company/own-company.component';
import { OwnWarehouseComponent } from './own-warehouse/own-warehouse.component';

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule,
    InventoryModule,
    UsersListModule,
  ],
  declarations: [
    CreateTypeComponent,
    CreateCategoryComponent,
    CreateClassComponent,
    CreateShapeComponent,
    CreateTemperComponent,
    CreateCoatingComponent,
    CreateOilingComponent,
    CreateSurfaceComponent,
    CreateAnnealingComponent,
    CreateWeighBridgeComponent,
    CreatePackagingComponent,
    CreateOriginComponent,
    CreateMachineDetailComponent,
    CreateHardnessComponent,
    CreateFinishComponent,
    CreateDefectComponent,
    OwnCompanyComponent,
    OwnWarehouseComponent
  ]
})
export class SetupModule { }
