import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VetModel } from './vet.model';
import { VetRepository } from './vet.repository';


@Injectable({
    providedIn: 'root'
})
export class VetUseCases {

    private vetSubject = new BehaviorSubject<VetModel[]>([]);
    public vets$ = this.vetSubject.asObservable();

    constructor(private vetRepository: VetRepository) {
        this.updateVets();
    }

    updateVets(): void {
        this.vetRepository.getAllVets().subscribe({
            next: (vets: VetModel[]) => {
                this.vetSubject.next(vets);
            },
            error: error => console.error(error),
            complete: () => console.info('Vets updated!')
        })
    }

    addVet(name: string, age: number, addres: string, phone: string): VetModel {
        const vetToAdd: VetModel = {
            name: name,
            age: age,
            address: addres,
            phone: phone
        };

        const currentVets: VetModel[] = this.vetSubject.getValue();
        const updatedVets: VetModel[] = [...currentVets, vetToAdd];
        this.vetSubject.next(updatedVets);

        return vetToAdd;
    }

    getVetById(id: number): Observable<VetModel> {
        return this.vetRepository.getVetById(id);
    }

}
