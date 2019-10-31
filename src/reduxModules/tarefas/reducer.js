import * as types from './types';

const initialState = {
    tarefas: ['Alimentar o gato'],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.TAREFAS_NOVA_TAREFA:
            return { ...state, tarefas: [...state.tarefas, payload]};
    
        default:
            return state;
    }
};