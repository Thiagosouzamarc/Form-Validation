import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Produto } from "../models/produto";
import { ExcelService } from "./excel-service";


@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html'
})

export class ProdutoDetalheComponent {

    data: any = [{
        eid: 'e101',
        ename: 'ravi',
        esal: 1000
      },
      {
        eid: 'e102',
        ename: 'ram',
        esal: 2000
      },
      {
        eid: 'e103',
        ename: 'rajesh',
        esal: 3000
      }];

    @Input() produto: Produto
    @Output() status: EventEmitter<any> = new EventEmitter();

    emitirEvento() {
        this.status.emit(this.produto);
    }

    constructor(private excelService: ExcelService){};

    // exportAsXLSX():void {
    //     const tabl = document.getElementById('table');
    //     this.excelService.exportToTable(tabl, 'sample');
    //   }
}