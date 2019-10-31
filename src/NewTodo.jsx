import React, { Component } from 'react';
import { connect } from 'react-redux';

import { tarefasNovaTarefa } from './reduxModules/tarefas/actions';
class NewTodo extends Component {
    state = {
        novaTarefa: '',
    };

    handleChange = event => {
        this.setState({
            novaTarefa: event.target.value,
        });
    };

    onButtonClick = () => {
        this.props.tarefasNovaTarefa(
            this.state.novaTarefa
        );
        this.setState({
            novaTarefa: '',
        });
    };

    render() {
        const { novaTarefa } = this.state;
        return (
            <div className="row">
                <div className="col-5">
                    <h4>Nova Tarefa</h4>
                    <textarea
                        cols="30"
                        rows="3"
                        value={novaTarefa}
                        onChange={this.handleChange}
                    />
                    <button
                        className="btn btn-primary col-12"
                        onClick={this.onButtonClick}>
                        OK
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    tarefasNovaTarefa,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTodo);
