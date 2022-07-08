import { Component, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class FormComponent {

  @State() task: string = ''
  @Event() addTask: EventEmitter
/*
    É preciso transformar a função em arrow function pois o navegador executa ela em algum momento, de alguma maneira, mas este não sabe que se refere a nossa classe TodoComponent. Dessa maneira, o contexto do this vai ser baseada onde ela foi criada, ou seja o this dela será referenciado ao ToDoComponent
  */

  handleSubmit = (ev: Event) => {
      ev.preventDefault()
      if(this.task.trim()) {
        this.addTask.emit(this.task)
      } 
      this.task = ''
  }
  
  handleInput = (ev: Event) => {
      const field = ev.target as HTMLInputElement
      if (field.value != '') {
        this.task = field.value
      }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input 
        onInput={this.handleInput}
        value={this.task}
        ></input>
      <button>Adicionar</button>
     </form>
    );
  }

}
