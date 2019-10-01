import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { I_TICKETS_REPOSITORY } from '../../../repositories/tickets/tickets.repository.interface';
import { TicketsRepositoryMock } from '../../../repositories/tickets/tickets.repository.mock';
import { I_USERS_REPOSITORY } from '../../../repositories/users/users.repository.interface';
import { UsersRepositoryMock } from '../../../repositories/users/users.repository.mock';
import { NrwlStoreModule } from '../../../state/nrwl-store.module';

import { TicketCreationPageComponent } from './ticket-creation-page.component';

describe('TicketCreationPageComponent', () => {
    let component: TicketCreationPageComponent;
    let fixture: ComponentFixture<TicketCreationPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TicketCreationPageComponent],
            imports: [FormsModule, NrwlStoreModule, RouterTestingModule],
            providers: [
                {
                    provide: I_TICKETS_REPOSITORY,
                    useClass: TicketsRepositoryMock
                },
                {
                    provide: I_USERS_REPOSITORY,
                    useClass: UsersRepositoryMock
                }
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TicketCreationPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
