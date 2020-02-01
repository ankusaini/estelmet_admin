import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProcessingComponent } from "src/app/modules/processing/pages/create-processing/create-processing.component";
import { UpdateProcessingComponent } from "src/app/modules/processing/pages/update-processing/update-processing.component";
import { SearchProcessingComponent } from "src/app/modules/processing/pages/search-processing/search-processing.component";
import { ProcessingApprovalComponent } from "src/app/modules/processing/pages/processing-approval/processing-approval.component";
import { ProcessingOverviewComponent } from "src/app/modules/processing/pages/processing-overview/processing-overview.component";
import { EditProcessingComponent } from "src/app/modules/processing/pages/edit-processing/edit-processing.component";
import { MergeProductComponent } from "src/app/modules/processing/pages/merge-product/merge-product.component";
import { ConvertCoProcessingComponent } from "src/app/modules/processing/pages/convert-co-processing/convert-co-processing.component";

// import { ConvertCoProcessingComponent } from "src/app/demo/processing/convert-co-processing/convert-co-processing.component";

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
        path: 'editProcessing/:id',
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
