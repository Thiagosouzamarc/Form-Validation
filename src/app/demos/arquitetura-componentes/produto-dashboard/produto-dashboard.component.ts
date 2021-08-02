import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto.count.component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[]

  @ViewChild(ProdutoCountComponent, {static: false}) contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clicou no texto');
      return;
    });

    console.log('Objeto do contador', this.contador.produtos);

    console.log(this.botoes);
    this.botoes.forEach(p => {
      console.log(p.produto);
    })
  }

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
    // this.produtos = [{
    //   id: 1,
    //   nome: 'Teste',
    //   ativo: true,
    //   valor: 100,
    //   imagem: 'celular.jpg'
    // },
    // {
    //   id: 2,
    //   nome: 'Teste 2',
    //   ativo: true,
    //   valor: 200,
    //   imagem: 'gopro.jpg'
    // },
    // {
    //   id: 3,
    //   nome: 'Teste 3',
    //   ativo: true,
    //   valor: 300,
    //   imagem: 'laptop.jpg'
    // },
    // {
    //   id: 4,
    //   nome: 'Teste 4',
    //   ativo: true,
    //   valor: 400,
    //   imagem: 'mouse.jpg'
    // },
    // {
    //   id: 5,
    //   nome: 'Teste 5',
    //   ativo: true,
    //   valor: 500,
    //   imagem: 'teclado.jpg'
    // },
    // {
    //   id: 6,
    //   nome: 'Teste 6',
    //   ativo: false,
    //   valor: 600,
    //   imagem: 'headset.jpg'
    // }];
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

}
