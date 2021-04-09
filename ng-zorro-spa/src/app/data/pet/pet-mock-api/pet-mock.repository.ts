import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';
import { PetModel } from 'src/app/core/pet/pet.model';
import { PetRepository } from 'src/app/core/pet/pet.repository';
import { PetMockEntity } from './pet-mock.entity';
import { PetMockMapper } from './pet-mock.mapper';


@Injectable({
    providedIn: 'root'
})
export class PetMockRepository extends PetRepository {

    private mapper = new PetMockMapper();

    pets: PetMockEntity[] = [
        {
            id: 1,
            name: 'Mr. MockBig',
            birthday: new Date().getTime(),
            vetId: 1
        },
        {
            id: 2,
            name: 'Mrs. MockTootoot',
            birthday: new Date().getTime(),
            vetId: 1
        },
        {
            id: 3,
            name: 'LittleMockToot',
            birthday: new Date().getTime(),
            vetId: 2
        }
    ];

    constructor() {
        super();
    }

    getPetById(id: number): Observable<PetModel> {
        return from(this.pets)
            .pipe(filter((pets: PetMockEntity) => pets.id === id))
            .pipe(map(this.mapper.mapFrom));
    }

    getPetsByVet(vetId: number): Observable<PetModel[]> {
        return from(this.pets)
            .pipe(
                filter(pet => pet.vetId === vetId),
                map(this.mapper.mapFrom),
                toArray()
            );
    }

    getAllPets(): Observable<PetModel[]> {
        return from(this.pets)
            .pipe(
                map(this.mapper.mapFrom),
                toArray()
            );
    }

}
