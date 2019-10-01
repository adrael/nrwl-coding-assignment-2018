import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsListPageComponent } from './pages/tickets-list-page/tickets-list-page.component';

const routes: Routes = [
    {
        path: '',
        component: TicketsListPageComponent
    },
    {
        path: 'create',
        loadChildren: () => import('./pages/ticket-creation-page/ticket-creation-page.module').then(m => m.TicketCreationPageModule)
    },
    {
        path: 'details/:id',
        loadChildren: () => import('./pages/ticket-details-page/ticket-details-page.module').then(m => m.TicketDetailsPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
