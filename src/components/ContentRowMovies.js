import React, { Component } from 'react';
import TotalAmountPanel from './TotalAmountPanel'

class ContentRowMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterData: []
    }
}

componentDidMount(){
    let promises = [
    fetch("https://losmagiosback.herokuapp.com/api/products").then(result => result.json()),
    fetch("https://losmagiosback.herokuapp.com/api/users").then(result => result.json()),
    fetch("https://losmagiosback.herokuapp.com/api/categories").then(result => result.json())
    ];
    
    Promise.all(promises)
    .then(result => {
    let products = result[0].count;
    let users = result[1].total;
    let category = result[2].meta;

    this.setState({
            counterData: [
                {
                title: "Total de Usuarios",
                color: "primary",
                value: users
                },
                {
                title: "Total de productos",
                color: "info",
                value: products
                },
                {
                title: "Total de categorías",
                color: "warning",
                value: category.total
                }
                    ]
                });
            })
    }

        componentDidUpdate(){}
        render(){
            return(
            <React.Fragment>
            <div className="row">
                {this.state.counterData.length ?
                    this.state.counterData.map((counter, index) =>
                    <TotalAmountPanel
                    title={counter.title}
                    color={counter.color}
                    iconClass={counter.iconClass}
                    value={counter.value}
                    key={index}
                    />):   <p>Cargando datos </p>}
            </div>
            </React.Fragment>
            )}
}

export default ContentRowMovies;
