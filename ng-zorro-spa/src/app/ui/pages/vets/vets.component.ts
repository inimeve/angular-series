import { Component, OnInit } from '@angular/core';
import { VetModel } from 'src/app/core/vet/vet.model';
import { VetUseCases } from 'src/app/core/vet/vet.usecases';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.less']
})
export class VetsComponent implements OnInit {

  vets: Array<VetModel> = [];

  constructor(private vetUsesCases: VetUseCases) { }

  ngOnInit(): void {
    this.loadVets();
  }

  loadVets(): void {
    this.vetUsesCases.getAllVets().subscribe({
      next: (value) => this.vets = value,
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    });
  }

}
