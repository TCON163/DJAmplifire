export  class Token {
private _access_token!:string;
private _token_type!: string;
private _scope!: string ;
private _expires_in!: number;
private _refresh_token!: string;


public get access_token() {
        return this._access_token;
    }

    public get token_type() {
        return this._token_type;
    }

    public get scope() {
        return this._scope;
    }

    public get expires_in() {
        return this._expires_in;
    }

    public get refresh_token() {
        return this._refresh_token;
    }

    public set access_token(theaccess_token: string) {

        this._access_token = theaccess_token;
    }

    public set token_type(thetoken_type: string) {

        this._token_type = thetoken_type;
    }

    public set scope(thescope: string) {

        this._scope = thescope;
    }

    public set refresh_token(therefresh_token: string) {

        this._refresh_token = therefresh_token;
    }

    public set expires_in(theexpires_in: number) {

        this._expires_in = theexpires_in;
    }

}