import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Elements
import Menu from './Menu';

//Data 
import data from './data';

function App(){
    return(
        <div>
            <Menu data={data.breakfast} />       
            <Menu data={data.food[0].hambueguesas} />       
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('contenedor'))