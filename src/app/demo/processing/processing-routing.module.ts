import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProcessingComponent } from './create-processing/create-processing.component';
import { UpdateProcessingComponent } from './update-processing/update-processing.component';
import { SearchProcessingComponent } from './search-processing/search-processing.component';
import { ProcessingApprovalComponent } from './processing-approval/processing-approval.component';
import { ProcessingOverviewComponent } from './processing-overview/processing-overview.component';
import { EditProcessingComponent } from './edit-processing/edit-processing.component';
import { ConvertCoProcessingComponent } from './convert-co-processing/convert-co-processing.component';
import { MergeProductComponent } from './merge-product/merge-product.component';

const routes: Routes = [
    {
        path: 'createProcessing',
        component: CreateProcessingComponent,
    },
    {
        path: 'updateProcessing',
        component: UpdateProcessingComponent,
    },
    {
        path: 'searchProcessing',
        component: SearchProcessingComponent,
    },
    {
        path: 'processingApproval',
        component: ProcessingApprovalComponent,
    },
    {
        path: 'processingOverview',
        component: ProcessingOverviewComponent,
    },
    {
        path: 'editProcessing',
        component: EditProcessingComponent,
    },
    {
        path: 'convertCOProcessing',
        component: ConvertCoProcessingComponent,
    },
    {
        path: 'mergeProduct',
        component: MergeProductComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcessingRoutingModule { }
