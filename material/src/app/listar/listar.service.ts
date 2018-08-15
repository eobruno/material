import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { URL_API } from '../app.api'

@Injectable()
export class ListarService {
    ofertas: Object[] =[];

    constructor(private http: HttpClient) { }

    

    listarOfertas() {
        return this.http
            .get<Object[]>(URL_API + '/ofertas')
            .subscribe(ofertas => {
                
                this.ofertas = ofertas
                console.log(this.ofertas)
            });


    }

}
