import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-etudianthorsparis',
  templateUrl: './etudianthors-paris.component.html',
  styleUrls: ['./etudianthors-paris.component.css']
})
export class EtudianthorsParisComponent implements OnInit {

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

