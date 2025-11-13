import { HttpClient } from '@angular/common/http';
import { Component, inject,} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //instaciando a biblioteca de HTTP CLient
  
  private http=inject(HttpClient);

  //função para realizar a pesquisa de produtos
  consultarProduto() {

    console.log("consulta de produtos iniciada");

 //realizando a requisição HTTP para obter a lista de produtos
 this.http.get('http://localhost:5114/api/produtos')
  .subscribe((produtos)=>{//capturando a resposta da requisição
    //imprimindo os produtos no console do navegador
    console.log(produtos);
   });
}
}
