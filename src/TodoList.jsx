import React from 'react';
import { useSelector } from 'react-redux';

export default function TodoList() {

    const tarefas = useSelector(state => state.stateTarefas.tarefas);

    return (
        <div className="row">
            <div className="col-12">
                <h3>Tarefas</h3>
                <div className="list-group">
                    {tarefas.map((tarefa, index) => (
                        <div className="list-group-item" key={index}>
                            <h5>{tarefa}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

