import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        TicketComponent
    ],
    declarations: [TicketComponent]
})
export class SharedModule {
}
