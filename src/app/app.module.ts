import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncidentComponent } from './components/incident/incident.component';
import { SingleIncidentComponent } from './components/single-incident/single-incident.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    SingleIncidentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
