import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
// import { UserProfileComponent } from './user-profile.component';
import {NgbCarouselModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {LightboxModule} from 'ngx-lightbox';

@NgModule({
  // declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ]
})
export class UserProfileModule { }
