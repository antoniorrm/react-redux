import * as types from './types';

export function tarefasNovaTarefa(tarefa) {
    return dispatch => {
        dispatch({
            type: types.TAREFAS_NOVA_TAREFA,
            payload: tarefa
        });
    }
}