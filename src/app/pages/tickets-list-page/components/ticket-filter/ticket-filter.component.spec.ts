import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TicketFilterComponent } from './ticket-filter.component';

describe('TicketFilterComponent', () => {
    let component: TicketFilterComponent;
    let fixture: ComponentFixture<TicketFilterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TicketFilterComponent],
            imports: [FormsModule]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TicketFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
