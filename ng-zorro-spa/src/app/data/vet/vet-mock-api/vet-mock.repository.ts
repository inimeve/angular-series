import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';
import { VetModel } from 'src/app/core/vet/vet.model';
import { VetRepository } from 'src/app/core/vet/vet.repository';
import { VetMockEntity } from './vet-mock.entity';
import { VetMockMapper } from './vet-mock.mapper';


@Injectable({
    providedIn: 'root'
})
export class VetMockRepository extends VetRepository {

    private mapper = new VetMockMapper();

    vets: VetMockEntity[] = [
        {
            id: 1,
            name: 'Vet 1',
            age: 15,
            address: 'Address 1',
            phone: '654321987'
        },
        {
            id: 2,
            name: 'Vet 2',
            age: 25,
            address: 'Address 2',
            phone: '654321987'
        },
        {
            id: 3,
            name: 'Vet 3',
            age: 35,
            address: 'Address 3',
            phone: '654321987'
        }
    ];

    constructor() {
        super();
    }

    getVetById(id: number): Observable<VetModel> {
        return from(this.vets)
            .pipe(filter((vets: VetMockEntity) => vets.id === id))
            .pipe(map(this.mapper.mapFrom));
    }

    getAllVets(): Observable<VetModel[]> {
        return from(this.vets)
        .pipe(
            map(this.mapper.mapFrom),
            toArray()
        );
    }

}
