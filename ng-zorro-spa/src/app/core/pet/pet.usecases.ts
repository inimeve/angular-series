import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetModel } from './pet.model';
import { PetRepository } from './pet.repository';


@Injectable({
    providedIn: 'root'
})
export class PetUseCases {

    constructor(private petRepository: PetRepository) {}

    getAllPets(): Observable<PetModel[]> {
        return this.petRepository.getAllPets();
    }

    getPetById(id: number): Observable<PetModel> {
        return this.petRepository.getPetById(id);
    }

}
