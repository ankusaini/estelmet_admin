import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTypeComponent } from './create-type/create-type.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateShapeComponent } from './create-shape/create-shape.component';
import { CreateClassComponent } from './create-class/create-class.component';
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

const routes: Routes = [
    {
        path: 'createType',
        component: CreateTypeComponent,
    },
    {
        path: 'createCategory',
        component: CreateCategoryComponent,
    },
    {
        path: 'createShape',
        component: CreateShapeComponent,
    },
    {
        path: 'createClass',
        component: CreateClassComponent,
    },
    {
        path: 'createTemper',
        component: CreateTemperComponent,
    },
    {
        path: 'createCoating',
        component: CreateCoatingComponent,
    },
    {
        path: 'createOiling',
        component: CreateOilingComponent,
    },
    {
        path: 'createSurface',
        component: CreateSurfaceComponent,
    },
    {
        path: 'createAnnealing',
        component: CreateAnnealingComponent,
    },
    {
        path: 'createWeighBridge',
        component: CreateWeighBridgeComponent,
    },
    {
        path: 'createPackaging',
        component: CreatePackagingComponent,
    },
    {
        path: 'createOrigin',
        component: CreateOriginComponent,
    },
    {
        path: 'createMachine',
        component: CreateMachineDetailComponent,
    },
    {
        path: 'createHardness',
        component: CreateHardnessComponent,
    },
    {
        path: 'createFinish',
        component: CreateFinishComponent,
    },
    {
        path: 'createDefect',
        component: CreateDefectComponent,
    },
    {
        path: 'ownCompany',
        component: OwnCompanyComponent,
    },
    {
        path: 'ownWarehouse',
        component: OwnWarehouseComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SetupRoutingModule { }

