import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VetModel } from 'src/app/core/vet/vet.model';
import { VetUseCases } from 'src/app/core/vet/vet.usecases';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.less']
})
export class VetsComponent implements OnInit {

  // vets: Array<VetModel> = [];

  vets$: Observable<VetModel[]> = this.vetUsesCases.vets$;

  constructor(private vetUsesCases: VetUseCases) { }

  ngOnInit(): void {
  }

}
