import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeQueryComponent } from './trade-query.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { FilterComponent } from './filter/filter.component';
import { TradeQueryRoutingModule } from './trade-query-routing.module';
import { GeneralViewComponent } from './general-view/general-view.component';



@NgModule({
  declarations: [
    TradeQueryComponent,
    FilterComponent,
    GeneralViewComponent
  ],
  imports: [
    CommonModule,
    TradeQueryRoutingModule,
    TabMenuModule
  ]
})
export class TradeQueryModule { }
