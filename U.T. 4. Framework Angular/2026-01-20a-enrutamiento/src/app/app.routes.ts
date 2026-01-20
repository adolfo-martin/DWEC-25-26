import { Routes } from '@angular/router';
import { PanelHome } from './components/panel-home/panel-home';
import { PanelProducts } from './components/panel-products/panel-products';
import { PanelError } from './components/panel-error/panel-error';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: PanelHome },
    { path: 'products', component: PanelProducts },
    { path: 'categories/:categoryId/products', component: PanelProducts },
    { path: '**', component: PanelError}
];
