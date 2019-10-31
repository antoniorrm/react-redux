import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tarefas: ['Alimentar o cachorro'],
        };
    }

    render() {
        const { tarefas } = this.state;
        return (
            <div className="row">
                <div className="col-12">
                    <h3>Tarefas</h3>
                    <div className="list-group">
                        {tarefas.map((tarefa, index) => (
                            <div className="list-group-item" key={tarefa}>
                                <h5>{tarefa}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}