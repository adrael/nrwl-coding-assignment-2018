import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TicketsListPageComponent } from './tickets-list-page.component';
import { TicketFilterComponent } from './components/ticket-filter/ticket-filter.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        FormsModule
    ],
    declarations: [TicketsListPageComponent, TicketFilterComponent]
})
export class TicketsListPageModule {
}
