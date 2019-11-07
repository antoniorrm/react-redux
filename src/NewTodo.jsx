import React, { useState } from 'react';
import {useDispatch } from 'react-redux';

import { tarefasNovaTarefa } from './reduxModules/tarefas/actions';
export default function NewTodo() {

    const [tarefa, setTarefa] = useState('');
    const dispatch = useDispatch();

    function onButtonClick() {
        dispatch(tarefasNovaTarefa(tarefa));
        setTarefa("");
    };

    return (
        <div className="row">
            <div className="col-5">
                <h4>Nova Tarefa</h4>
                <textarea
                    cols="30"
                    rows="3"
                    value={tarefa}
                    onChange={event => setTarefa(event.target.value)}
                />
                <button
                    className="btn btn-primary col-12"
                    onClick={onButtonClick}>
                    OK
                    </button>
            </div>
        </div>
    );
}
