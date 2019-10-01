import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TicketCreationPageComponent } from './ticket-creation-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{
            path: '',
            component: TicketCreationPageComponent
        }])
    ],
    declarations: [TicketCreationPageComponent]
})
export class TicketCreationPageModule {
}
