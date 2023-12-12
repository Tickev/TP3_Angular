import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Specialite } from 'src/app/models/specialite';
import { SpecServiceService } from 'src/app/services/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {

  //Utilisation de la communication Binding Parent --> Child
  @Input() messageChild: string = '';

  //Utilisation de la directive NgFor
  tabService?: Specialite[];
  service?: Specialite;

  constructor(private specialiteService: SpecServiceService) {}

  ngOnInit(): void {
    this.tabService = this.specialiteService.tabSpecialites;
  }

}
