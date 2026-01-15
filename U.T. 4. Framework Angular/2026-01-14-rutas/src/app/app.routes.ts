import { Routes } from '@angular/router';
import { PanelHome } from './components/panel-home/panel-home';
import { PanelCategories } from './components/panel-categories/panel-categories';
import { PanelProducts } from './components/panel-products/panel-products';
import { PanelError404 } from './components/panel-error-404/panel-error-404';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: PanelHome },
    { path: 'categories', component: PanelCategories },
    { path: 'products', component: PanelProducts},
    { path: '**', component: PanelError404 },
];
