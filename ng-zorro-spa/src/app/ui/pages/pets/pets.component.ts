import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetModel } from 'src/app/core/pet/pet.model';
import { PetUseCases } from 'src/app/core/pet/pet.usecases';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.less']
})
export class PetsComponent implements OnInit {

  // pets: PetModel[] = [];
  pets$: Observable<PetModel[]> = this.petUseCases.pets$;

  constructor(private petUseCases: PetUseCases) { }

  ngOnInit(): void {
    // this.petUseCases.getAllPets().subscribe({
    //   next: (value) => this.pets = value,
    //   error: (error) => console.log(error),
    //   complete: () => console.log('complete')
    // });
  }

}
