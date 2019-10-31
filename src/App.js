import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="row">
                        <div className="col">
                            <NewTodo />
                            <TodoList />
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
