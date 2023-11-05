import { Routes } from "@angular/router";
import { ShowIncidentComponent } from './components/show-incident/show-incident.component';
import { IncidentsListedComponent } from "./components/incidents-listed/incidents-listed.component";

const routeConfig: Routes = [
    {
        path: '',
        component: IncidentsListedComponent,
        title: 'Incidents listed',
    },
    {
        path: 'incident/:id',
        component: ShowIncidentComponent,
        title: 'Single incident',
    }
];

export default routeConfig;