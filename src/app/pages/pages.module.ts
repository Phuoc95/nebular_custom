import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { TestpageComponent } from './testpage/testpage.component';
import { OrderComponent } from './order/order.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,

    DataTablesModule,
  ],
  declarations: [
    PagesComponent,
    TestpageComponent,
    OrderComponent,
  ],
})
export class PagesModule {
}
