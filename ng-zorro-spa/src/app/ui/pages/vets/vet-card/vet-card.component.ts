import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet-card',
  templateUrl: './vet-card.component.html',
  styleUrls: ['./vet-card.component.less']
})
export class VetCardComponent implements OnInit {

  @Input()
  name: string = '';

  @Input()
  age: number = 0;

  @Input()
  address: string = '';

  @Input()
  phone?: string = '';

  @Input()
  skillLevel?: number;

  @Input()
  experiencePoints?: number;

  @Input()
  specialization?: string;

  @Input()
  city?: string;

  @Input()
  joinDate?: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
