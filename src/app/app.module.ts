import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import { 
  EventListComponent, 
  EventThumbnailComponent, 
  EventService, 
  EventDetailsComponent, 
  CreateEventComponent, 
  EventRouteActivator, 
  EventListResolver } from './events/index';
  import { EventsAppComponent } from './events-app.component';
  import { NavBarComponent } from './nav/navbar.component';
  import { ToastrService } from './common/toastr.service';
  import { appRoutes } from './routes'
  
  import { Error404Component } from './errors/404.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventListResolver,
    EventService, 
    ToastrService, 
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}

