import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-ticket-filter',
    templateUrl: './ticket-filter.component.html',
    styleUrls: ['./ticket-filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketFilterComponent {
    public filter: string = '';

    @Output() public readonly filterChange: EventEmitter<string> = new EventEmitter<string>();

    public onFilterChange(filter: string): void {
        this.filterChange.next(filter);
    }
}
