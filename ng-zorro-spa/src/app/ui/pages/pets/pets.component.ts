import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PetModel } from 'src/app/core/pet/pet.model';
import { PetUseCases } from 'src/app/core/pet/pet.usecases';
import { VetModel } from 'src/app/core/vet/vet.model';
import { VetUseCases } from 'src/app/core/vet/vet.usecases';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.less']
})
export class PetsComponent implements OnInit {

  // pets: PetModel[] = [];
  pets$: Observable<PetModel[]> = this.petUseCases.pets$;

  vets$: Observable<VetModel[]> = this.vetUseCases.vets$;

  petsWithVets$: Observable<any> = combineLatest([this.petUseCases.pets$, this.vetUseCases.vets$])
    .pipe(
      map(([pets, vets]) => pets.map(
        p => {
          return ({
            ...p,
            vet: vets.find(v => p.vetId == v.id) as any
          })
        }
      ))
    );

  constructor(private petUseCases: PetUseCases, private vetUseCases: VetUseCases) { }

  ngOnInit(): void {
    // this.petUseCases.getAllPets().subscribe({
    //   next: (value) => this.pets = value,
    //   error: (error) => console.log(error),
    //   complete: () => console.log('complete')
    // });
  }

  getVet(vetId: number): Observable<VetModel> {
    return this.vetUseCases.findVet(vetId);
  }

}
