import { Routes } from '@angular/router';
import { PanelProducts } from './components/panel-products/panel-products';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: PanelProducts },
];
