import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAnnealingComponent } from 'src/app/modules/setup/create-annealing/create-annealing.component';
import { CreateCategoryComponent } from 'src/app/modules/setup/create-category/create-category.component';
import { CreateClassComponent } from 'src/app/modules/setup/create-class/create-class.component';
import { CreateCoatingComponent } from 'src/app/modules/setup/create-coating/create-coating.component';
import { CreateDefectComponent } from 'src/app/modules/setup/create-defect/create-defect.component';
import { CreateFinishComponent } from 'src/app/modules/setup/create-finish/create-finish.component';
import { CreateHardnessComponent } from 'src/app/modules/setup/create-hardness/create-hardness.component';
import { CreateMachineDetailComponent } from 'src/app/modules/setup/create-machine-detail/create-machine-detail.component';
import { CreateOilingComponent } from 'src/app/modules/setup/create-oiling/create-oiling.component';
import { CreateOriginComponent } from 'src/app/modules/setup/create-origin/create-origin.component';
import { CreatePackagingComponent } from 'src/app/modules/setup/create-packaging/create-packaging.component';
import { CreateShapeComponent } from 'src/app/modules/setup/create-shape/create-shape.component';
import { CreateSurfaceComponent } from 'src/app/modules/setup/create-surface/create-surface.component';
import { CreateTemperComponent } from 'src/app/modules/setup/create-temper/create-temper.component';
import { CreateTypeComponent } from 'src/app/modules/setup/create-type/create-type.component';
import { CreateWeighBridgeComponent } from 'src/app/modules/setup/create-weigh-bridge/create-weigh-bridge.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateWarehouseComponent } from './create-warehouse/create-warehouse.component';

const routes: Routes = [
  {
    path: 'createType',
    component: CreateTypeComponent,
  },
  {
    path: 'createClass',
    component: CreateClassComponent
  },
  {
    path: 'createCategory',
    component: CreateCategoryComponent
  },
  {
    path: 'createShape',
    component: CreateShapeComponent
  },
  {
    path: 'createTemper',
    component: CreateTemperComponent
  },
  {
    path: 'createCoating',
    component: CreateCoatingComponent
  },
  {
    path: 'createOiling',
    component: CreateOilingComponent
  },
  {
    path: 'createSurface',
    component: CreateSurfaceComponent
  },
  {
    path: 'createOrigin',
    component: CreateOriginComponent
  },
  {
    path: 'createAnnealing',
    component: CreateAnnealingComponent
  },
  {
    path: 'createDefect',
    component: CreateDefectComponent
  },
  {
    path: 'createFinish',
    component: CreateFinishComponent
  },
  {
    path: 'createPackaging',
    component: CreatePackagingComponent
  },
  {
    path: 'createWeighBridge',
    component: CreateWeighBridgeComponent
  },
  {
    path: 'createMachine',
    component: CreateMachineDetailComponent
  },
  {
    path: 'createHardness',
    component: CreateHardnessComponent
  },
  {
    path: 'ownCompany',
    component: CreateCompanyComponent
  },
  {
    path: 'ownWarehouse',
    component: CreateWarehouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {
}
