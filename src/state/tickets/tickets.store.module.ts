import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TicketsEffects } from './effects/tickets.effects';
import { ticketsReducer } from './reducers/tickets.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('tickets', ticketsReducer),
        EffectsModule.forFeature([TicketsEffects])
    ]
})
export class TicketsStoreModule {
}
