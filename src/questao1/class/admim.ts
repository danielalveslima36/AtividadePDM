import { Usuario } from "./usuario";

export class Admin extends Usuario {
    private _ehAdmin: boolean;

    constructor(email: string, senha: string, admin: boolean) {
        super(email, senha);
        this._ehAdmin = admin;
    }

    ehAdmin(): boolean {
        return this._ehAdmin;
    }
}