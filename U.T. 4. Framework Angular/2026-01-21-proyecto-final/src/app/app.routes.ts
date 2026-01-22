import { Routes } from '@angular/router';
import { PanelProducts } from './components/panel-products/panel-products';
import { PanelCategories } from './components/panel-categories/panel-categories';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: PanelProducts },
    { path: 'categories', component: PanelCategories },
    { path: 'categories/:categoryId/products', component: PanelProducts },
];
