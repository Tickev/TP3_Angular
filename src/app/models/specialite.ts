import { ISpecialite } from './ispecialite';

export class Specialite {
    constructor(
        public _libelle: string,
        public _idSpec: number
    ) {}

    getlibelle(): string {
        return this._libelle;
    }

    setlibelle(value: string) {
        this._libelle = value;
    }

    getidSpec(): number {
        return this._idSpec;
    }

    setidSpec(value: number) {
        this._idSpec = value;
    }
}
