import { Routes } from '@angular/router';
import { PanelBuyProducts } from './components/panel-buy-products/panel-buy-products';

export const routes: Routes = [
    { path: 'buy-products/category/:categoryId', component: PanelBuyProducts },
];
