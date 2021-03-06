import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbButtonsModule, NgbDropdownModule, NgbModalModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpTokenInterceptorService } from './shared/services/http/http-token-interceptor.service';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';
import { SharedModule } from './theme/shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import {
  NavSearchProductComponent
} from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search-product/nav-search-product.component';
import { ShareModule } from './shared/shared.module';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavSearchProductComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ShareModule,
    NgbDropdownModule,
    HttpClientModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    NgbModalModule,
    ToastrModule.forRoot(),
    SelectModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    CookieService,
    NavigationItem,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
