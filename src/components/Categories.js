import React, {Component} from 'react';
import Category from './Category';


class Categories extends Component{
    constructor(){
        super()
        this.state ={
            productsList : []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{            
            this.setState({productsList: products.countByCategory})            
        })
        .catch(error => console.log(error))
    }

    

    render(){
        return (
            <React.Fragment>                
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800 titulo">Categorías en la base de datos</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">                                
                                {
                                this.state.productsList.map((products,i)=>{
                                return  <Category {...products}  key={i} />
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
    </React.Fragment>
    )
    }
}
export default Categories;
