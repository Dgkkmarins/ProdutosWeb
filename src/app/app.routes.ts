import { Routes } from '@angular/router';
import { CadastrarProdutos } from './cadastrar-produtos/cadastrar-produtos';
import { ConsultarProdutos } from './consultar-produtos/consultar-produtos';
import { EditarProdutos } from './editar-produtos/editar-produtos';

//mapeamento de rotas da aplicação 
export const routes: Routes = [
    {
        path: 'cadastrar-produtos',//rota
        component:CadastrarProdutos //componente
    },
    {
        path: 'consultar-produtos',//rota
        component :ConsultarProdutos  //componente
    },
    {
        path:'editar-produto',
        component:EditarProdutos
    },
    {
        path:'', //rota padrão
        redirectTo:'/consultar-produtos', //redirecionamento
        pathMatch:'full' //corresponde exatamente à rota vazia
    }
   
];
