import React, { Component } from 'react';
import   './app1.css';


class CharInfo extends Component {
    constructor (props){
        super(props);

        this.state ={
            expanded : false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    open(){
        this.setState({expanded : !this.state.expanded})
    }
    close(){
        this.setState({expanded : !this.state.expanded})
    }
    render() {
        const info = this.props.charInfo;

        if (!this.state.expanded){
            return <p className="btn btn-info" onClick = {this.open}>Mostrar Informações</p>
        }
        return(
            <div>
                <p className ="btn btn-danger"onClick={this.close}>olcultar informação</p>
                <ul>
        <li><h2 class= "color-text">Altura:{info.height}</h2></li>
        <li><h2 class= "color-text">Genêro:{info.gender}</h2></li>
        <li><h2 class= "color-text">Massa:{info.mass}</h2></li>
        <li><h2 class= "color-text">Data de Nascimento:{info.birth_year}</h2></li>
        <li><h2 class= "color-text">Cor do Cabelo:{info.hair_color}</h2></li>
        
                </ul>
            </div>
        )
        return(
            <div></div>
        )
    }
};
export default CharInfo;
