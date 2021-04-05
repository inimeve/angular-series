import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VetModel } from './vet.model';
import { VetRepository } from './vet.repository';


@Injectable({
    providedIn: 'root'
})
export class VetUseCases {

    constructor(private vetRepository: VetRepository) {}

    getAllVets(): Observable<VetModel[]> {
        return this.vetRepository.getAllVets();
    }

    getVetById(id: number): Observable<VetModel> {
        return this.vetRepository.getVetById(id);
    }

}
