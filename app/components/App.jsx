import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Bubbles from './Bubbles.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state  = {
            
        }
    }
    render(){
        return(
            <div>
               
                <Bubbles /> 
                
            </div>          
        )
    }
}
export default App;
