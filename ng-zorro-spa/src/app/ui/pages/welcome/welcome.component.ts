import { Component, OnInit } from '@angular/core';
import { PetModel } from 'src/app/core/pet/pet.model';
import { PetUseCases } from 'src/app/core/pet/pet.usecases';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  pets: Array<PetModel> = [];

  constructor(private petUsesCases: PetUseCases) { }

  ngOnInit(): void {
  }

  loadPets(): void {
    this.petUsesCases.getAllPets().subscribe((value: PetModel[]) => {
      this.pets = value;
    });
  }

}
