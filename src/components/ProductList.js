import React, {Component} from 'react';
import ProductListRow from './ProductListRow';



class ProductList extends Component {
    constructor(){
        super();
        this.state = {
            productsList: [],
            productsApis: [],
            productsDetail: []
        }
    }

    componentDidMount(){                 
        fetch('http://localhost:3001/api/products')
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {                   
            this.setState({ 
                productsList: data.products                
            })     
        })
        .catch(error => console.log(error))              
    }
    
    

    render(){
        return (
            <React.Fragment>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Detalle</th>                                    
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Detalle</th>  
                                </tr>
                            </tfoot>
                            <tbody>                                                                
                                {
                                this.state.productsList.map((product, index) => {                                                                       
                                    return <ProductListRow {...product} key={index} />
                                })                                
                                } 

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default ProductList;