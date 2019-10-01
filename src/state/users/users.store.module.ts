import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersEffects } from './effects/users.effects';
import { usersReducer } from './reducers/users.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('users', usersReducer),
        EffectsModule.forFeature([UsersEffects])
    ]
})
export class UsersStoreModule {
}
