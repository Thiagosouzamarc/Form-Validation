import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoRoutingModule } from "./produto.route";

import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.component";

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutoCountComponent } from "./componentes/produto.count.component";
import { ExcelService } from "./componentes/excel-service";
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from "./produtos.app.component";
registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: [],
    providers: [ExcelService]
})

export class ProdutoModule{}