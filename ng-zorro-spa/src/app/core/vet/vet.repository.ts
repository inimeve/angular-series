import { Observable } from 'rxjs';
import { VetModel } from './vet.model';

export abstract class VetRepository {

    abstract getVetById(id: number): Observable<VetModel>;

    abstract getAllVets(): Observable<VetModel[]>;

}
