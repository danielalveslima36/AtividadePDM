export class Usuario {
    private _email: string;
    private _senha: string;

    constructor(email: string, senha: string) {
        this._email = email;
        this._senha = senha;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get senha(): string {
        return this._senha;
    }

    set senha(value: string) {
        this._senha = value;
    }

    ehAdmin(): boolean {
        return false;
    }

}