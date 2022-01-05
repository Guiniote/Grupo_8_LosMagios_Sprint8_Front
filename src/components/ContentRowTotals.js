import React, { Component } from 'react';
import TotalAmountPanel from './TotalAmountPanel'


class ContentRowTotals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterData: []
    }
}

componentDidMount(){
    let promises = [
    fetch(process.env.REACT_APP_API + "/api/products").then(result => result.json()),
    fetch(process.env.REACT_APP_API + "/api/users").then(result => result.json()),
    fetch(process.env.REACT_APP_API + "/api/categories").then(result => result.json())
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

export default ContentRowTotals;
