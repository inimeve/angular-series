import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VetModel } from 'src/app/core/vet/vet.model';
import { VetRepository } from 'src/app/core/vet/vet.repository';
import { VetWebEntity } from './vet-web.entity';
import { VetWebMapper } from './vet-web.mapper';


@Injectable({
    providedIn: 'root'
})
export class VetWebRepository extends VetRepository {

    private mapper = new VetWebMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getVetById(id: number): Observable<VetModel> {
        return this.http.get<any>(`https://60761b040baf7c0017fa78ca.mockapi.io/vets/${id}`)
            .pipe(
                map(vetArray => vetArray.map((vet: VetWebEntity) => {
                    return this.mapper.mapFrom(vet);
                }))
            );
    }

    getAllVets(): Observable<VetModel[]> {
        return this.http.get<any>('https://60761b040baf7c0017fa78ca.mockapi.io/vets')
            .pipe(
                map(vetArray => vetArray.map((vet: VetWebEntity) => {
                    return this.mapper.mapFrom(vet);
                }))
            );
    }

}
