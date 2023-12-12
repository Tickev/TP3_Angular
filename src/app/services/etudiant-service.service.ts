import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

  public tabEtudiants = [
    new Etudiant('Dupont', 'Jean', '1 rue de la Paix', '75000', 'Paris', 'dupont@gmail.com', 'M', 20, 1),
    new Etudiant('Durand', 'Marie', '2 rue de la Paix', '75000', 'Paris', 'durand@gmail.com', 'F', 21, 2),
    new Etudiant('Martin', 'Pierre', '3 rue de la Paix', '75000', 'Paris', 'martin@glail.com', 'M', 22, 3),
    new Etudiant('Bernard', 'Sophie', '4 rue de la Paix', '75000', 'Paris', 'bernard@gmail.com', 'F', 23, 4),
    new Etudiant('Dubois', 'Jacques', '5 rue de la Paix', '75000', 'Paris', 'jacquesdubois@gmail.com', 'M', 24, 5),
    new Etudiant('Trisson', 'Valentin', '25 rue du bourg', '54120', 'Brou-sur-Chantereine', 'trisson@gmail.com', 'F', 87, 6),
    new Etudiant('Saintemarie', 'Noémie', '25 rue du bourg', '54120', 'Brou-sur-Chantereine', 'saintemarie@gmail.com', 'M', 88, 7),
  ]

  constructor() { }
}
