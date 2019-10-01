import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { I_TICKETS_REPOSITORY } from '../../../repositories/tickets/tickets.repository.interface';
import { TicketsRepositoryMock } from '../../../repositories/tickets/tickets.repository.mock';
import { I_USERS_REPOSITORY } from '../../../repositories/users/users.repository.interface';
import { UsersRepositoryMock } from '../../../repositories/users/users.repository.mock';
import { NrwlStoreModule } from '../../../state/nrwl-store.module';

import { TicketDetailsPageComponent } from './ticket-details-page.component';

describe('TicketDetailsPageComponent', () => {
    let component: TicketDetailsPageComponent;
    let fixture: ComponentFixture<TicketDetailsPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TicketDetailsPageComponent],
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
        fixture = TestBed.createComponent(TicketDetailsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
