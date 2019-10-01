import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './reducers';
import { TicketsStoreModule } from './tickets/tickets.store.module';
import { UsersStoreModule } from './users/users.store.module';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictActionImmutability: true,
                strictActionSerializability: true,
                strictStateImmutability: true,
                strictStateSerializability: true
            }
        }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({
            routerState: RouterState.Minimal
        }),
        environment.production ? [] : StoreDevtoolsModule.instrument({ name: 'NrwlAssignment' }),
        TicketsStoreModule,
        UsersStoreModule
    ]
})
export class NrwlStoreModule {
}
