import { IEtudiant } from './ietudiant';

export class Etudiant implements IEtudiant {
    constructor(
        public _nom: string,
        public _prenom: string,
        public _rue: string,
        public _cp: string,
        public _ville: string,
        public _courriel: string,
        public _genre: string,
        public _age: number,
        public _idCand: number
    ) {}

    getnom(): string {
        return this._nom;
    }

    setnom(value: string) {
        this._nom = value;
    }

    getprenom(): string {
        return this._prenom;
    }

    setprenom(value: string) {
        this._prenom = value;
    }

    getrue(): string {
        return this._rue;
    }

    setrue(value: string) {
        this._rue = value;
    }

    getcp(): string {
        return this._cp;
    }

    setcp(value: string) {
        this._cp = value;
    }

    getville(): string {
        return this._ville;
    }

    setville(value: string) {
        this._ville = value;
    }

    getcourriel(): string {
        return this._courriel;
    }

    setcourriel(value: string) {
        this._courriel = value;
    }

    getgenre(): string {
        return this._genre;
    }

    setgenre(value: string) {
        this._genre = value;
    }

    getage(): number {
        return this._age;
    }

    setage(value: number) {
        this._age = value;
    }

    getidCand(): number {
        return this._idCand;
    }

    setidCand(value: number) {
        this._idCand = value;
    }
}
