import { Component } from '@angular/core';

import { PersonService } from './person.service';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})

export class PersonsComponent {
    personsList: string[];

    constructor(prsService: PersonService) {
        this.personsList = prsService.persons;
    }
}