import { Component, Input } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    selector: 'event-thumbnail',
    template: `    
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div [ngClass]="getStartTimeClass()"  [ngSwitch]="event?.time">Time: {{event.time}} 
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event.price}}</div>
        <div [hidden]="!event?.location">
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">City: {{event.location.city}}, {{event.location.country}}</span>
        </div>
        <div [hidden]="!event?.onlineUrl">Online URL: {{event.onlineUrl}}</div>
    </div>
    `,
    styles: [`
        .green {color: #00ff0a !important; }
        .bold { font-weight: bold; }
        .thumbnail {min-height: 250px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb } 
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;

    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am')
        return ['green', 'bold']
        return []
    }
}