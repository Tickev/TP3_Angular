import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecServiceService {
  public tabSpecialites = [
    new Specialite('Informatique', 1),
    new Specialite('Marketing', 2),
    new Specialite('Comptabilité', 3),
    new Specialite('Gestion', 4),
    new Specialite('Communication', 5),
  ]

  constructor() { }

}
