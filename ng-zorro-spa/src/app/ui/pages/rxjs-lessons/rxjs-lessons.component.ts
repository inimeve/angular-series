import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap, switchMap, tap, toArray } from 'rxjs/operators';
import { PetModel } from 'src/app/core/pet/pet.model';
import { PetUseCases } from 'src/app/core/pet/pet.usecases';
import { VetModel } from 'src/app/core/vet/vet.model';
import { VetUseCases } from 'src/app/core/vet/vet.usecases';

@Component({
  selector: 'app-rxjs-lessons',
  templateUrl: './rxjs-lessons.component.html',
  styleUrls: ['./rxjs-lessons.component.less']
})
export class RxjsLessonsComponent implements OnInit {

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
  }

}
