import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  //Utilisation de la communication Binding Parent --> Child
  @Input() messageChild: string = '';

  //Utilisation de la directive NgFor
  tabEtudiant?: Etudiant[];
  etudiant?: Etudiant;

  constructor(private etudiantService: EtudiantServiceService) {}

  ngOnInit(): void {
    this.tabEtudiant = this.etudiantService.tabEtudiants;
  }

}
