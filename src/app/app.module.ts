import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TicketsRepository } from '../repositories/tickets/tickets.repository';
import { I_TICKETS_REPOSITORY } from '../repositories/tickets/tickets.repository.interface';
import { UsersRepository } from '../repositories/users/users.repository';
import { I_USERS_REPOSITORY } from '../repositories/users/users.repository.interface';
import { NrwlStoreModule } from '../state/nrwl-store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsListPageModule } from './pages/tickets-list-page/tickets-list-page.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NrwlStoreModule,
        AppRoutingModule,
        TicketsListPageModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: I_TICKETS_REPOSITORY,
            useClass: TicketsRepository
        },
        {
            provide: I_USERS_REPOSITORY,
            useClass: UsersRepository
        }
    ]
})
export class AppModule {

}
