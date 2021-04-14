import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PetModel } from 'src/app/core/pet/pet.model';
import { PetRepository } from 'src/app/core/pet/pet.repository';
import { PetWebEntity } from './pet-web.entity';
import { PetWebMapper } from './pet-web.mapper';


@Injectable({
    providedIn: 'root'
})
export class PetWebRepository extends PetRepository {

    private mapper = new PetWebMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getPetById(id: number): Observable<PetModel> {
        throw new Error('Method not implemented.');
    }

    // getPetsByVet(vetId: number): Observable<PetModel[]> {
    //     throw new Error('Method not implemented.');
    // }

    getAllPets(): Observable<PetModel[]> {
        return this.http.get<any>('https://60761b040baf7c0017fa78ca.mockapi.io/pets')
        .pipe(
            map(petArray => petArray.map((pet: PetWebEntity) => {
                return this.mapper.mapFrom(pet);
            }))
        );
    }

}
