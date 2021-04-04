import { Observable } from 'rxjs';
import { PetModel } from './pet.model';

export abstract class PetRepository {

    abstract getPetById(id: number): Observable<PetModel>;

    abstract getAllPets(): Observable<PetModel[]>;

}
