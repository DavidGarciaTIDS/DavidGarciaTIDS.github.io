import { Component,Input,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IncidentsService } from 'src/app/services/incidents.service';
import { Incident } from 'src/app/interfaces/incident';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-show-incident',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './show-incident.component.html',
  styleUrls: ['./show-incident.component.css']
})
export class ShowIncidentComponent {
  route:ActivatedRoute = inject(ActivatedRoute);
  incidentService = inject(IncidentsService);
  incident: Incident|undefined;
  applyForm=new FormGroup({
    title: new FormControl(''),
    status: new FormControl(0),
    description: new FormControl(''),

  });

  constructor(){
    const incidentId = Number(this.route.snapshot.params['id']);
    this.incidentService.getIncidentById(incidentId).then(incident => {
      this.incident = incident;
      console.log(incident);
    });
  }

  submitApplication(){
    this.incidentService.submitIncident(
      this.applyForm.value.title ?? '', 
      this.applyForm.value.status ?? 1,
      this.applyForm.value.description ?? '', 
      );
  }

}
