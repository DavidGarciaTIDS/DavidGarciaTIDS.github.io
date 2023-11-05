import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IncidentItemComponent } from './components/incident-item/incident-item.component';
import { ShowIncidentComponent } from './components/show-incident/show-incident.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterModule,IncidentItemComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PWA';
}
