import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incident } from 'src/app/interfaces/incident';
import { IncidentItemComponent } from '../incident-item/incident-item.component';
import { IncidentsService } from 'src/app/services/incidents.service';

@Component({
  selector: 'app-incidents-listed',
  standalone: true,
  imports: [CommonModule,IncidentItemComponent],
  templateUrl: './incidents-listed.component.html',
  styleUrls: ['./incidents-listed.component.css']
})
export class IncidentsListedComponent {
  incidentList: Incident[] = [];
  incidentService: IncidentsService = inject(IncidentsService);

  constructor(){
this.incidentService.getAllIncidents().then((incidentList: Incident[])=>{
  this.incidentList=incidentList
});
  }
}
