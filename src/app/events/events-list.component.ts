import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <event-thumbnail [event]="event1"></event-thumbnail>
    </div>`
})
export class EventListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2019',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '102 NW 48th Street',
            city: 'Hollywood',
            country: 'USA'
        }
    };
}
