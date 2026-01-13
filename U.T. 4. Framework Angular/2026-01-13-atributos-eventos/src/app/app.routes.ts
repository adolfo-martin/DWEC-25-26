import { Routes } from '@angular/router';
import { PanelHome } from './components/panel-home/panel-home';
import { PanelCategories } from './components/panel-categories/panel-categories';
import { PanelProducts } from './components/panel-products/panel-products';

export const routes: Routes = [
    { path: 'home', component: PanelHome },
    { path: 'categories', component: PanelCategories },
    { path: 'products', component: PanelProducts },
];
