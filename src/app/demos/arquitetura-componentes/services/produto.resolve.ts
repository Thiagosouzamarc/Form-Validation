import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Produto } from "../models/produto";
import { ProdutoService } from "./produtos.service";

@Injectable()
export class ProdutosResolve implements Resolve<Produto[]> {

    constructor(private produtoService: ProdutoService){}

    resolve(route: ActivatedRouteSnapshot) {
        return this.produtoService.obterTodos(route.params.estado);
    }

}