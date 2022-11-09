import { HomeComponent } from './home/home.component';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path:'cadastro', component: CadastroViagemComponent},
  {path:'lista', component: ListagemViagemComponent},
  {path:'detalhes/:id', component: DetalhesViagemComponent},
  {path:'excluir/:id', component: ExclusaoViagemComponent},
  {path:'**', component: HomeComponent},
]

@NgModule({
  declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
