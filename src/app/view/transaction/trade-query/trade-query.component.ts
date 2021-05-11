import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/service/transaction/trade.service';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-trade-query',
  templateUrl: './trade-query.component.html',
  styleUrls: ['./trade-query.component.scss']
})
export class TradeQueryComponent implements OnInit {

  items:MenuItem[] = [
    {label: 'Filter', icon: 'pi pi-fw pi-home', routerLink: '/trade-query/filter'},
    {label: 'General View', icon: 'pi pi-fw pi-calendar', routerLink: '/trade-query/general-view'}
  ];

  constructor(private tradeService:TradeService) { }

  ngOnInit(): void {
  }

}
