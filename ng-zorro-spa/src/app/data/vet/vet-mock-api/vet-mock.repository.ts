import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VetModel } from 'src/app/core/vet/vet.model';
import { VetRepository } from 'src/app/core/vet/vet.repository';
import { VetMockMapper } from './vet-mock.mapper';


@Injectable({
    providedIn: 'root'
})
export class VetMockRepository extends VetRepository {

    private mapper = new VetMockMapper();

    constructor() {
        super();
    }

    getVetById(id: number): Observable<VetModel> {
        throw new Error('Method not implemented.');
    }
    getAllVets(): Observable<VetModel[]> {
        throw new Error('Method not implemented.');
    }

}
