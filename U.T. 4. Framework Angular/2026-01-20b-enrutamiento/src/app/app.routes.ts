import { Routes } from '@angular/router';
import { PanelProducts } from './components/panel-products/panel-products';

export const routes: Routes = [
    { path: 'products', component: PanelProducts },
    { path: 'categories/:categoryId/products', component: PanelProducts },
];
