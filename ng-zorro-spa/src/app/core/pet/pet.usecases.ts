import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PetModel } from './pet.model';
import { PetRepository } from './pet.repository';


@Injectable({
    providedIn: 'root'
})
export class PetUseCases {

    private petSubject = new BehaviorSubject<PetModel[]>([]);
    public pets$ = this.petSubject.asObservable();

    constructor(private petRepository: PetRepository) {
        this.updateVets();
    }

    updateVets(): void {
        this.petRepository.getAllPets().subscribe({
            next: (vets: PetModel[]) => {
                this.petSubject.next(vets);
            },
            error: error => console.error(error),
            complete: () => console.info('Pets updated!')
        })
    }


    getAllPets(): Observable<PetModel[]> {
        return this.petRepository.getAllPets();
    }

    getPetsByVet(vetId: number): Observable<PetModel[]> {
        return this.petRepository.getPetsByVet(vetId);
    }

    getPetById(id: number): Observable<PetModel> {
        return this.petRepository.getPetById(id);
    }

}
