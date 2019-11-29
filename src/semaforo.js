import React from 'react';
import './App.css';

class Semaforo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            semaforo: null
        };
    }


    ficarVermelho = () => {
        this.setState({
            semaforo: 'vermelho'
        });

    }

    ficarVerde = () => {
        this.setState({
            semaforo: 'verde'
        });
        
    }

    ficarAmarelo = () => {
        this.setState({
            semaforo: 'amarelo'
        });
        
    }

    render(){
        return (
            <div className="App">
                <p>{this.state.semaforo}</p>
                <button onClick={this.ficarVermelho} className="botao">Vermelho</button>
                <button onClick={this.ficarAmarelo} className="botao">Amarelo</button>
                <button onClick={this.ficarVerde} className="botao">Verde</button>
            </div>
        )
    }
}

export default Semaforo; 

