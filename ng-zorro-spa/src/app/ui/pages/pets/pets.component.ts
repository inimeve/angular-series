import { Component, OnInit } from '@angular/core';
import { PetModel } from 'src/app/core/pet/pet.model';
import { PetUseCases } from 'src/app/core/pet/pet.usecases';
import { VetUseCases } from 'src/app/core/vet/vet.usecases';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.less']
})
export class PetsComponent implements OnInit {

  vetPets: PetModel[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.petUsesCases.getPetsByVet(1)
    //   .subscribe({
    //     next: (pets: PetModel[]) => {
    //       this.vetPets = pets;
    //     }
    //   });
  }

}
