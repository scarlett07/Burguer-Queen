import React from 'react';
import ReactDOM from 'react-dom';

import { Component } from 'react';
import { Button } from 'reactstrap';



export default function Menu(props) {
    console.log(props);
    let titulos = Object.keys(props.data[0]);
    
    function Title(titulos){
       return (
            titulos.map(item=><th>{item}</th>)
       )
    }

    function list (props) {
        const cosas = props.data;
        return(
            cosas.map(element =>{
              return (<tr>
                        <td>{element.item}</td>
                        <td>{element.price}</td>
                        <td><Button color="danger">Danger!</Button></td>
                    </tr>)
            }) 
        )    
    }
    return(
        <table>
            <thead>
             <tr>
              {Title(titulos)}
              <th>Orden</th>
             </tr>
            </thead>
            <tbody>
             {list(props)}
            </tbody>
        </table>
    )
};