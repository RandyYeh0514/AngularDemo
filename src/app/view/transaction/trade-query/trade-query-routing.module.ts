import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { GeneralViewComponent } from './general-view/general-view.component';

const routes: Routes = [
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'general-view',
    component: GeneralViewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeQueryRoutingModule { }
