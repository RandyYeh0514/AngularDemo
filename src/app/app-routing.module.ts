import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { MainComponent } from './shared/main/main.component';
import { TradeQueryComponent } from './view/transaction/trade-query/trade-query.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'trade-query',
        component: TradeQueryComponent,
        loadChildren: () => import('./view/transaction/trade-query/trade-query.module').then(m => m.TradeQueryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
