import React, {Component} from 'react';

class LastProduct extends Component{
    constructor(){
        super()
        this.state ={
            productLast : {}
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/api/products')
        .then(respuesta =>{

            return respuesta.json()
        })
        .then(products =>{
            let product= products.products
            let last = product.pop()        
         
            this.setState({productLast: {
                id : last.id,
                name : last.name,
                description: last.description,
                image: last.images[0],
                detail: last.detail         
            }   
            })           
        })
        .catch(error => console.log(error))
    }



    render(){
        return (
            <React.Fragment>            
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={process.env.REACT_APP_API + '/images/' + this.state.productLast.image} alt=" Producto "/>
                            </div>
                            <p>{this.state.productLast.description}</p> 
                            <a className="btn btn-danger" target="_blank" rel="noreferrer" href={this.state.productLast.detail}>Ver detalle del producto</a>
                        </div>
                    </div>
                </div>
    </React.Fragment>
    )
    }
}

export default LastProduct;
