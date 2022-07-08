import { Component, h, Host, State } from '@stencil/core';
import { TableComponent } from '../app-table/app-table';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class TodoComponent {

  //Quando inicializa a vaiavel n precisa declarar seu tipo
  @State() tasks: string[] = []

  /*
  O Host ao contrário da div, ele serve para fazer o wrapper dos elementos mas não é renderizado no html */

  /* 
  quando eu faço um push no meu array da nova tarefa, ele nao atualiza esse estado. Para resolver isso criamos um novo array com tudo que tinha no outro (...this,task) e adc minha nova task (ev.detail)
  */
  handleAdd = (ev: CustomEvent) => {
    this.tasks = [
      ...this.tasks,
      ev.detail
    ]
  }

  componentDidLoad() {
    console.log('carreguei')
  }

  componentDidUpdate() {
    console.log('Atualizei')
  }

  /* 
  sempre que vai se referenciar a um evento do filho  precisa colocar o on+nomeDoEvento (com CamelCase)
  */
  render() {
    return (
      <Host>
        <app-form onAddTask={this.handleAdd}></app-form>
        <TableComponent>
          <ul>
            {this.tasks.map((t,i) => <li key={i}>{t}</li> )}
          </ul>
     </TableComponent>
     </Host>
    );
  }
}
